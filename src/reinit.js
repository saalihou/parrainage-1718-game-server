const Student = require('../models/Student');
const Question = require('../models/Question');

const students = require('../dgi.json');

module.exports = async function reinit() {
  await Student.remove({});
  await Question.remove({});
  await Student.insertMany(
    students.map(s => ({
      firstName: s.prenom,
      lastName: s.nom,
      room: s.chambre,
      phone: s.numtel,
      option: s.opt,
      level: s.niveau === 'dut1' ? 1 : 2,
      photo: s.img,
      criteria: [s.crt1, s.crt2, s.crt3, s.crt4, s.crt5]
    }))
  );

  // await Student.insertMany([
  //   {
  //     firstName: 'Abdou',
  //     lastName: 'Kandé',
  //     level: 2,
  //     option: 'inf',
  //     photo: 'http://placehold.it/400x400',
  //     criteria: ['k1', 'k2', 'k3', 'k4', 'k5']
  //   },
  //   {
  //     firstName: 'Cheikh',
  //     lastName: 'Mbacké',
  //     level: 2,
  //     option: 'inf',
  //     photo: 'http://placehold.it/400x400',
  //     criteria: ['c1', 'c2', 'c3', 'c4', 'c5']
  //   },
  //   {
  //     firstName: 'Aliou',
  //     lastName: 'Sall',
  //     level: 2,
  //     option: 'inf',
  //     photo: 'http://placehold.it/400x400',
  //     criteria: ['a1', 'a2', 'a3', 'a4', 'a5']
  //   },
  //   {
  //     firstName: 'Mouhammad',
  //     lastName: 'Cissé',
  //     level: 1,
  //     option: 'inf',
  //     photo: 'http://placehold.it/400x400'
  //   },
  //   {
  //     firstName: 'Cheikh',
  //     lastName: 'Seck',
  //     level: 1,
  //     option: 'inf',
  //     photo: 'http://placehold.it/400x400'
  //   },
  //   {
  //     firstName: 'Adama',
  //     lastName: 'Wade',
  //     level: 1,
  //     option: 'inf',
  //     photo: 'http://placehold.it/400x400'
  //   }
  // ]);
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
