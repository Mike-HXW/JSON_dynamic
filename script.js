let foods_container = document.getElementById("items-container");

let foods = [
  {
    "title": "Burger and fries",
    "image": "fastfood.jpeg",
    "price": "$8.79",
    "color": "Yellow"
  },
  {
    "title": "Sushi rolls and bowls",
    "image": "sushi.jpeg",
    "price": "$12.99",
    "color": "LightSalmon"
  },
  {
    "title": "Pizzas",
    "image": "pizza.jpeg",
    "price": "$10.99",
    "color": "DarkOrange"
  },
  {
    "title": "Sandwiches",
    "image": "sandwich.png",
    "price": "$9.49",
    "color": "ForestGreen"
  }
];


for (var i = 0; i < foods.length; i++){
  createElementProper(foods[i]);
}


function createElementProper(incomingJSON)
{
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('item-card');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add("title");
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("img");
  newImage.src = incomingJSON['image'];
  newContentElement.appendChild(newImage);

  let newContentPrice = document.createElement("P");
  newContentPrice.classList.add("P");
  newContentPrice.innerText = incomingJSON['price'];
  newContentElement.appendChild(newContentPrice);

  foods_container.appendChild(newContentElement);

}
