function updateGame(state) {
	if (state.selectedFathers.length == 0) {
		reinitialize();
	} else if (state.result) {
		displayResult(state);
	} else if (state.selectedFathers.length !== 0 && !state.currentQuestion) {
		initGame(state);
	} else if (state.selectedFathers.length !== 0 && state.currentQuestion) {
		initGame(state);
		displayQuestion(state);
	}																																								
}

function reinitialize() {
	console.log("reinitialize");
}

function initGame(state) {
	displaySons(state.selectedSons,state.distributedCriteria);
	displayCriteria(state.selectedCriteria);
}

function displaySons(sons, distributedCriteria) {
	console.log("Informations relatives aux filleus " + JSON.stringify(sons));
	console.log("Les critères distribués sont : " + JSON.stringify(distributedCriteria));
}

function displayCriteria(criteria) {
	console.log("Les différents cirtères sont : " + JSON.stringify(criteria))
}

function displayQuestion(state) {
	console.log("La question est : " + JSON.stringify(state.currentQuestion));
	console.log("Le critère pour lequel vous compétissez est : " + state.selectedCriteria[state.currentCriterion]);
}

function displayResult(state) {
	console.log("Le résultat est : " + JSON.stringify(state.result))
}

var socket = io('http://localhost:8081');

socket.on('gameState', gameState => updateGame(gameState));