const student = {
    name: "Ajit",
    age: 20,
    branch: "CSE"
}

// const name = student.name;
// const age = student.age;
// const branch = student.branch;
const {name : newname, age, branch} = student; 

console.log("Name : ",newname);
console.log("Age :",age);
console.log("Branch :",branch);
