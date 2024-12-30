const numberList = [1,2,4,5,6];

const numberLargerThan3 = numberList.filter( function(item){
if(item >3){
    return true;
    
    }else{
        return false;
    }

});

console.log(numberLargerThan3);

// arrow use without function

const numList = [1,2,4,5,6];

const numLargerThan3 = numList.filter((item)=>{
if(item >3){
    return true;
    
    }return false;
    });

console.log(numLargerThan3);

//Ternary operator

const newNumList = [1,2,4,5,7,8,9];
//const newNumListLarger3 = newNumList.filter((item)=> item > 3?true:false);
//same above

const newNumListLarger3 = newNumList.filter((item)=> item >3);
console.log(newNumListLarger3);
