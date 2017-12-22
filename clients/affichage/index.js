var socket = io('http://localhost:8081');

function updateGame(gameState) {
  if (gameState.state == 'INIT') {
    reinitialize();
    initGame(gameState);
  } else if (gameState.result) {
    initGame(gameState);
    setTimeout(() => {
      displayResult(gameState);
    }, 2000);
  } else if (gameState.state == 'QUESTION') {
    initGame(gameState);
    displayQuestion(gameState);
  } else if (gameState.state === 'ROUND_END') {
    initGame(gameState);
    displayQuestion(gameState);
  }
}

function reinitialize() {
  console.log('reinitialize');
}

function initGame(state) {
  $('.parrains').fadeOut();
  displaySons(
    state.selectedSons,
    state.distributedCriteria,
    state.selectedCriteria
  );
  displayCriteria(
    state.selectedCriteria,
    state.distributedCriteria,
    state.currentCriterion
  );
}

function displaySons(sons, distributedCriteria, selectedCriteria) {
  console.log('Informations relatives aux filleus ' + JSON.stringify(sons));
  console.log(
    'Les critères distribués sont : ' + JSON.stringify(distributedCriteria)
  );
  $('.criterias-container ul').empty();
  sons.forEach((son, index) => {
    $('#filleul' + index + 'Name').text(son.firstName + ' ' + son.lastName);
    $('#filleul' + index + 'Photo').attr('src', son.photo);
  });
  $('#question').text('Nouvelle partie');
  $('#answers').hide();
}

function displayCriteria(criteria, distributedCriteria, currentCriterion) {
  console.log('Les différents critères sont : ' + JSON.stringify(criteria));
  criteria.forEach((criterion, index) => {
    const $criterion = $('#criterion' + index);
    if (distributedCriteria[0].includes(index)) {
      $criterion.css('backgroundColor', '#4FC3F7');
    } else if (distributedCriteria[1].includes(index)) {
      $criterion.css('backgroundColor', '#F44336');
    } else if (currentCriterion === index) {
      $criterion.css('backgroundColor', '#4A148C');
    } else {
      $criterion.css('backgroundColor', '#8BC34A');
    }
    $criterion.text(criterion);
  });
}

function displayQuestion(state) {
  console.log('La question est : ' + JSON.stringify(state.currentQuestion));
  console.log(
    'Le critère pour lequel vous compétissez est : ' +
      state.selectedCriteria[state.currentCriterion]
  );
  $('#question').text(state.currentQuestion.label);
  $('#answers').show();
  state.currentQuestion.answers.forEach(function(answer, index) {
    $('#answer' + index).text(answer.value);
    if (answer.good && state.state === 'ROUND_END') {
      $('#answer' + index)
        .parent()
        .css('backgroundColor', 'orange');
    } else {
      $('#answer' + index)
        .parent()
        .css('backgroundColor', '#4A148C');
    }
  });
  if (state.state === 'QUESTION') {
    startTimer();
  }
}

function displayResult(state) {
  console.log('Le résultat est : ' + JSON.stringify(state.result));
  state.result.forEach(function(parrainIndex, index) {
    const parrain = state.selectedFathers[parrainIndex];
    const son = state.selectedSons[index];
    $('#parrain' + index + ' .pic').attr('src', parrain.photo);
    $('#parrain' + index + ' .name').text(
      parrain.firstName + ' ' + parrain.lastName
    );
    $('#parrain' + index + ' .son').text(
      'parrain de ' + son.firstName + ' ' + son.lastName
    );
    $('#parrain' + index).addClass('filleul-' + index);
  });
  $('.parrains').fadeIn();
}

function startTimer() {
  console.log('startTimer');
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
  console.log('stopTimer');
  clearInterval(window.timerInterval);
}

socket.on('gameState', gameState => updateGame(gameState));
socket.on('endRound', () => setTimeout(stopTimer));
