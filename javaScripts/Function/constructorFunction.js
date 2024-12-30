//Constructor Function

function Student(firstName,lastName,dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob); 

this.getFullName = function () {
  return `${firstName} ${lastName}`;
}

this.getBrithYear = function () {
  return this.dob.getFullYear();
}   
}


//Instantiate object
const student1 = new Student('Toha','Rahman','02-03-2015');
const student2 = new Student('Nyeem','Ahmed','04-14-2009');
const student3 = new Student('Tohura','Thasnim','10-3-2017');


console.log(student1.getFullName());
console.log(student1.getBrithYear());

console.log(student2.getFullName());
console.log(student2.getBrithYear());

console.log(student3.getFullName());
console.log(student3.getBrithYear());
