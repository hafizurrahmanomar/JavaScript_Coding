//creating a function 
function square(number1, number2) {
    let result = (number1 * number2);
    document.write('Square = ' + result );
}

//calling function
square (4, 5);
square(6, 5);
square(2, 5);
square(5, 5);

//creating a function 
function square(number1, number2) {
    let result = (number1 * number2);
    return result;

}

//document.write('Square=' + square(4, 5) + '</br>');
let total = square(4, 5);
total1 = square(8, 5);
total2 = square(5, 5);
total3 = square(6, 5);
total4 = square(7, 5);
document.write("Square=" + total + "</br>");
document.write('Square=' + total1 + '</br>');
document.write('Square=' + total2 + '</br>');
document.write('Square=' + total3 + '</br>');
document.write('Square=' + total4 + '</br>');



//creating a function 
function add(number1, number2, number3) {
    let result = ((number1 + number2) * number3);
    document.write('Add = '   + result +'</br>');

}
//calling function
add(4, 5, 6);
add(4, 5, 5);
add(4, 5, 4);
add(4, 5, 7);