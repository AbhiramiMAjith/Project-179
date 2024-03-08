let latitude, longitude, destination

$(document).ready(function(){
    alert("Please allow the device to access your location")
    initGeoLocation()
})

function initGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }
    else{
        alert("Sorry, your browser does not support us")
    }
}

function success(position){
    longitude = position.coords.longitude
    latitude = position.coords.latitude

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container : "map",
        style : "mapbox://styles/mapbox/streets-v11",
        center : [longitude, latitude],
        zoom : 16
    })

    
    var img1 = document.querySelector("#taj_mahal")
    var marker1 = new mapboxgl.Marker({
        element : img1
    })
    .setLngLat([78.0421,27.1751])
    .addTo(map)


    var img2 = document.querySelector("#golden_temple")
    var marker2 = new mapboxgl.Marker({
        element : img2
    })
    .setLngLat([74.8765,31.6200])
    .addTo(map)


    var img3 = document.querySelector("#red_fort")
    var marker3 = new mapboxgl.Marker({
        element : img3
    })
    .setLngLat([77.2410,28.6562])
    .addTo(map)


    var img4 = document.querySelector("#gateway")
    var marker4 = new mapboxgl.Marker({
        element : img4
    })
    .setLngLat([72.8347,18.9220])
    .addTo(map)

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions : {
                enableHighAccuracy : true
            },
            trackUserLocation : true
        })
    )

    map.addControl(
        new MapboxGeocoder({
            accessToken : mapboxgl.accessToken,
            mapboxgl : mapboxgl
        }).on('result', function(e){
            destination = e.result.center
            console.log(destination)
        })
    )

    $(function(){
        $("#navigate-button").click(function(){
            window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
        })
    })
}
