($(document).ready(function() {

//when submit button is clicked
  $('#submit-btn').click(function(event) {
//stop whatever happens automatically
    event.preventDefault();
//get value of input from city-type and call it var city
    var city = $('#city-type').val();
    $('#city-type').val('');
   var cityAdjust = city.toLowerCase();

    console.log(cityAdjust);


//if value of city matches "New York" or "NYC" or "New York City" change background
    if(cityAdjust == 'new york' || cityAdjust == 'nyc' || cityAdjust == 'new york city') {    
      $('body').css("background-image", "url(../assignment5/images/nyc.jpg)");    
    }

//else if value of city matches "San Francisco" or "SF" or "Bay Area" change background
    else if(cityAdjust == 'san francisco' || cityAdjust == 'sf' || cityAdjust == 'bay area') {
      $('body').css("background-image", "url(../assignment5/images/sf.jpg)");
    }

   
//else if value of city matches "Los Angeles" or "LA" or "LAX" change background
    else if(cityAdjust == 'los angeles' || cityAdjust == 'la' || cityAdjust == 'lax') {     
      $('body').css("background-image", "url(../assignment5/images/la.jpg)");
    }

//else if value of city matches "Austin" or "ATX"
    else if(cityAdjust == 'austin' || cityAdjust == 'atx') {
      $('body').css("background-image", "url(../assignment5/images/austin.jpg)");
    }

//else value of city matches "Sydney" or "SYD"
    else if(cityAdjust == 'sydney' || cityAdjust == 'syd') {
      $('body').css("background-image", "url(../assignment5/images/sydney.jpg)");
    }
    
//else error screen
    else {
      $('body').css("background", "green");
    }

  });
      
  }); 

