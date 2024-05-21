const generateButton = document.getElementById('generate');
const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');

function createTableFor(number) {
  const table = document.createElement('table');
  table.className = 'w-full border-collapse text-center';

  for (let i = 1; i <= 10; i++) {
    const tableRow = document.createElement('tr');
    tableRow.className = 'border-b';

    const leftCell = document.createElement('td');
    leftCell.innerText = `${number} * ${i}`;

    const rightCell = document.createElement('td');
    rightCell.innerText = number * i;

    tableRow.appendChild(leftCell);
    tableRow.appendChild(rightCell);

    table.appendChild(tableRow);
  }

  return table;
}

generateButton.addEventListener('click', function () {
  tableContainerTopRow.innerHTML = '';
  tableContainerBottomRow.innerHTML = '';

  for (let number = 1; number <= 10; number++) {
    const table = createTableFor(number);

    if (number <= 5) {
      tableContainerTopRow.appendChild(table);
    } else {
      tableContainerBottomRow.appendChild(table);
    }
  }
});
