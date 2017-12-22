var socket = io('http://localhost:8081');

function answer(index) {
  socket.emit('answer', index);
}

function updateGame(state) {
  if (state.selectedFathers.length == 0) {
    reinitialize();
  } else if (state.selectedFathers.length !== 0 && !state.currentQuestion) {
    initGame(state);
  } else if (state.selectedFathers.length !== 0 && state.currentQuestion) {
    initGame(state);
    displayQuestion(state);
  }
}

function reinitialize() {
  console.log('reinitialize');
}

function initGame(state) {
  displaySon(state.selectedSons[window.clientIndex]);
}

function displaySon(son) {
  console.log('Informations relatives aux filleus ' + JSON.stringify(son));
}

function displayQuestion(state) {
  console.log('La question est : ' + JSON.stringify(state.currentQuestion));
  console.log(
    'Le critère pour lequel vous compétissez est : ' +
      state.selectedCriteria[state.currentCriterion]
  );
}

var socket = io('http://localhost:8081');

socket.emit('gameClient');

socket.on('gameState', gameState => updateGame(gameState));
socket.on('clientIndex', index => (window.clientIndex = index));
