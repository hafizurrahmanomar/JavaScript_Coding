const info = {
    firstName: "Md Hafizur",
    lastName: "Rahman",
    age: 34,
    hobbies: ['ReadingBook', "Seemings", 'Cycling'],

    address: {
        Village: 'Ruppur',
        City: 'Pabna',
        zipCode: 6682,

    },
};


//add property
info.email = ' hruppuri@gmail.com';
console.log(info);

//update property
info.age = 36;

//delete property
delete info.address.zipCode;
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
        Department: 'Maintenance'
    },

    {
        id: 2,
        section: 'Finishing',
        Department: 'Dyeing'
    },
    {
        id: 3,
        section: 'cutting',
        Department: 'Garments'
    }
];
console.log(todo);
console.log(todo[2].Department);
console.log(todo[0].id);