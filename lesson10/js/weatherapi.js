
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7f54ed70011a0dd3f0cb5ff5e3b28102";
 
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    
    let prestonTemp = (jsObject.main.temp - 273.15) * (9/5) + 32;
    let prestonWind = jsObject.wind.speed;

    document.getElementById("current-temp").textContent = prestonTemp.toFixed(0);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

   
  });