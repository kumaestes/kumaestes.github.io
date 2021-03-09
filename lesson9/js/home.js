
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject["towns"];
    
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = towns[i].name;
        p.textContent = towns[i].motto;
        p1.textContent = "Year Founded: " + towns[i].yearFounded;
        p2.textContent = "Population: " + towns[i].currentPopulation;
        p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        image.setAttribute("src", "image/" + towns[i].photo);
        image.setAttribute("alt", towns[i].name + "photo");

        card.append(h2);
        card.append(p);
        card.append(p1);
        card.append(p2);
        card.append(p3);
        card.append(image);

        document.querySelector("div.cards").append(card);  
    }}
  });



