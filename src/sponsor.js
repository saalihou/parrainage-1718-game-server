module.exports = async function sponsor(son, father) {
  console.log('saving', son, father);
  son.father = father._id;
  father.sonCount += 1;
  await son.save();
  await father.save();
};
