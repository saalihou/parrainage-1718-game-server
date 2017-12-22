var socket = require('socket.io');
var express = require('express');
const _ = require('lodash');
const fs = require('fs');
const cors = require('cors');

const reinit = require('./src/reinit');
const selectFathers = require('./src/selectFathers');
const selectSons = require('./src/selectSons');
const selectQuestion = require('./src/selectQuestion');
const sponsor = require('./src/sponsor');
const getRemainingSons = require('./src/getRemainingSons');

var app = express();
app.use(cors());
var server = app.listen(8081, '0.0.0.0', function() {
  console.log('server launched');
  // reinit();
});

var io = socket(server, {
  origins: '*:*'
});

let fathers = [];
let sons = [];

function reinitialize() {
  return {
    selectedFathers: [],
    selectedSons: [],
    selectedCriteria: [],
    currentQuestion: null,
    currentCriterion: null,
    distributedCriteria: [[], []],
    state: 'INIT'
  };
}

let gameState = reinitialize();

const getCorrectAnswer = () => {
  return gameState.currentQuestion.answers.find(elem => {
    return elem.good;
  });
};

let clientCount = 0;
let wrongAnswerCount = 0;

io.on('connection', function(socket) {
  console.log(`New client connected with id ${socket.id}`);

  let clientIndex = null;

  socket.emit('gameState', gameState);

  socket.on('gameClient', function() {
    console.log('gameClient', clientCount);
    socket.emit('clientIndex', clientCount);
    setTimeout(() => {
      socket.emit('gameState', gameState);
    });
    clientIndex = clientCount;
    clientCount++;
    if (clientCount > 1) {
      clientCount = 0;
    }
  });

  socket.on('initGame', async function() {
    console.log('initGame');
    gameState = reinitialize();
    gameState.selectedSons = await selectSons();
    gameState.selectedSons.forEach((son, index) => {
      if (!fs.existsSync(`./clients/affichage/` + son.photo)) {
        son.photo = 'assets/images/jedi.jpg';
      }
    });
    gameState.selectedFathers = await selectFathers();
    gameState.selectedFathers.forEach((father, index) => {
      if (!fs.existsSync(`./clients/affichage/` + father.photo)) {
        father.photo = 'assets/images/jedi.jpg';
      }
    });
    gameState.remainingSons = await getRemainingSons();
    console.log(gameState.remainingSons);
    const father1Criteria = _.sampleSize(
      gameState.selectedFathers[0].criteria,
      3
    );
    const father2Criteria = _.sampleSize(
      gameState.selectedFathers[1].criteria,
      3
    );
    gameState.selectedCriteria = father1Criteria.concat(father2Criteria);
    gameState.state = 'INIT';
    io.sockets.emit('gameState', gameState);
  });

  socket.on('nextQuestion', async function() {
    if (
      _.flatten(gameState.distributedCriteria).length ===
      gameState.selectedCriteria.length
    ) {
      return;
    }
    gameState.winner = null;
    wrongAnswerCount = 0;
    const question = await selectQuestion();
    gameState.currentQuestion = question;
    do {
      gameState.currentCriterion = _.random(
        0,
        gameState.selectedCriteria.length - 1
      );
    } while (_.flatten(gameState.distributedCriteria).includes(gameState.currentCriterion));
    gameState.state = 'QUESTION';
    io.sockets.emit('gameState', gameState);
  });

  function checkWinner() {
    const distributedCriteria = gameState.distributedCriteria;
    if (
      _.flatten(distributedCriteria).length ===
      gameState.selectedCriteria.length
    ) {
      const winnerIndex =
        distributedCriteria[0].length > distributedCriteria[1].length ? 0 : 1;
      const wonCriteria = distributedCriteria[winnerIndex];
      const firstFatherCount = wonCriteria.filter(index => index <= 2).length;
      const secondFatherCount = wonCriteria.filter(index => index > 2).length;
      const wonFatherIndex = firstFatherCount > secondFatherCount ? 0 : 1;
      gameState.result = [];
      gameState.result[winnerIndex] = wonFatherIndex;
      gameState.result[winnerIndex === 0 ? 1 : 0] =
        wonFatherIndex === 0 ? 1 : 0;
      saveSponsoring();
    }
  }

  async function saveSponsoring() {
    const pair1 = [
      gameState.selectedSons[0],
      gameState.selectedFathers[gameState.result[0]]
    ];
    const pair2 = [
      gameState.selectedSons[1],
      gameState.selectedFathers[gameState.result[1]]
    ];
    await sponsor.apply(null, pair1);
    await sponsor.apply(null, pair2);
  }

  function chooseRandomWinner() {
    const winnerIndex = _.random(0, 1);
    gameState.distributedCriteria[winnerIndex].push(gameState.currentCriterion);
    checkWinner();
  }

  socket.on('answer', function(index) {
    console.log('answer');
    const distributedCriteria = gameState.distributedCriteria;
    if (gameState.currentQuestion.answers[index].good) {
      console.log(clientIndex, gameState.distributedCriteria);
      gameState.distributedCriteria[clientIndex].push(
        gameState.currentCriterion
      );
      checkWinner();
      gameState.state = 'ROUND_END';
      gameState.winner = clientIndex;
      io.sockets.emit('goodAnswer');
      io.sockets.emit('gameState', gameState);
      io.sockets.emit('endRound', clientIndex);
    } else {
      wrongAnswerCount++;
      if (wrongAnswerCount == 2) {
        chooseRandomWinner();
        gameState.state = 'ROUND_END';
        io.sockets.emit('gameState', gameState);
        io.sockets.emit('endRound');
      }
      socket.emit('wrongAnswer');
    }
  });

  socket.on('timeout', function() {
    console.log('timeout');
    chooseRandomWinner();
    gameState.state = 'ROUND_END';
    io.sockets.emit('gameState', gameState);
    io.sockets.emit('endRound');
    io.sockets.emit('timeout');
  });
});
