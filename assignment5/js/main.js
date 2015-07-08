$(document).ready(function() {

//when submit button is clicked
  $('#submit-btn').click(function(event) {
//stop whatever happens automatically
    event.preventDefault();
//get value of input from city-type and call it var city
    var city = $('#city-type').val();
    $('#city-type').val('');
    // var ctyAdjusted = city.toLowerCase();
i
    // console.log(cityAdjuste);

//if value of city matches "New York" or "NYC" or "New York City"
    if(city == 'new york' || city == 'nyc' || city == 'new york city') {

//change background image to nyc.jpg     
      $('body').css("background-image", "url(../assignment5/images/nyc.jpg)");    
    }

//else if value of city matches "San Francisco" or "SF" or "Bay Area"
    else if(city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {

//change background image to sf.jpg 
      $('body').css("background-image", "url(../assignment5/images/sf.jpg)");
    }

   
//else if value of city matches "Los Angeles" or "LA" or "LAX"
    else if(city == 'Los Angeles' || city == 'LA' || city == 'LAX') {

//change background image to la.jpg       
      $('body').css("background-image", "url(../assignment5/images/la.jpg)");
    }

//else if value of city matches "Austin" or "ATX"
    else if(city == 'Austin' || city == 'ATX') {
//change class 
      $('body').css("background-image", "url(../assignment5/images/austin.jpg)");
    }

//else value of city matches "Sydney" or "SYD"
    else if(city == 'Sydney' || city == 'SYD'){

//change class
      $('body').css("background-image", "url(../assignment5/images/sydney.jpg)");
    }

    else {
      $('body').css("background", "green");
    }

  });
      
  }); 

