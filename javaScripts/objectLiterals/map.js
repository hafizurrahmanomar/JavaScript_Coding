const productList = ["paper","Rice","oil","soap","pen"];
const productListUpperCase = productList.map(function(item){
    return item.toUpperCase();
})

console.log(productListUpperCase);

let number = [1,2,3,4,5,6,7,8,9,10];
let squareNumber = number.map(function(item){
    //return (`Index $(index+1) is $(item*2)`);
    return item*2
})

console.log(squareNumber);

let Num = [1,2,3,4,5,6,7,8,9,10];

let Number = Num.map(function(item,index){
    if(index%2===0){
        return item*2;
    }
    return item*3;
})
console.log(Number);