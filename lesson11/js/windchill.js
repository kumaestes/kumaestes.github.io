/*wind chill formula*/


    
var Temp = parseFloat(document.getElementById("Temp").innerHTML);
var windspeed = parseFloat(document.getElementById("windspeed").innerHTML);
var wcf;


if (Temp > 50 || windspeed <= 3.0) {
    wcf= "N/A";
}

else{
   
    wcf=   35.74 + 0.6125 * Temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * Temp * Math.pow(windspeed, 0.16);
    
}
document.getElementById("wcf").innerHTML = wcf.toFixed(1);
