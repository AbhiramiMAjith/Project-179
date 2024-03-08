var coordinates = {}

$(document).ready(function(){
    getCoordinates()
})

function getCoordinates(){
    var params = new URLSearchParams(document.location.search)
    
    if(params.has("source") && params.has("destination")){
        var source = params.get("source")
        var destination = params.get("destination")

        var source_latitude = source.split(";")[0]
        var source_longitude = source.split(";")[1]

        var destination_latitude = destination.split(";")[0]
        var destination_longitude = destination.split(";")[1]

        coordinates = {
            "source_latitude" : source_latitude,
            "source_longitude" : source_longitude,
            "destination_latitude" : destination_latitude,
            "destination_longitude" : destination_longitude
        }
        console.log(coordinates)
    }
    else{
        alert("seleCT CORDINATES")
        window.history.back()
    }
}