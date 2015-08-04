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

/**********TUMBLR API CALLS************/

  function liveFeed(event) {
//url variables
    var url = 'http://api.tumblr.com/v2/tagged?tag=sherlock&api_key=';
    var api_key = 'KpXJwr81sO35qgbSzVY2DoxRhEnU44LnUiyermO9Xc3pdQ106J';
//before timestamp = jan 1 2012
    var before = '&before=1325462400';
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
          $('#liveposts').append("<li class='postlinks'><a href='" + resultResponse[i].post_url + "'>" + resultResponse[i].blog_name + "</a></li>");
          console.log(resultResponse[i].date);

//if result type is a photo, display the photo

//else, display title as link
        }
         
        }
    });
  }




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


      });