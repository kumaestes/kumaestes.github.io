const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7f54ed70011a0dd3f0cb5ff5e3b28102';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = jsObject.main.temp;
    let wind = jsObject.wind.speed;
    const desc = jsObject.weather[0].description; 
    document.getElementById('ctemp').textContent = temp.toFixed(1);
    document.getElementById('now').textContent = desc;
    document.getElementById('high').textContent = (jsObject.main.temp_max).toFixed(1); 
    document.getElementById('hum').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = wind.toFixed(1);
    
    var Temp = parseFloat(document.getElementById("ctemp").innerHTML);
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
  'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=7f54ed70011a0dd3f0cb5ff5e3b28102';
fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    function dayofWeek(dt) {
      let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]; 
      const timestamp = dt * 1000;
      let d = new Date(timestamp);
      return days[ d.getDay() ]; 
  }
    

    const filter = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

    let i = 1;
    filter.forEach(day => {
        document.getElementById("day" + i).textContent = dayofWeek(day.dt);
        let imagesrc = "https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png";
        document.getElementById("icon" + i).setAttribute("src", imagesrc);
        document.getElementById("icon" + i).setAttribute("alt", day.weather[0].description);
        document.getElementById("temp" + i).textContent = Math.round(day.main.temp) + " F";
        i++;
    });
   
  });
