function init(){
  var h1tag = document.getElementsByTagName('h1');
  h1tag[0].onclick = changeColor;
}

function changeColor(){
  this.innerHTML = "click again";
  var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
  this.style.color = randomcolor;
}

function toggleImg(){
  var img = document.getElementById("danceImg");
  var isImgVisible = img.style.visibility != "visible";
  img.style.visibility = isImgVisible ? "visible" : "hidden";
}

onload = init;
