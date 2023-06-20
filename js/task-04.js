let counterValue = 0;

const valueSpan = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  updateValue();
}

function increment() {
  counterValue += 1;
  updateValue();
}

function updateValue() {
  valueSpan.textContent = counterValue;
}