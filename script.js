const menuButton = document.querySelector('.menu');
const items = document.querySelector('.items');
menuButton.addEventListener('click', () => {
//   if (items.style.display === 'none') {
//     items.style.display = 'block';
//   } else {
//     items.style.display = 'none';
//   }
  menuButton.classList.toggle('active');
});

// menuButton.addEventListener('mouseleave', () => {
//   document.querySelector('.items').style.display = 'none';
// });
