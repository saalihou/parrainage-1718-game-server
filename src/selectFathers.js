const Student = require('../models/Student');

module.exports = function selectFathers() {
  return Student.find({ level: 2 })
    .limit(2)
    .exec();
};
