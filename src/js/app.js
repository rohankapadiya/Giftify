/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Rohan Sureshbhai Kapadiya
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

//Created Button with names and id
//Created h2 heading as category by click event on buttons
var cardsDiv = document.getElementById("cardsDiv");

for (let i = 0; i < categories.length; i++) {
  var button = document.createElement("button");
  var menu = document.getElementById("menu");
  button.innerHTML = categories[i].name;
  button.id = categories[i].id; 
  button.name = categories[i].name;
  button.addEventListener('click',function(){    
    document.getElementById("selected-category").innerHTML=categories[i].name;
    whatisname(categories[i].id);
  });
  menu.appendChild(button);
}


//Display all the products
for (let i = 0; i < products.length; i++) {
  var cardDiv = createProductCard(products[i]);
  cardsDiv.appendChild(cardDiv);
}

function createProductCard(product) {
  console.log(product.title);
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("cards");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("img");
  card.appendChild(productImage);
  
  const productTitle = document.createElement("h4");
  productTitle.innerText = product.title;
  productTitle.classList.add("productHeading");
  card.appendChild(productTitle);

  const productDesc = document.createElement("p");
  productDesc.innerText = product.description;
  productDesc.classList.add("productDesc");
  card.appendChild(productDesc);

  const productPrice = document.createElement("span");
  productPrice.innerText = `$${product.price} CAD`;
  productPrice.classList.add("productPrice");
  card.appendChild(productPrice);


  // Return the card’s <div> element to the caller
  return card;
}



// Selected category
function whatisname(catname){
  cardsDiv.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
   
    products[i].categories.forEach(function (e) {
      if(e === catname && products[i].discontinued === false){
        const card = document.createElement("div");
        // Add the .card class to the <div>
        card.classList.add("cards");
      
        // Create a product image, use the .card-image class
        const productImage = document.createElement("img");
        productImage.src = products[i].imageUrl;
        productImage.classList.add("img");
        card.appendChild(productImage);
        
        const productTitle = document.createElement("h4");
        productTitle.innerText = products[i].title;
        productTitle.classList.add("productHeading");
        card.appendChild(productTitle);
      
        const productDesc = document.createElement("p");
        productDesc.innerText = products[i].description;
        productDesc.classList.add("productDesc");
        card.appendChild(productDesc);
      
        const productPrice = document.createElement("span");
        productPrice.innerText = `$${products[i].price} CAD`;
        productPrice.classList.add("productPrice");
        card.appendChild(productPrice);
        cardsDiv.appendChild(card);
      }

    });
  
  }  
  
}