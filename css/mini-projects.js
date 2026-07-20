const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
let count = 0;

function updateCounter() {
  counterValue.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count += 1;
  updateCounter();
});

decrementBtn.addEventListener('click', () => {
  count -= 1;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

const clockDisplay = document.getElementById('clock-display');

function updateClock() {
  const now = new Date();
  clockDisplay.textContent = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

const colorBtn = document.getElementById('color-btn');
const colorPreview = document.getElementById('color-preview');
const colorCode = document.getElementById('color-code');

function generateColor() {
  const randomColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  document.body.style.background = `linear-gradient(135deg, ${randomColor}, #1e293b)`;
  colorPreview.style.background = randomColor;
  colorCode.textContent = randomColor;
}

colorBtn.addEventListener('click', generateColor);
generateColor();

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');
const calcButtons = document.querySelectorAll('[data-op]');

function calculate(operation) {
  const firstValue = Number(num1Input.value);
  const secondValue = Number(num2Input.value);

  if (Number.isNaN(firstValue) || Number.isNaN(secondValue)) {
    resultDisplay.textContent = 'Result: Enter valid numbers';
    return;
  }

  let result;
  switch (operation) {
    case 'add':
      result = firstValue + secondValue;
      break;
    case 'subtract':
      result = firstValue - secondValue;
      break;
    case 'multiply':
      result = firstValue * secondValue;
      break;
    case 'divide':
      if (secondValue === 0) {
        resultDisplay.textContent = 'Result: Cannot divide by zero';
        return;
      }
      result = firstValue / secondValue;
      break;
    default:
      result = 0;
  }

  resultDisplay.textContent = `Result: ${result}`;
}

calcButtons.forEach((button) => {
  button.addEventListener('click', () => calculate(button.dataset.op));
});
