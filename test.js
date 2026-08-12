const response = await fetch("https://dummyjson.com/products/79");
const product = await response.json();

console.log(Object.keys(product));
