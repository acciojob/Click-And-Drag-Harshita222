// Your code here.
const slider = document.querySelector('.items');
let isDown = false;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
});