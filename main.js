const generator = document.getElementById('generator');
const numbersDiv = document.getElementById('numbers');

function getColorClass(num) {
  if (num <= 10) return 'n-yellow';
  if (num <= 20) return 'n-blue';
  if (num <= 30) return 'n-red';
  if (num <= 40) return 'n-gray';
  return 'n-green';
}

generator.addEventListener('click', () => {
  numbersDiv.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  sortedNumbers.forEach((number, index) => {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.classList.add(getColorClass(number));
    numberDiv.textContent = number;
    
    // Add delay for sequential animation
    numberDiv.style.animationDelay = `${index * 0.1}s`;
    
    numbersDiv.appendChild(numberDiv);
  });
});
