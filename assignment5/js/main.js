$(document).ready(function() {

//when submit button is clicked
  $('#submit-btn').click(function(event) {
//stop whatever happens automatically
    event.preventDefault();
//get value of input from city-type and call it var city
    var city = $('#city-type').val();
    console.log(city);

//if value of city matches "New York" or "NYC" or "New York City"
    if(city == 'New York' || 'NYC' || 'New York City') {

//change class     
      $('body').css("background-image", "url(../assignment5/images/nyc.jpg)");    
    }

//else if value of city matches "San Francisco" or "SF" or "Bay Area"
    else if(city == 'San Francisco' || 'SF' || 'Bay Area') {

//change class 
      $('body').css("background-image", "url(../assignment5/images/sf.jpg)");
    }

    //else if value of city matches "Los Angeles" or "LA" or "LAX"
        //change class 

      //else if value of city matches "Austin" or "ATX"
        //change class 

      //else value of city matches "Sydney" or "SYD"
        //change class


    else {
      $('body').css("background-color", "black");
    }
  });




      
  }); 

//$('body').css("background-image", "url(../assignment5/images/nyc.jpg)");