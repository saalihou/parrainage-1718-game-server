const mongoose = require('../providers/mongoose');

const Question = mongoose.model('Question', {
  label: String,
  answers: []
});

module.exports = Question;
