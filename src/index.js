// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').textContent; // get the price value
  const quantity = product.querySelector('.quantity input').value; // get the quantity value
  const subtotal = price * quantity; // calculate the subtotal

  // Update the DOM element for the subtotal value
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal;
console.log('Calculating subtotal, yey!');
return subtotal;
}



function calculateAll() {
  const allProducts = document.querySelectorAll('#cart .product');
  let total = 0;

  allProducts.forEach(product => {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  });

  const totalElement = document.querySelector('#total-value span');

  totalElement.textContent = total;

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
