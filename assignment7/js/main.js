//

$(document).ready(function() {


  $('#todo').submit(function (event) {
    event.preventDefault();

    var item = $('#item').val();
    console.log(item);

    $('#item').val("");

    $('#list').append("<p><input type='checkbox' value='done' class='checkbox'>" + item +"</p>");


      $('.checkbox').click(function() {
        event.preventDefault();
        if(this.checked) {
          $('p').toggleClass('checked');

        }
      });
    });

//
});