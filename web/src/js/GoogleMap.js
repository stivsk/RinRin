/* global google */
function initMap(){
    var mapCanvas = document.getElementById("map");
    var medellin = new google.maps.LatLng(6.2656458395431045, -75.57490825653076); 
    var mapOptions = {center: medellin, zoom: 13};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var campus = [
        ['Fraternidad', 6.245249110561461, -75.55080056190491, 'Facultad de ingenierias'],
        ['Robledo', 6.26906921246436, -75.58810472488403, 'Facultad de ciencias exactas'],
        ['Castilla', 6.290659406001839, -75.57137310504913, 'Escuela Secundaria'],
        ['Floresta', 6.257828520630941, -75.60209512710571, 'Facultad de artes'],
        ['Prado', 6.2571939582317, -75.56619644165039, 'Dirección: Cra 51 No. 58-69 Prado']
      ];
    
    for (var i = 0; i < campus.length; i++) {
        var sede = campus[i];
        var latSede = new google.maps.LatLng(sede[1], sede[2]);
        var marker = new google.maps.Marker({
            position: latSede,
            icon: "src/img/logo.png",
            map: mapCanvas,
            title: sede[0],
            animation: google.maps.Animation.BOUNCE
        });             
        marker.setMap(map);
    }
        
    google.maps.event.addListener(map, 'click', function(event){
        var infoMarca = new google.maps.Marker({
            position: event.latLng,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });
        var ventanaInfo = new google.maps.InfoWindow({
            content: 'latitud: ' + event.latLng.lat() + ' Longitud: ' + event.latLng.lng()
        });
        ventanaInfo.open(map, infoMarca);
    });
    
}

google.maps.event.addDomListener(window, 'load', initMap);