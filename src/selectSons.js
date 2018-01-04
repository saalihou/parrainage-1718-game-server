const _ = require('lodash');

const Student = require('../models/Student');

module.exports = async function selectSons(currentOption) {
  const count = await Student.find({ option: currentOption, level: 1 })
    .where('father')
    .exists(false)
    .count();
  const random1 = _.random(0, _.max([count - 1, 0]));
  let random2 = _.random(0, _.max([count - 1, 0]));
  console.log(count, random1, random2);
  if (count === 1) {
    const withFatherCount = await Student.find({
      option: currentOption,
      level: 1
    })
      .where('father')
      .exists(true)
      .count();
    console.log('withFatherCount', withFatherCount)
    while (random2 === random1) {
      random2 = _.random(0, withFatherCount - 1);
      console.log(random1, random2)
    }
  } else {
    while (random2 === random1 && count !== 1) {
      random2 = _.random(0, count - 1);
    }
  }
  const students = [
    await Student.findOne({ option: currentOption, level: 1 })
      .where('father')
      .exists(false)
      .skip(random1)
      .limit(1)
      .exec(),
    await Student.findOne({ option: currentOption, level: 1 })
      .where('father')
      .exists(count === 1 ? true : false)
      .skip(random2)
      .limit(1)
      .exec()
  ];
  return students;
};
