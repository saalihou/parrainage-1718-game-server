const Question = require('../models/Question');

module.exports = function selectQuestion() {
  return Question.findOne();
};
