const _ = require('lodash');

const Student = require('../models/Student');

let currentOption = 'inf';

module.exports = async function selectSons(isFlip) {
  currentOption = currentOption === 'inf' ? 'tr' : 'inf';
  const count = await Student.find({ option: currentOption, level: 1 })
    .where('father')
    .exists(false)
    .count();
  const random1 = _.random(0, count - 2);
  let random2 = _.random(0, count - 2);
  while (random2 === random1 && count !== 1) {
    random2 = _.random(0, count - 2);
  }
  const students = [
    await Student.findOne({ option: currentOption, level: 1 })
      .where('father')
      .exists(false)
      .skip(random1)
      .limit(1)
      .exec(),
    await Student.findOne({ option: currentOption, level: 1 })
      .where('father')
      .exists(false)
      .skip(random2)
      .limit(1)
      .exec()
  ];
  if (students.length === 0 && !isFlip) {
    const otherOptionStudents = await selectSons(true);
    return otherOptionStudents;
  } else if (students.length === 1) {
    const otherStudent = await Student.findOne({
      option: currentOption,
      level: 1
    }).exec();
    students.push(otherStudent);
  }
  return students;
};
