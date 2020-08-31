const weatherkey = '4f148c9563cb2a85404910d3ad39b157';
const mtbkey = '200883403-ada2291e9279c2012a03db0c4517b4ff';
const mapkey = 'AIzaSyAAnMgdCdZHfBYWb1ASE4k7mQrvSwKK3Es';
  
  function weatherBallon( cityID ) {
      fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + weatherkey)  
      .then(function(resp) { return resp.json() })
      .then(function(data) {
          drawWeather(data);
      })
      .catch(function() {
      });
  }
  function drawWeather( d ) {
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description; 
      
      document.getElementById('description').innerHTML = description;
      document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  }
  window.onload = function() {
      weatherBallon( 4460243 );
  }; 

  function init() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 35.2271, lng: -80.8431 },
      zoom: 10
    });
    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
      }

      
  document.getElementById('localTrails').innerHTML = "localTrails";


  var APIKey = "200888911-caa38fd7e1941e6d8cc7a5b9d2a5cc93";

  var queryURL = "https://www.mtbproject.com/data/get-trails?lat=35.2271&lon=-80.8431&maxDistance=20&key=" + APIKey;

  $(document).ready(function(){
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

//run console.log//

  console.log(response);

    var results = response.trails;

    for (var i = 0; i < results.length; i++) {


      var trailInfo = $("<div>");
  
      var name = $(trailInfo).append(  `<p> Name: ${ results[i].name} </p>`);
      var stars = $(trailInfo).append( `<p> Rating: ${ results[i].stars} </p>`);
      var imgSmall = $(trailInfo).append( `<img src="${ results[i].imgSmall}">`);
      var length = $(trailInfo).append( `<p> Length: ${ results[i].length} </p>`);
      var conditionStatus = $(trailInfo).append( `<p> status: ${ results[i].conditionStatus} </p>`);
      var conditionDetails = $(trailInfo).append( `<p> details: ${ results[i].conditionDetails} </p>`);
      $("localTrails").append(name);
      
    }
  })});
