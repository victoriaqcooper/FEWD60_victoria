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

/**********API FUNCTIONS************/

  function liveFeed(event) {
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=sherlock';
    var api_key = '&api_key=KpXJwr81sO35qgbSzVY2DoxRhEnU44LnUiyermO9Xc3pdQ106J';

//actual ajax call
    $.ajax ({
      type: 'GET',
      url: url + api_key,
//limit is not working?
      limit: 10,
//after: 1326153600,
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

          else if (resultResponse[i].type == "text"){
            $('#liveposts').append("<li class= 'postlinkstext item'><a href='" + postUrl + "'><div>" + resultResponse[i].body + "</div>");
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

/*THIS CLOSES DOCUMENT.READY*/});

  


//before timestamp = jan 1 2012
    // var before = '&before=1325462400';

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


    