var srcs = [
  'images/Anime_Barnstar_Hires.png',
  'images/school-3623869_960_720.jpg'
];

var currentImage = 0;
var mainImage = document.querySelector('img');

mainImage.onclick = () => {
  currentImage = currentImage < srcs.length - 1 ? currentImage + 1 : 0;
  mainImage.setAttribute('src', srcs[currentImage]); 
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}