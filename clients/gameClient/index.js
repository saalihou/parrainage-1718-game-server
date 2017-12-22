var socket = io('http://localhost:8081');

function updateGame(gameState) {
  if (window.clientIndex === undefined) {
    return;
  }
  if (gameState.state === 'INIT' && gameState.selectedFathers.length == 0) {
    reinitialize();
  } else if (
    gameState.state === 'INIT' &&
    gameState.selectedFathers.length !== 0
  ) {
    initGame(gameState);
  } else if (gameState.state === 'QUESTION') {
    initGame(gameState);
    displayQuestion(gameState);
  }
}

function reinitialize() {
  console.log('reinitialize');
}

function initGame(state) {
  if (state.selectedSons.length) {
    displaySon(state.selectedSons[window.clientIndex]);
  }
  $('.question-container, .answers-container').hide();
}

function displaySon(son) {
  console.log('Informations relatives aux filleus ' + JSON.stringify(son));
  $('.question-container, .answers-container').hide();
  $('.pic').attr('src', son.photo);
}

function displayQuestion(state) {
  console.log('La question est : ' + JSON.stringify(state.currentQuestion));
  console.log(
    'Le critère pour lequel vous compétissez est : ' +
      state.selectedCriteria[state.currentCriterion]
  );
  $('.answer button').removeClass('good');
  $('.question-container, .answers-container').show();
  $('.question-label').text(state.currentQuestion.label);
  $('.answer').each(function(index) {
    const $button = $(this).children('button');
    $button.attr('disabled', false);
    $button.text(state.currentQuestion.answers[index].value);
    $button.off('click');
    $button.click(function() {
      socket.emit('answer', index);
      disableAnswers();
      if (state.currentQuestion.answers[index].good) {
        $button.addClass('good');
      }
    });
  });
  startTimer();
}

function disableAnswers() {
  console.log('disabling answers');
  $('.answer button').off('click');
  $('.answer button').attr('disabled', true);
}

function startTimer() {
  clearInterval(window.timerInterval);
  var countdown = 6;
  $('.timer-label').text(countdown + 1);
  window.timerInterval = setInterval(function() {
    $('.timer-label').text(countdown);
    if (countdown === 0) {
      clearInterval(window.timerInterval);
    } else {
      countdown--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(window.timerInterval);
}

socket.emit('gameClient');
socket.on('reconnect', function() {
  socket.emit('gameClient');
});

socket.on('gameState', gameState => updateGame(gameState));
socket.on('clientIndex', index => (window.clientIndex = index));
socket.on('wrongAnswer', disableAnswers);
socket.on('goodAnswer', function() {
  disableAnswers();
  stopTimer();
});
socket.on('timeout', function() {
  disableAnswers();
});
