/*QUESTIONS FOR ARTHUR
  --dropdown selector? line 100
  --how to set up loop to get all the results, not just 20
  --masonry for live feed
*/

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
//on live feed click, run ajax call for live feed
  $('#menu').on('click', '.liveFeed', liveFeed);
//on time click bring up menu inside #time
   $('#timeSelect').on('change', function() {
    // console.log($('#timeSelect').val());
    if ($('#timeSelect').val() === 'First Series') {firstSeries()}; 
   });

  


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
          $('#liveposts').append("<li class='postlinksphoto item'><a href='" + postUrl + "'><img src='" + resultResponse[i].photos[0].alt_sizes[1].url + "'></a></li>");
          }

//if result type is text, display the body of the post
          else if (resultResponse[i].type == "text"){
            $('#liveposts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div></a></li>");
          }
//if result type is quote, display the quote
          else if (resultResponse[i].type == "quote") {
            $('#liveposts').append("<li class= 'postlinksquote item'><a href='" + postUrl + "'><div>" + resultResponse[i].text + "</div></a></li>");
          }

           else if (resultResponse[i].type == "answer") {
            $('#liveposts').append("<li class= 'postlinksanswer item'><a href='" + postUrl + "'><div>" + resultResponse[i].answer + "</div></a></li>");
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
 function firstSeries(event){
    // event.preventDefault();
  //   var selectVal = $('#timeSelect').val();
  //   if ( selectVal == "First Series") {
   console.log("firstSeries is running");

    //var resultResponse = results.response;
    var url = 'http://api.tumblr.com/v2/tagged?tag=';
    var tag = 'sherlock';
    var api_key = '&api_key=KpXJwr81sO35qgbSzVY2DoxRhEnU44LnUiyermO9Xc3pdQ106J&before=';
    var before = 1281398400; //this is the timecode for the airdate of s1 e3
//actual ajax call
//make ajax call while the timestamp is greater than or equal to the airdate of the first episode    
     do {
    $.ajax ({
      type: 'GET',
      url: url + tag + api_key + before,
      dataType: 'jsonp',
      success: function(results){

        var resultResponse = results.response;
        console.log(resultResponse);
        // var counter = 0;
//iterate through array of responses 
        for(i = 0; i < resultResponse.length; i++) {
          $('#timeData').append("<a href='" + resultResponse[i].post_url +"'><div class='datapoint'></div></a>");
        
//console log the date of the last one
          console.log(resultResponse[19].date);
        }
       
//reassign var before with timestamp of resultResponse[19]
        before = resultResponse[19].timestamp;

      }
      });
//and increment counter for each one          
  //counter ++;
   //console.log(counter);
    }while(resultResponse[resultResponse.length-1].timestamp >= 1280016000 ) 


  }
  
   //  else {
   //    console.log("nothing");
   //  }

  //}






/*THIS CLOSES DOCUMENT.READY*/});

//TIME PSUEDO CODE
  //call sherlock tagged posts before jan 1 2012 (line 110)
  //change value of before to resultResponse[19].timestamp
  //repeat lines 105-106 until value of resultResponse[19].timestamp is =< timestamp for august 10 2010 (line 114)  


//before timestamp = jan 1 2012
    // var before = '1325462400';

//timestamp for aug 10 2010 (airing of s1e3)
  // var after = '1281398400';
// timestamp for july 25 2010 (airdate of s1e1) 1280016000
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


    