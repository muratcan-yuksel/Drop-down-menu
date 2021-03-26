const menuButton = document.querySelector('.menu');
function toggle() {
}
menuButton.addEventListener('mouseover', () => {
  document.querySelector('.items').style.display = 'block';
});

menuButton.addEventListener('mouseleave', () => {
  document.querySelector('.items').style.display = 'none';
});
