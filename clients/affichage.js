function updateGame(state) {
	if (state.selectedFathers.length == 0) {
		reinitialize();
	} else if (state.result !==null) {
		displayResult(state);
	} else if (state.selectedFathers.length !== 0 && state.currentQuestion == null) {
		initGame(state);
	} else if (state.selectedFathers.length !== 0 && state.currentQuestion !== null) {
		initGame(state);
		displayQuestion(state);
	}																																								
}

function reinitialize() {
	alert("reinitialize");
}

function initGame(state) {
	displaySons(state.selectedSons,state.distributedCriteria);
	displayCriteria(state.selectedCriteria);
}

function displaySons(sons, distributedCriteria) {
	alert("Informations relatives aux filleus " + JSON.stringify(sons));
	alert("Les critères distribués sont : " + JSON.stringify(distributedCriteria));
}

function displayCriteria(criteria) {
	alert("Les différents cirtères sont : " + JSON.stringify(criteria))
}

function displayQuestion(state) {
	alert("La question est : " + JSON.stringify(state.currentQuestion));
	alert("Le critère pour lequel vous compétissez est : " + state.selectedCriteria[state.currentCriterion]);
}

function displayResult(state) {
	alert("Le résultat est : " + JSON.stringify(state.result))
}

// const gameState = {
//   selectedFathers: [
//   ],
//   selectedSons: [
//   ],
//   selectedCriteria: [],
//   currentQuestion: null,
//   currentCriterion: null,
//   distributedCriterions: [[], []]
// };

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
      name: 'Cherif',
      winner: true
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
  currentCriterion: null,
  distributedCriteria: [[], []],
  result: [0, 1]
};

updateGame(gameState);