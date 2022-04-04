function buttonClicked() {
  document.getElementById('button-1').classList.toggle('isRed');
}
function mouseOn() {
  document.getElementById('mouseHover').classList.toggle('isOn');
}
function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
  document.getElementById('mouseHover').addEventListener('mouseenter', mouseOn);
}

window.onload = windowLoaded;
