const number = 10;
if (number == 10) {
    console.log('number is Ten');


} else if (number > 10) {
    console.log('number is greter than ten');

} else {
    console.log('number is less than ten');

}
//Ternary operator 
const color = number > 10 ? 'Blue' : 'Green';
console.log(color);


//switch
const colorName = 'Green';
switch (colorName) {
    case ('Blue'):
        console.log('color is Blue');
        break;


    case ('Green'):
        console.log('color is Green');
        break;

    default:
        console.log('color is Red');
        break;
}