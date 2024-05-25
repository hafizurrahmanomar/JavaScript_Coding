const info = {
    firstName: "Md Hafizur",
    lastName: "Rahman",
    age: 34,
    hobbies: ['ReadingBook', "Sweming", 'Cycaling'],

    address: {
        Village: 'Ruppur',
        City: 'Pabna',
        zipCode: 6682,

    },
};
//add poperty
info.email = ' hruppuri@gmail.com';
console.log(info);

//dot notation used
console.log(info.firstName);
console.log(info.lastName);
console.log(info.firstName, info.lastName);
console.log(info.firstName, info.lastName, info.email);
console.log(info.hobbies[1]);
console.log(info.address.City);
console.log(info.address);
//Brackets notation used
console.log(info[`firstName`]);
// new method
const { firstName, lastName, address: { Village } } = info;
console.log(firstName);
console.log(firstName, lastName);
console.log(Village);
console.log(firstName, lastName, Village);

//output to index
const todo = [
{
        id: 1,
        section: ' Utility',
        Depertment: 'Maintenance'
    },

    {
        id: 2,
        section: 'Finishing',
        Depertment: 'Dyeing'
    },
    {
        id: 3,
        section: 'cuting',
        Depertment: 'Garments'
    }
];
console.log(todo);
console.log(todo[2].Depertment);
console.log(todo[0].id);