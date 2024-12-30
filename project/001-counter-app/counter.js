let count = 0;

const displayElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const refreshment = document.getElementById('refreshment');


incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click', decreaseCount);
refreshment.addEventListener('click', refreshmentCount);


function increaseCount() {
  count += 1;
  displayElement.innerText = count;

  if (count + 1 > 10) {
    return alert('Count is too big!!!!');
    ;
  }

}

function refreshmentCount() {
  count = 0;
  displayElement.innerText = count;
}

function decreaseCount() {
  count -= 1;
  displayElement.innerText = count;

  if (count - 1 < 0) {
    return alert('Count can not be negative!!!');
   
  }
}
