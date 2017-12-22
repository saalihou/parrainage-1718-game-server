const Student = require('../models/Student');

module.exports = async function getRemainingSons() {
  return Student.where('father')
    .exists(false)
    .where({ level: 1 })
    .count();
};
