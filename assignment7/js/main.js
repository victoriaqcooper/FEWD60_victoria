//

$(document).ready(function() {


  $('#todo').submit(function (event) {
    event.preventDefault();

    var item = $('#item').val();
    console.log(item);

    $('#item').val("");

    $('#list').append("<li><input type='checkbox' value='done' class='checkbox'>" + item +"</li>");


      $('.checkbox').click(function() {
        event.preventDefault();
        if(this.checked) {
          $('li').addClass('checked');
        }

      });
    });
});


//
