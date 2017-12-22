var socket = require('socket.io');
var express = require('express');
const _ = require('lodash');

const reinit = require('./src/reinit');
const selectFathers = require('./src/selectFathers');
const selectSons = require('./src/selectSons');
const selectQuestion = require('./src/selectQuestion');

var app = express();
var server = app.listen(8081, function() {
  console.log('server launched');
  reinit();
});

var io = socket(server);

let fathers = [];
let sons = [];

function reinitialize() {
  return {
    selectedFathers: [],
    selectedSons: [],
    selectedCriteria: [],
    currentQuestion: null,
    currentCriterion: null,
    distributedCriteria: [[], []]
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

  socket.on('reinitialize', function() {
    gameState = reinitialize();
    io.sockets.emit('gameState', gameState);
  });

  socket.on('gameClient', function() {
    socket.emit('clientIndex', clientCount);
    clientIndex = clientCount;
    clientCount++;
  });

  socket.on('initGame', async function() {
    gameState.selectedSons = await selectSons();
    gameState.selectedFathers = await selectFathers();
    const father1Criteria = _.sampleSize(
      gameState.selectedFathers[0].criteria,
      3
    );
    const father2Criteria = _.sampleSize(
      gameState.selectedFathers[1].criteria,
      3
    );
    gameState.selectedCriteria = father1Criteria.concat(father2Criteria);
    io.sockets.emit('gameState', gameState);
  });

  socket.on('nextQuestion', async function() {
    wrongAnswerCount = 0;
    const question = await selectQuestion();
    gameState.currentQuestion = question;
    do {
      gameState.currentCriterion = _.random(
        0,
        gameState.selectedCriteria.length - 1
      );
    } while (_.flatten(gameState.distributedCriteria).includes(gameState.currentCriterion));
    io.sockets.emit('gameState', gameState);
  });

  function checkWinner() {
    const distributedCriteria = gameState.distributedCriteria;
    if (_.flatten(distributedCriteria).length === 6) {
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
    }
  }

  function chooseRandomWinner() {
    const winnerIndex = _.random(0, 1);
    gameState.distributedCriteria[winnerIndex].push(gameState.currentCriterion);
    checkWinner();
  }

  socket.on('answer', function(index) {
    const distributedCriteria = gameState.distributedCriteria;
    if (gameState.currentQuestion.answers[index].good) {
      gameState.distributedCriteria[clientIndex].push(
        gameState.currentCriterion
      );
      checkWinner();
      io.sockets.emit('gameState', gameState);
      io.sockets.emit('endRound', clientIndex);
    } else {
      wrongAnswerCount++;
      if (wrongAnswerCount == 2) {
        chooseRandomWinner();
        io.sockets.emit('gameState', gameState);
        io.sockets.emit('endRound');
      }
      socket.emit('wrongAnswer');
    }
  });

  socket.on('timeout', function() {
    console.log('timeout')
    chooseRandomWinner();
    io.sockets.emit('gameState', gameState);
    io.sockets.emit('endRound');
  });
});
