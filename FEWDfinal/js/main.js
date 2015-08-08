//FANOFFANDOM JS
//V.Q. COOPER
//AUG2015
//FEWD60 FINAL PROJECT

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
//on sherlock click, run ajax call for live feed
  $('#menu').on('click', '.fandom', fandom);
  $('#menu').on('click', '.fanArt', fanArt);
  $('#menu').on('click', '.otp', oneTruePairing);
  $('#menu').on('click', '.shipit', iShipIt);
  $('#menu').on('click', '.fanfeels', fanFeels);
  
//
  


/**********API FUNCTIONS************/

  function fandom(event) {
    console.log("fandom is running");
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=';
    var tag = 'fandom'
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
          $('#fandomPosts').append("<li class='postlinksphoto item'><a href='" + postUrl + "'><img src='" + resultResponse[i].photos[0].alt_sizes[1].url + "'></a></li>");
          }

//if result type is text, display the body of the post
          else if (resultResponse[i].type == "text"){
            $('#fandomPosts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div></a></li>");
          }
//if result type is quote, display the quote
          else if (resultResponse[i].type == "quote") {
            $('#ofandomPosts').append("<li class= 'postlinksquote item'><a href='" + postUrl + "'><div>" + resultResponse[i].text + "</div></a></li>");
          }

           else if (resultResponse[i].type == "answer") {
            $('#fandomPosts').append("<li class= 'postlinksanswer item'><a href='" + postUrl + "'><div>" + resultResponse[i].answer + "</div></a></li>");
          }

//else, display title as link
          else {
            $('#fandomPosts').append("<li class='postlinks item'><a href='" + postUrl + "'><div>" + resultResponse[i].blog_name + "</div></a></li>");
          }
        }
//masonry call
  $('#fandom').imagesLoaded(function() {
console.log("masonry");
  $('#fandom').masonry({
   columnWidth: 'li',
   gutter: 15,
   itemSelector: '.item',
   });
    });   
      }

  });

}

/*FAN ART*/  
  function fanArt(event) {
    console.log("fanArt is running");
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=';
    var tag = 'fan art'
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
          $('#fanArtPosts').append("<li class='postlinksphoto item'><a href='" + postUrl + "'><img src='" + resultResponse[i].photos[0].alt_sizes[1].url + "'></a></li>");
          }

//if result type is text, display the body of the post
          else if (resultResponse[i].type == "text"){
            $('#fanArtPosts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div></a></li>");
          }
//if result type is quote, display the quote
          else if (resultResponse[i].type == "quote") {
            $('#fanArtPosts').append("<li class= 'postlinksquote item'><a href='" + postUrl + "'><div>" + resultResponse[i].text + "</div></a></li>");
          }

           else if (resultResponse[i].type == "answer") {
            $('#fanArtPosts').append("<li class= 'postlinksanswer item'><a href='" + postUrl + "'><div>" + resultResponse[i].answer + "</div></a></li>");
          }

//else, display title as link
          else {
            $('#fanArtPosts').append("<li class='postlinks item'><a href='" + postUrl + "'><div>" + resultResponse[i].blog_name + "</div></a></li>");
          }
        }
//masonry call
$('#fanArt').imagesLoaded(function() {
  $('#fanArt').masonry({
   columnWidth: 'li',
   gutter: 15,
   itemSelector: '.item',
   });  
});
      }

  });

}

  function oneTruePairing(event) {
    console.log("otp is running");
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=';
    var tag = 'OTP'
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
          $('#otpPosts').append("<li class='postlinksphoto item'><a href='" + postUrl + "'><img src='" + resultResponse[i].photos[0].alt_sizes[1].url + "'></a></li>");
          }

//if result type is text, display the body of the post
          else if (resultResponse[i].type == "text"){
            $('#otpPosts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div></a></li>");
          }
//if result type is quote, display the quote
          else if (resultResponse[i].type == "quote") {
            $('#otpPosts').append("<li class= 'postlinksquote item'><a href='" + postUrl + "'><div>" + resultResponse[i].text + "</div></a></li>");
          }

           else if (resultResponse[i].type == "answer") {
            $('#otpPosts').append("<li class= 'postlinksanswer item'><a href='" + postUrl + "'><div>" + resultResponse[i].answer + "</div></a></li>");
          }

//else, display title as link
          else {
            $('#otpPosts').append("<li class='postlinks item'><a href='" + postUrl + "'><div>" + resultResponse[i].blog_name + "</div></a></li>");
          }
        }
