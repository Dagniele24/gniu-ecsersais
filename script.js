const Url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjkyNGMwNTgzNTAwMTg1MjJkMGIiLCJpYXQiOjE3MDIzNzM2NjgsImV4cCI6MTcwMzU4MzI2OH0.3UPGwlcKf8Ag5wW0fA_00qA6c7XcRvZQrqN5iPJRhSY";

let prodotti = [];

function getData() {
    fetch(Url, {
        method: "GET",
        headers: {    
            "Authorization": token,
            "Content-Type": "application/json"
        }
        
    })
        .then(response => response.json())
        .then(data => {
            prodotti = data;
            console.log(data);
            createCards(data);
            
        })
}
getData();

function sendData() {
        let name = document.getElementById("name").value;
        let description =  document.getElementById("description").value;
        let price = document.getElementById("price").value;
        let imageUrl = document.getElementById("imageUrl").value;
        let brand = document.getElementById("brand").value;
        
        saveInp(name, description, brand, imageUrl, price);
}

let cardsContainer = document.getElementById('cardContainer');


function createCards(products) {
    console.log(products);
    products.forEach(product => {
        let card = document.createElement("div");
       card.innerHTML = `
        <div class="col-sm-4 d-flex">
            <div class="card mb-3">
                <img class="card-img-top" src="nokia.jpg" alt="Cellulare">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <a href="#" class="btn btn-danger">Modifica</a>
                    <a href="./details.html" class="btn btn-primary">Dettagli</a>
                </div>
            </div>
        </div>`;
        let cardContainer = document.getElementById("cardContainer");
        cardContainer.appendChild(card);
    });
}

function saveInp(name, description, brand, imageUrl, price) {
    console.log(name, description, brand, imageUrl, price);
    fetch(Url, {
        method: 'POST',
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          "name": name,
          "description": description,
          "brand": brand,
          "imageUrl": imageUrl,
          "price": price
        })
    
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
    saveInp();
