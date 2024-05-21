const scoreInput = document.getElementById('score');
const gradeDisplay = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

function setGradeDisplayText(text) {
  gradeDisplay.innerText = text;
}

function setInvalidState() {
  scoreInput.style.border = '1px solid red';
  setGradeDisplayText('Invalid score');
}

calculateButton.addEventListener('click', function () {
  if (scoreInput.value === '') {
    setInvalidState();
    return;
  }

  const score = parseFloat(scoreInput.value);

  let displayText = '';
  if (score > 100 || score < 0) {
    setInvalidState();
    return;
  } else if (score >= 80 && score <= 100) {
    displayText = 'A+';
  } else if (score >= 70 && score < 80) {
    displayText = 'A';
  } else if (score >= 60 && score < 70) {
    displayText = 'A-';
  } else if (score >= 50 && score < 60) {
    displayText = 'B';
  } else {
    displayText = 'F';
  }

  setGradeDisplayText(displayText);
});
