const readMore = document. querySelector(".read-more-btn");
const text = document. querySelector(".text");

readMore.addEventListener('click', (e) =>{
text.classList.toggle('show-more');
if(readMore.innerHTML==='Read Less'){
  readMore.innerHTML='Read More';
}
else{
  readMore.innerHTML='Read Less';
}
})
