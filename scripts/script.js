// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if(!localStorage.getItem("productData")){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json()).then(data => localStorage.setItem("productData",JSON.stringify(data)));
  }

  let products = JSON.parse(localStorage.getItem("productData"));
  let prodContainer = document.getElementById("product-list");
  for(let i = 0; i < products.length; i++){
    let temp = new ProductItem(products[i]);

    prodContainer.appendChild(temp);
  }

  if(localStorage.getItem('cart-count') !== null){
    document.getElementById('cart-count').textContent = localStorage.getItem('cart-count');
  }
});