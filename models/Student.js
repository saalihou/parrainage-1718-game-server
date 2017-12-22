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
  criteria: [String],
  father: mongoose.Schema.Types.ObjectId,
  sonCount: {
    type: Number,
    default: 0
  }
});

module.exports = Student;
