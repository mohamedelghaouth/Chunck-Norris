const form =  document.querySelector("#form").addEventListener("submit", getJokes);
const jokesDiv =  document.querySelector("#jokes");

function getJokes(e){
    e.preventDefault();

    let number = document.querySelector("#number").value;

    const xrh = new XMLHttpRequest();
    xrh.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
    xrh.onload = function(){
        if(this.status === 200){
            let jokes = JSON.parse(this.responseText).value;
            jokes.forEach(element => {
                
                let cardBody = document.createElement("div");
                cardBody.className = "card-body";
                cardBody.appendChild( document.createTextNode(`${element.joke}`));
               
                let card = document.createElement("div");
                card.className = "card";
                card.appendChild(cardBody);

                jokesDiv.appendChild(card);

            });
        }
    }

    xrh.send();
}