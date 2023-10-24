const loadStoreAPI = () =>{
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => displayProducts(data))
  
}

//get data
const getProduct = (product) =>{
  return  (`
  <div class="product">
    <img src="${product.image}" >
    <h2>${product.title}</h2>
    <h2>${product.category}</h2>
    <h2>$${product.price}</h2>
</div>`);
}

//Display data
const displayProducts = (products) =>{
  const displayHTML = products.map(product => getProduct(product));
  const container = document.getElementById("products");
  container.innerHTML = displayHTML.join(" ");

}
loadStoreAPI()