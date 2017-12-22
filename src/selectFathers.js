const _ = require('lodash');

const Student = require('../models/Student');

module.exports = async function selectFathers() {
  const allFathers = await Student.find({ level: 2 });
  const minSonCount = _.minBy(allFathers, f => f.sonCount).sonCount;
  const selectedFathers = await Student.find({
    level: 2,
    sonCount: minSonCount
  })
    .limit(2)
    .exec();
  if (selectedFathers.length < 2) {
    const otherFather = await Student.findOne({
      level: 2,
      sonCount: minSonCount + 1
    }).exec();
    selectedFathers.push(otherFather);
  }
  return selectedFathers;
};
