$(document).ready(function() {
  
/**********NAVIGATION************/

  $(function () {
    $('#menu').show().accordion({
      active: false,
      autoheight: false,
      heightStyle: "content",
      navigation: true,
      collapsible: true
    });

  });

//on click, run ajax call for live feed
  $('#menu').on('click', '.liveFeed', liveFeed);
  $('#menu').on('click', '.time', time )

/**********API FUNCTIONS************/

/*LIVE FEED*/  
  function liveFeed(event) {
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=';
    var tag = 'sherlock'
    var api_key = '&api_key=KpXJwr81sO35qgbSzVY2DoxRhEnU44LnUiyermO9Xc3pdQ106J';
    var limit = '&limit=20'
//actual ajax call
    $.ajax ({
      type: 'GET',
      url: url + tag + api_key + limit,
      dataType: 'jsonp',
//if successful, display results as <li> links
      success: function(results){

        var resultResponse = results.response;
        

        for(i=0; i < resultResponse.length; i++) {
//console log sanity check
          console.log(resultResponse[i].date);
          console.log(resultResponse[i].type);

//set variable for post urls for links          
          var postUrl = resultResponse[i].post_url;        
          
//if result type is a photo, display the photo
          if (resultResponse[i].type == "photo"){
          $('#liveposts').append("<li class='postlinksphoto item'><a href='" + postUrl + "'><img src='" + resultResponse[i].photos[0].alt_sizes[2].url + "'></a></li>");
          }

//if result type is text, display the body of the post
          else if (resultResponse[i].type == "text"){
            $('#liveposts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div></a></li>");
          }

//else, display title as link
          else {
            $('#liveposts').append("<li class='postlinks item'><a href='" + postUrl + "'><div>" + resultResponse[i].blog_name + "</div></a></li>");
          }
        }
//masonry call
  $('#livefeed').masonry({
   columnWidth: 250,
   itemSelector: '.item',
   });  

      }

  });

}

/*TIME*/
 function time(event){
    event.preventDefault();
//label for dropdown
  $('#time').append("<div class='selectLabel'>Time Periods</div>")
// create a dropdown menu for times
    $('#time').append("<select id='timeSelect'>Choose a Time Period</select>");
//values for dropdown menu      
      var timeArray = ["First Series", "The Space Between Part 1", "The Space Between Part 2", "Second Series"];
//populate <select> with array values
    for(var i = 0; i < timeArray.length; i++){
      $('#timeSelect').append("<option class='timeOption'>" + timeArray[i] + "</option>");
    }
  }
//     var url = 'http://api.tumblr.com/v2/tagged?tag=';
//     var tag = 'sherlock';
//     var api_key = '&api_key=KpXJwr81sO35qgbSzVY2DoxRhEnU44LnUiyermO9Xc3pdQ106J&before=';
//     var before = '1325462400';
// //actual ajax call
//     $.ajax ({
//       type: 'GET',
//       url: url + tag + api_key + before,
//       dataType: 'jsonp',
//       success: function(results){

//         var resultResponse = results.response;
//         console.log(resultResponse[0].timestamp);
//         console.log(resultResponse[19].timestamp);

//         }

//       });
   




/*THIS CLOSES DOCUMENT.READY*/});

//TIME PSUEDO CODE
  //call sherlock tagged posts before jan 1 2012 (line 110)
  //change value of before to resultResponse[19].timestamp
  //repeat lines 105-106 until value of resultResponse[19].timestamp is =< timestamp for august 10 2010 (line 114)  


//before timestamp = jan 1 2012
    // var before = '1325462400';

//timestamp for aug 10 2010
  // var after = '1281398400';

//switch cases:

  //for time: 
  //if post was published between aug 10 2010 and jan 10 2012
    //if post was published between aug 10 and sept 10
      //add div with class .month to #time
      //for every post past 1 post, add 5px to size of added div

      //if post was published between sept 11 and oct 10
      //add div with class .month to #time
      //for every post past 1 post, add 5px to size of added div

      //if post was published between oct 11 and nov 10
      //add div with class .month to #time
      //for every post past 1 post, add 5px to size of added div

      //if post was published between nov11 and dec 10
      //add div with class .month to #time
      //for every post past 1 post, add 5px to size of added div

      //if post was published between dec 11 and jan 10
      //add div with class .month to #time
      //for every post past 1 post, add 5px to size of added div


    