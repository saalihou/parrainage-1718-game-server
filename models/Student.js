const mongoose = require('../providers/mongoose');

const Student = mongoose.model('Student', {
  firstName: String,
  lastName: String,
  level: Number,
  option: {
    type: String,
    enum: ['inf', 'tr']
  },
  photo: String,
  criteria: [String]
});

module.exports = Student;
