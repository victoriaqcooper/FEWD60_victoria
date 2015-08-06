/*
EM Feedback
5 - Effort/completion
5 - Code cleanliness
5 - Overall command of material
5 - Leveraging skills learned (using responsive design, HTML/CSS/JS, plugins, etc..)
20/20

Hey, so this code looks good, the logic is in place. One advantage of working with the 
pre-set classes  in your css is that it keeps your styles seperate from your
javascript. Another way to change the image would be to use
$('body').attr('class','nyc'); 
It's just another way to accomplish the same goal, of changing up the image.
*/


$(document).ready(function() {

//when submit button is clicked
  $('#submit-btn').click(function(event) {
//stop whatever happens automatically
    event.preventDefault();
//get value of input from city-type and call it var city
    var city = $('#city-type').val();
    // $('#city-type').val('');
    // var ctyAdjusted = city.toLowerCase();

    // console.log(cityAdjuste);
    $('#city-type').val('');
// Updated upstream
    // var ctyAdjusted = city.toLowerCase();

    // console.log(cityAdjusted);

//if value of city matches "New York" or "NYC" or "New York City"
   if(city == 'new york' || city == 'nyc' || city == 'new york city') {

    var cityAdjust = city.toLowerCase();
    console.log(cityAdjust);

//if value of city matches "New York" or "NYC" or "New York City"
    if(cityAdjust == 'new york' || cityAdjust == 'nyc' || cityAdjust == 'new york City') {
//Stashed changes

//change background image to nyc.jpg     
      $('body').css("background-image", "url(../assignment5/images/nyc.jpg)");    
    }

//else if value of city matches "San Francisco" or "SF" or "Bay Area"
    else if(cityAdjust == 'san francisco' || cityAdjust == 'sf' || cityAdjust == 'bay area') {

//change background image to sf.jpg 
      $('body').css("background-image", "url(../assignment5/images/sf.jpg)");
    }

   
//else if value of city matches "Los Angeles" or "LA" or "LAX"
    else if(cityAdjust == 'los angeles' || cityAdjust == 'la' || cityAdjust == 'lax') {

//change background image to la.jpg       
      $('body').css("background-image", "url(../assignment5/images/la.jpg)");
    }

//else if value of city matches "Austin" or "ATX"
    else if(cityAdjust == 'austin' || cityAdjust == 'atx') {
//change back 
      $('body').css("background-image", "url(../assignment5/images/austin.jpg)");
    }

//else value of city matches "Sydney" or "SYD"
    else if(cityAdjust == 'sydney' || city == 'syd') {

//change the background image to sydney.jpg
      $('body').css("background-image", "url(../assignment5/images/sydney.jpg)");
    }

    else {
      $('body').css("background", "green");
    }

  });
      
  }); 

