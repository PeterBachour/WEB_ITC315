
//Fonction appelée lorsque la fenêtre se charge "window.onload = getLocation;"
function getLocation() {
    //Vérification de si le "Modernizr" a accès à la geolocation
    if (Modernizr.geolocation) {
        //appelle les fonctions geoSucces s'il la geolocation est disponible
        // ou geoError si un problème est apparu.
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
}

//Affichage de toute les coordonnées dans les elements associés
function geoSuccess(positionInfo) {
    document.getElementById("longitude").innerHTML = positionInfo.coords.longitude;
    document.getElementById("latitude").innerHTML = positionInfo.coords.latitude;
    document.getElementById("precision").innerHTML = positionInfo.coords.accuracy;
    document.getElementById("altitude").innerHTML = positionInfo.coords.altitude;
    document.getElementById("precisionAltitude").innerHTML = positionInfo.coords.altitudeAccuracy;
    document.getElementById("cap").innerHTML = positionInfo.coords.heading;
    document.getElementById("vitesse").innerHTML = positionInfo.coords.speed;

    var ESIREM = { //Creation de l'objet ESIREM qui a les parametre latitude et longitude
        latitude: 47.3121519,
        longitude: 5.0039326
      };    
    document.getElementById("distance").innerHTML = calculDistance(positionInfo.coords, ESIREM) + "km";
}

//Affichage de l'erreur qui est apparu
function geoError(positionError) {
    if (errorInfo.code == 1)
        alert("L’utilisateur ne souhaite pas partager sa position");
    else if (errorInfo.code == 2)
        alert("Impossible de déterminer une position");
    else if (errorInfo.code == 3)
        alert("Délai de recherche de position trop long");
}

function calculDistance(startCoords, destCoords) {
    var startLatRads = degreesEnRadians(startCoords.latitude); 
    var startLongRads = degreesEnRadians(startCoords.longitude);
    var destLongRads = degreesEnRadians(destCoords.longitude);
    var destLatRads = degreesEnRadians(destCoords.latitude);
    var Radius = 6371; // rayon de la Terre en km
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) * Math.cos(destLatRads) *
        Math.cos(startLongRads - destLongRads)) * Radius; 
        
    return distance;
}

function degreesEnRadians(degrees) {
    radians = (degrees * Math.PI) / 180;
    return radians;
}

window.onload = getLocation;




