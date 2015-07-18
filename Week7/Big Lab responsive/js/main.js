document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});

$(document).ready(function() {

$(window).resize(function() {
  if($(window).width() < 768 ){
    $('#butt1').text("sign up meow");
    $('#butt2').text("start your scratch");
    $('#butt3').text("knock stuff over");
  }
});
});
