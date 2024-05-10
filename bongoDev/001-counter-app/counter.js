let count = 0;

const displayElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function increaseCount() {
  if (count + 1 > 10) {
    alert('Count is too big!!!!');
    return;
  } 
  count += 1;
  displayElement.innerText = count;
}

function decreaseCount() {
  if (count - 1 < 0) {
    alert('Count can not be negative!!!');
    return;
  }
  count -= 1;
  displayElement.innerText = count;
}

incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click', decreaseCount);
