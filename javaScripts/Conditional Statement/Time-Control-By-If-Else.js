let time = new Date().getHours();

if(time>=6 && time<12){
    console.log("Good Morning");
}
 else if(time>=12 && time<16){
    console.log("Good Afternoon");
}
else if(time>=16 && time<20){
    console.log("Good Evaning");
    
}
else{
    console.log("Good Night");
}
    

