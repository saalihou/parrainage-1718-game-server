const fs = require('fs');

const Student = require('./models/Student');

(async function() {
  const students = await Student.find();
  const goodStudents = [];
  students.filter(s => s.level === 1).forEach(async student => {
    if (student.father) {
      const father = students.find(
        s => s._id.toString() === student.father.toString()
      );
      if (father.option === student.option) {
        const serialized = student.toJSON();
        serialized.father = father.toJSON();
        goodStudents.push(serialized);
      } else {
        const serialized = student.toJSON();
        serialized.father = father.toJSON();
        console.log(serialized)
        father.sonCount = father.sonCount - 1;
        student.father = undefined;
        await father.save();
        await student.save();
      }
    }
  });
})();
