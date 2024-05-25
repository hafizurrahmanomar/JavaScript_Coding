//data search by for loop to array

let arr = [12,34,14,76,45,9,23,87,44,55,98,89,4,4];
console.log(arr.length);

let found = true;
let search =100;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]==search) {
        console.log('Data is found at Index ' +i)
        found = true;
        break;
        
    }  
}
if (found) {
  console.log("Data is not found");
}
//item access
let personalInfo ={
  name:'Md.Hafizur Rahman',
  age:34,
  address:'Ruppur,Pabna'

}
for(item in personalInfo){
  console.log(item);
}