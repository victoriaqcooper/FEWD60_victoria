$(function (){

  $('#city').on('submit', function (event) {
    event.preventDefault();

    var cityName = $('#cityName').val();
    console.log(cityName)

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

    $.ajax({
      type: 'GET',
      url: url,
      dataType:'jsonp',
      success: function(json) {
        console.log(json);
        $('#weather').text(JSON.stringify(json));
        $('#weather').text(json.main.temp);
      }

    });

  });

});

//api.openweathermap.org/data/2.5/weather?q=<CITYNAME>