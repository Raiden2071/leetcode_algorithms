const element = document.querySelector('.child');
const isOverflowing = element.scrollWidth > element.clientWidth;

console.log(isOverflowing);