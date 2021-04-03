const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=7f54ed70011a0dd3f0cb5ff5e3b28102";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = jsObject.main.temp;
    let wind = jsObject.wind.speed;
    const desc = jsObject.weather[0].description; 
    document.getElementById("currenttemp").textContent = temp.toFixed(1);
    document.getElementById("now").textContent = desc;
    document.getElementById("high").textContent = (jsObject.main.temp_max).toFixed(1); 
    document.getElementById("humidity").textContent = jsObject.main.humidity;
    document.getElementById("windspeed").textContent = wind.toFixed(1);
    
    var Temp = parseFloat(document.getElementById("currenttemp").innerHTML);
    var windspeed = parseFloat(document.getElementById("windspeed").innerHTML);
    var wcf;
    
    if (Temp > 50 || windspeed <= 3.0) {
        wcf= "N/A";
    }
    
    else{
       
        wcf=   35.74 + 0.6125 * Temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * Temp * Math.pow(windspeed, 0.16);
        
    }
    document.getElementById("wcf").innerHTML = wcf.toFixed(1);
  });

  
  const forecastapiURL =
  'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=7f54ed70011a0dd3f0cb5ff5e3b28102';
  fetch(forecastapiURL)
    .then((response) => response.json())
    .then((jsObject) => {

    var d = new Date();
    var dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    for (let i = 1; i < 6; i++) {
        let day = "day" + i;
        let weekday = d.getDay() + i;

        if (weekday > 6) {
            weekday = weekday - 7;
            document.getElementById(day).innerHTML = dayofWeek[weekday];
        } else {
            document.getElementById(day).innerHTML = dayofWeek[weekday];
        }
    }

   
    var i = 1;
    for (var x = 0; x < jsObject.list.length; x++) {
        var temp = "temp" + i;
        var icon = "icon" + i;
        if (jsObject.list[x].dt_txt.includes("18:00:00")) {
            document.getElementById(temp).textContent = Math.round (jsObject.list[x].main.temp);

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[x].weather[0].icon + '.png'; // note the concatenation
            const desc = jsObject.list[x].weather[0].description; // note how we reference the weather array
            document.getElementById(icon).setAttribute('src', imagesrc); // focus on the setAttribute() method
            document.getElementById(icon).setAttribute('alt', desc);

            i++;
        }

    }
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.list[6].weather.description; // note how we reference the weather array
    document.getElementById('icon1').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon1').setAttribute('alt', desc);

});

  

      