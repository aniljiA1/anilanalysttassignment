//Get display element and the button element
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');

//Initial count value
let count = 0;

//Function are use update and count display
const incrementCount = () => {
    count = count + 1;
    countDisplay.textContent = `Count: ${count}`;
};

//Using AddEvent listener to the button
incrementButton.addEventListener('click', incrementCount);