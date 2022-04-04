const para = document.querySelector('p');     //this is a declaration

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
