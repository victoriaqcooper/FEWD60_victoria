
var tempC = 30;

var tempF = tempC * 9/5 + 32;
document.write(tempF);

var threshold = 70;

if (tempF < threshold) {
  document.body.setAttribute("style", "background-color: grey;");
}

else {
  document.body.setAttribute("style", "background-color: yellow;")
}

