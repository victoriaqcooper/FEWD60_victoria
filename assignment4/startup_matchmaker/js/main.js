/*document.getElementsByClassName("mouse").onmouseover = addColor;
document.getElementsByClassName("mouse").onmouseout = removeColor;
*/


document.getElementById('test').addEventListener("mouseover", addColor);
document.getElementById('test').addEventListener("mouseout", removeColor);

function addColor() {
  for () {
  document.getElementById("test").setAttribute("class", "blue-steel");
  }
}

function removeColor() {
  document.getElementById("test").removeAttribute("class", "blue-steel");
}
