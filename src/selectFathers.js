const _ = require('lodash');

const Student = require('../models/Student');

module.exports = async function selectFathers(currentOption) {
  const allFathers = await Student.find({ option: currentOption, level: 2 });
  const minSonCount = _.minBy(allFathers, f => f.sonCount).sonCount;
  const selectedFathers = await Student.find({
    option: currentOption,
    level: 2,
    sonCount: minSonCount
  })
    .limit(2)
    .exec();
  if (selectedFathers.length < 2) {
    const otherFather = await Student.findOne({
      option: currentOption,
      level: 2,
      sonCount: minSonCount + 1
    }).exec();
    selectedFathers.push(otherFather);
  }
  return selectedFathers;
};
