var socket = require('socket.io');
var express = require('express');

var app = express();
var server = app.listen(8081, function() {
  console.log('server launched');
});

var io = socket(server);

let fathers = [];
let sons = [];

const gameState = {
  selectedFathers: [
    {
      id: 1,
      name: 'Papi',
      photo: 'http://placehold.it/400x400',
      criteria: ['papi1', 'papi2', 'papi3', 'papi4', 'papi5']
    },
    {
      id: 2,
      name: 'Aliou',
      photo: 'http://placehold.it/400x400',
      criteria: ['aliou1', 'aliou2', 'aliou3', 'aliou4', 'aliou5']
    }
  ],
  selectedSons: [
    {
      id: 1,
      photo: 'http://placehold.it/400x400',
      name: 'Cherif'
    },
    {
      id: 2,
      photo: 'http://placehold.it/400x400',
      name: 'Jeylani'
    }
  ],
  selectedCriteria: ['papi1', 'aliou2', 'papi3', 'aliou1', 'papi2', 'aliou5'],
  currentQuestion: {
    label: 'Quelle est la date de naissance de Hitler ?',
    answers: [
      {
        value: '1920',
        good: true
      },
      {
        value: '1925'
      },
      {
        value: '1945'
      },
      {
        value: '2019'
      }
    ]
  },
  currentCriterion: 2,
  distributedCriterions: [[0, 1], [2]],
  result: [0, 1]
};

//Connection from a client
io.on('connection', function(socket) {
  console.log(`New client connected with id ${socket.id}`);

  socket.on('reinitialize', function() {
    // get 2 fathers and sons
    // update game state
    io.sockets.emit('gameState', gameState);
  });

  socket.on('updateQuestion', function() {
    // get a random question
    // update game state
    io.sockets.emit('gameState', gameState);
  });

  //Requests
  //Send answer to game and display clients
  socket.on('answer', function(givenAnswer) {
    //check who got the right answer
    //update gameState
    io.sockets.emit('gameState', gameState);
  });

  //Send result to display client
  socket.on('gameOver', function() {
    //send response to display client with id
  });
});
