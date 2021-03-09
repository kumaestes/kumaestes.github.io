const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    const cards =  document.querySelector("div.cards");
    const filter = ["Preston", "Soda Springs", "Fish Haven"];
    const datafilter = towns.filter(x => filter.includes(x.name));
    
    datafilter.forEach(town => {
        let card = document.createElement("section");
        let info = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p"); 
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let imagediv = document.createElement("div");
        let image = document.createElement("img");

        h2.innerHTML = town.name;
        p.innerHTML = town.motto;
        p1.innerHTML = "Year Founded: " + town.yearFounded;
        p2.innerHTML = "Population: " + town.currentPopulation;
        p3.innerHTML = "Annual Rain Fall: " + town.averageRainfall;
        image.setAttribute("src", "image/" + town.photo);
        image.setAttribute('alt', "town pic");
        
        info.append(h2);
        info.append(p);
        info.append(p1);
        info.append(p2);
        info.append(p3);
        imagediv.append(image);
        card.append(imagediv);
        card.append(info);
        cards.append(card);
    });  
  });