//masonry call
$('#OTP').imagesLoaded(function() {
console.log("masonry is running");  
  $('#OTP').masonry({
   columnWidth: 'li',
   gutter: 15,
   itemSelector: '.item',
   }); 
});
      }

  });

}

  function iShipIt(event) {
    console.log("ship it is running");
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=';
    var tag = 'I ship it'
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
          $('#shipItPosts').append("<li class='postlinksphoto item'><a href='" + postUrl + "'><img src='" + resultResponse[i].photos[0].alt_sizes[1].url + "'></a></li>");
          }

//if result type is text, display the body of the post
          else if (resultResponse[i].type == "text"){
            $('#shipItPosts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div></a></li>");
          }
//if result type is quote, display the quote
          else if (resultResponse[i].type == "quote") {
            $('#shipItPosts').append("<li class= 'postlinksquote item'><a href='" + postUrl + "'><div>" + resultResponse[i].text + "</div></a></li>");
          }

           else if (resultResponse[i].type == "answer") {
            $('#shipItPosts').append("<li class= 'postlinksanswer item'><a href='" + postUrl + "'><div>" + resultResponse[i].answer + "</div></a></li>");
          }

//else, display title as link
          else {
            $('#shipItPosts').append("<li class='postlinks item'><a href='" + postUrl + "'><div>" + resultResponse[i].blog_name + "</div></a></li>");
          }
        }
//masonry call
$('#shipIt').imagesLoaded(function() {
  $('#shipIt').masonry({
   columnWidth: 'li',
   gutter: 15,
   itemSelector: '.item',
   });  
});
      }

  });

}

 function fanFeels(event) {
    console.log("fan feels it is running");
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=';
    var tag = 'fan feels'
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
          $('#fanFeelsPosts').append("<li class='postlinksphoto item'><a href='" + postUrl + "'><img src='" + resultResponse[i].photos[0].alt_sizes[1].url + "'></a></li>");
          }

//if result type is text, display the body of the post
          else if (resultResponse[i].type == "text"){
            $('#fanFeelsPosts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div></a></li>");
          }
//if result type is quote, display the quote
          else if (resultResponse[i].type == "quote") {
            $('#fanFeelsPosts').append("<li class= 'postlinksquote item'><a href='" + postUrl + "'><div>" + resultResponse[i].text + "</div></a></li>");
          }

           else if (resultResponse[i].type == "answer") {
            $('#fanFeelsPosts').append("<li class= 'postlinksanswer item'><a href='" + postUrl + "'><div>" + resultResponse[i].answer + "</div></a></li>");
          }

//else, display title as link
          else {
            $('#fanFeelsPosts').append("<li class='postlinks item'><a href='" + postUrl + "'><div>" + resultResponse[i].blog_name + "</div></a></li>");
          }
        }
//masonry call
  
 $('#fanFeels').imagesLoaded(function() { 
    $('#fanFeels').masonry({
     columnWidth: 'li',
     gutter: 15,
     itemSelector: '.item',
     });  
  });

  }  
  });

}

  

  


/*THIS CLOSES DOCUMENT.READY*/});


// //on time click bring up menu inside #time
//    $('#timeSelect').on('change', function() {
//     // console.log($('#timeSelect').val());
//     if ($('#timeSelect').val() === 'First Series') {firstSeries()}; 
//    });


// /*TIME*/
//  function firstSeries(event){
//     // event.preventDefault();
//   //   var selectVal = $('#timeSelect').val();
//   //   if ( selectVal == "First Series") {
//    console.log("firstSeries is running");

//     //var resultResponse = results.response;
//     var url = 'http://api.tumblr.com/v2/tagged?tag=';
//     var tag = 'sherlock';
//     var api_key = '&api_key=KpXJwr81sO35qgbSzVY2DoxRhEnU44LnUiyermO9Xc3pdQ106J&before=';
//     var before = 1281398400; //this is the timecode for the airdate of s1 e3
// //actual ajax call
// //make ajax call while the timestamp is greater than or equal to the airdate of the first episode    
//      do {
//     $.ajax ({
//       type: 'GET',
//       url: url + tag + api_key + before,
//       dataType: 'jsonp',
//       success: function(results){

//         var resultResponse = results.response;
//         console.log(resultResponse);
//         // var counter = 0;
// //iterate through array of responses 
//         for(i = 0; i < resultResponse.length; i++) {
//           $('#timeData').append("<a href='" + resultResponse[i].post_url +"'><div class='datapoint'></div></a>");
        
// //console log the date of the last one
//           console.log(resultResponse[19].date);
//         }
       
// //reassign var before with timestamp of resultResponse[19]
//         before = resultResponse[19].timestamp;

//       }
//       });
// //and increment counter for each one          
//   //counter ++;
//    //console.log(counter);
//     } while(resultResponse[resultResponse.length-1].timestamp  > 1280016000); 


//   }


