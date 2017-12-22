const Student = require('../models/Student');

module.exports = function selectSons() {
  return Student.find({ level: 1 })
    .limit(2)
    .exec();
};
