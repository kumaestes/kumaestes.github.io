const requestURL = "json/directory.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {
        console.table(jsonObject); 
        const business = jsonObject["business"];
        for (let i = 0; i < business.length; i++){
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = business[i].name;
            p.textContent = "Phone #:" + " " + business[i].Phone;
            p2.textContent = "Website:" + " " + business[i].website;
            image.setAttribute("src", business[i].imageurl);
            

            card.append(h2);
            card.append(p);
            card.append(p2);
            card.append(image);

            const cards = document.querySelector("div.cards").append(card);
        }
    });









