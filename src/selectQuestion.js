const _ = require('lodash');

const Question = require('../models/Question');

module.exports = async function selectQuestion() {
  const count = await Question.count().exec();

  const random = _.random(0, count - 1)

  return Question.findOne().skip(random);
};
