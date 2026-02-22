let container = document.getElementById("container");

let sneakers = [
    {
        img: "nike.jpg",
        brand: "Nike",
        model: "Air Max Plus",
        size: 40
    },{
        img: "adidas.jpg",
        brand: "Adidas",
        model: "Superstar",
        size: 50
    },{
        img: "puma.jpg",
        brand: "Puma",
        model: "Puma",
        size: 56
    }
]

let rows = Number(window.prompt("Type the number of rows that you want to see"));

if (!rows || rows<1){
    rows = 2;
}

if (rows > 10){
    rows = 2;
}

//Calculamos la dimension 
let total = rows * sneakers.length;

for (let i=0; i<total; i++){
    //We create the sneakers by theis index
    let sneaker = sneakers[i % sneakers.length];
    //We create the container of each sneaker
    let card = document.createElement("div");
    card.className = "card";
    //Img of each sneaker
    let img = document.createElement("img");
    img.src = sneaker.img;
    //We create the container of the info of each sneaker
    let info = document.createElement("div");
    info.className = "info";
    //We create the info of each sneaker
    let brand = document.createElement("div");
    brand.innerText = sneaker.brand;
    brand.className = "brand";
    let model = document.createElement("div");
    model.innerText = "Model: " + sneaker.model;
    let size = document.createElement("div");
    size.innerText = sneaker.size;

    //We add the info of each sneaker to its container
    info.appendChild(brand);
    info.appendChild(model);
    info.appendChild(size);

    //We add img and info to the card (the container of the sneaker)
    card.appendChild(img);
    card.appendChild(info);

    //We add the card to the main container
    container.appendChild(card);
}