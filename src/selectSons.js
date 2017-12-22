const Student = require('../models/Student');

let currentOption = 'inf';

module.exports = async function selectSons(isFlip) {
  currentOption = currentOption === 'inf' ? 'tr' : 'inf';
  const students = await Student.find({ option: currentOption, level: 1 })
    .where('father')
    .exists(false)
    .limit(2)
    .exec();
  if (students.length === 0 && !isFlip) {
    const otherOptionStudents = await selectSons(true);
    return otherOptionStudents;
  }
  return students;
};
