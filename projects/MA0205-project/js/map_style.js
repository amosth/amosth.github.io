google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(46.0810723, 13.2119474),
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,

        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"},{"weight":"3.98"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#cecece"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#d78888"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#353535"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"color":"#f8f8f8"},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"geometry","stylers":[{"lightness":"-16"},{"gamma":"2.35"}]},{"featureType":"poi.school","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":"37"}]},{"featureType":"poi.sports_complex","elementType":"labels","stylers":[{"visibility":"off"},{"lightness":"29"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#161616"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"saturation":"-19"},{"lightness":"-34"},{"gamma":"2.39"},{"color":"#b3b3b3"},{"weight":"0.30"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#313131"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels","stylers":[{"saturation":"0"},{"lightness":"-21"},{"weight":"0.20"},{"gamma":"2.82"},{"color":"#bcbcbc"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#7da1af"},{"lightness":17}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":"37"},{"weight":"0.01"},{"color":"#3b5d62"}]}]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);


      var icons = {
        uni: {
          icon: 'img/contacts/mapIcon.png'
      }};

      var features = [{
        position: new google.maps.LatLng(46.0810723, 13.2119474),
        type: 'uni'
      }];

      // Create markers.
      features.forEach(function(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
        });
      });





    var center;
    function calculateCenter() {
      center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
      calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(center);
    });
}
