
// variable & console log
let head1 = document.querySelector(".head-1");
console.log(head1);
console.log(head1.innerHTML);
head1.style.background = "grey";

let number = document.querySelector(".number");
let submit = document.querySelector(".submit-btn");
let result = document.querySelector(".result");

let number = 0;

submit.addEventListener("click",function(){
    console.log(number.value);
    result.innerHTML=number.value;
});


