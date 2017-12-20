let fathers = [];
let sons = [];

const gameState = {
  selectedFathers: [
    {
      id: 1,
      name: 'Papi',
      criteria: ['papi1', 'papi2', 'papi3', 'papi4', 'papi5']
    },
    {
      id: 2,
      name: 'Aliou',
      criteria: ['aliou1', 'aliou2', 'aliou3', 'aliou4', 'aliou5']
    }
  ],
  selectedSons: [
    {
      id: 1,
      name: 'Cherif'
    },
    {
      id: 2,
      name: 'Jeylani'
    }
  ],
  selectedCriterions: ['papi1', 'aliou2', 'papi3', 'aliou1', 'papi2', 'aliou5'],
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
  distributedCriterions: [[0, 1], [2]]
};
