const Student = require('../models/Student');
const Question = require('../models/Question');

module.exports = async function reinit() {
  await Student.remove({});
  await Question.remove({});
  await Student.insertMany([
    {
      firstName: 'Abdou',
      lastName: 'Kandé',
      level: 2,
      option: 'inf',
      photo: 'http://placehold.it/400x400',
      criteria: ['k1', 'k2', 'k3', 'k4', 'k5'],
    },
    {
      firstName: 'Cheikh',
      lastName: 'Mbacké',
      level: 2,
      option: 'inf',
      photo: 'http://placehold.it/400x400',
      criteria: ['c1', 'c2', 'c3', 'c4', 'c5'],
      sonCount: 1
    },
    {
      firstName: 'Aliou',
      lastName: 'Sall',
      level: 2,
      option: 'inf',
      photo: 'http://placehold.it/400x400',
      criteria: ['a1', 'a2', 'a3', 'a4', 'a5']
    },
    {
      firstName: 'Mouhammad',
      lastName: 'Cissé',
      level: 1,
      option: 'inf',
      photo: 'http://placehold.it/400x400'
    },
    {
      firstName: 'Cheikh',
      lastName: 'Seck',
      level: 1,
      option: 'inf',
      photo: 'http://placehold.it/400x400',
      father: '507f191e810c19729de860ea'
    },
    {
      firstName: 'Adama',
      lastName: 'Wade',
      level: 1,
      option: 'inf',
      photo: 'http://placehold.it/400x400'
    }
  ]);
  await Question.insertMany([
    {
      label: 'Est-ce que vous êtes fatiguééé ?',
      answers: [
        {
          value: 'NOOOOOOOOOOOOON',
          good: true
        },
        {
          value: 'OUIIIIIIIIIIII'
        },
        {
          value: 'PEUTEEEEETRE'
        }
      ]
    },
    {
      label: 'Est-ce que Seynou est idiooot ?',
      answers: [
        {
          value: 'NOOOOOOOOOOOOON'
        },
        {
          value: 'OUIIIIIIIIIIII',
          good: true
        },
        {
          value: 'PEUTEEEEETRE'
        }
      ]
    }
  ]);
};
