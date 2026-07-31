const student = {
    name : "Ajit",
    age : 20,
    branch : "CSE"
}

const newStudent = {
    ...student,
    section : 11
}

console.log("New Object name :", newStudent.name);
console.log("New Object age :", newStudent.age);
console.log("New Object branch :", newStudent.branch);
console.log("New Object section :", newStudent.section);