//Function Declaration

function greetings() {
    console.log('Assalamyalykum, Hafizur Rahman');
    document.write('Assalamyalykum, Toha' + "<br>");
}

// greetings();
// greetings();
// greetings();

//Function Expression
const call = function() {
    console.log('Assalamyalykum');
    document.write('Assalamyalykum, Toha' + "<br>");
};
// call();
// call();
// call();


//parameters & Argumentsconst 
const fullName = function(fullName) {
    console.log(`Assalamyalykum, ${fullName}`)
    document.write(`Assalamyalykum, ${fullName} <br>`)
};
// fullName('Hafiz');
// fullName('Nyeem');
// fullName("Toha");

//parameters & Argumentsconst 
const Name = function(name1, name2) {

    console.log(`Assalamyalykum,${name1} ${name2}`)
    document.write(`Assalamyalykum,${name1} ${name2} <br>`)
};
Name('Hafizur', 'Rahman');
Name('Nyeem', 'Hasan');
Name('Mahmud', 'hassan');