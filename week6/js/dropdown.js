$(document).ready(function() {
  
//when form field is clicked
  $('#city-type').click(function(event) { 
    event.preventDefault();
      //could not get append to work but replace with does???
    $('#city-type').replaceWith("<select>Choose a City</select>");
//create array of options
      var cityArray = ["NYC", "SF", "LA", "ATX", "SYD"];
 //populate dropdown with array (for loop) how do i call the content at the ith place not that text specifically??
      for (var i = 0; i < cityArray.length; i++) {
        $('select').append("<option>" + cityArray[i] + "</option>");
      };

//apply dropdown selection to var cityAdjust      
      $('#submit-btn').click(function(event) {
        event.preventDefault();
        var cityAdjust = $('select').val();
        console.log(cityAdjust);
//if else conditional for changing background
        if(cityAdjust == 'NYC') {    
        $('body').css("background-image", "url(../week6/images/nyc.jpg)");    
        }
//else if value of city matches "San Francisco" or "SF" or "Bay Area" change background
    else if(cityAdjust == 'SF') {
      $('body').css("background-image", "url(../week6/images/sf.jpg)");
    }

   
//else if value of city matches "Los Angeles" or "LA" or "LAX" change background
    else if(cityAdjust == 'LA') {     
      $('body').css("background-image", "url(../assignment5/images/la.jpg)");
    }

//else if value of city matches "Austin" or "ATX"
    else if(cityAdjust == 'ATX') {
      $('body').css("background-image", "url(../assignment5/images/austin.jpg)");
    }

//else value of city matches "Sydney" or "SYD"
    else if(cityAdjust == 'SYD') {
      $('body').css("background-image", "url(../assignment5/images/sydney.jpg)");
    }
    
//else error screen
    else {
      $('body').css("background", "green");
    }

      });      






  });
  
});