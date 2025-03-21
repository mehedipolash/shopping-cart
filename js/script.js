const ringButtons = document.querySelectorAll('.ring-button');
const productImageBase = '../images/';

// button border added and main page image change related simple code
for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];

  ringBtn.addEventListener('click', function (event) {
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove('border-red-500');
    }

    event.target.classList.add('border-red-500');

    //(since this is the latest line so red color will activated when clicking)

    const productImage = document.getElementById('product-image');

    //dynamically change product-image
    //easiest way to dynamically changed
    const color = event.target.id.replace('-color', '');
    console.log(color);
    productImage.src = productImageBase + color + '.png';
  });
}

//wrist size related code (main html has onclick for buttons to make code easy)
function selectWristSize(size) {
  //console.log(size)
  const objects = ['M', 'L', 'S', 'XL'];

  for (object of objects) {
    const element = object;

    const button = document.getElementById('size-' + element);

    if (size === element) {
      button.classList.add('border-yellow-600');
    } else {
      button.classList.remove('border-yellow-600');
    }
  }
}

// increment / decrement related code for products
const quantityElements = document.querySelectorAll('.quantity-button');

for (let btn of quantityElements) {
  console.log(btn);
  btn.addEventListener('click', function (event) {
    //console.log(event.target)
    const amount = event.target.innerText === '+' ? 1 : -1;

    const quantityElement = document.getElementById('quantity');
    const currentQuantity = parseInt(quantityElement.innerText); //0
    const newQuantity = Math.max(0, currentQuantity + amount);

    quantityElement.innerText = newQuantity;
  });
}

//add to cart related code
let cartCount = 0;
let cartItems = [];
document.getElementById('add-to-cart').addEventListener('click', function () {
  //console.log('clicked');
  const quantity = parseInt(document.getElementById('quantity').innerText);

  if (quantity > 0) {
    document.getElementById('checkout-container').classList.remove('hidden');
    cartCount = cartCount + quantity;
    document.getElementById('cart-count').innerText = cartCount;

    const selectedColorButton = document.querySelector(
      'button.border-red-500.w-6'
    );

    console.log(selectedColorButton);

    const selectedColor = selectedColorButton.id.split('-')[0];
    

    const selectedSizeButton = document.querySelector('button.border-yellow-600');
    
    const selectedSize = selectedSizeButton.innerText.split(' ')[0];

    const selectedPrice = selectedSizeButton.innerText.split(' ')[1].split('$')[1];

    



    
    

    cartItems.push({
      image: selectedColor + '.png',
      title: 'Classy Modern Smart Watch',
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: quantity * parseInt(selectedPrice),
      
    });
    
    console.log(cartItems);
   


  } else {
    alert('please select a quantity...');
  }
});

document.getElementById('checkout-btn').addEventListener('click', function () {
  
  const cartModal = document.getElementById('cart-modal');

  const cartContainer = document.getElementById('cart-items');

  for (let i = 0; i < cartItems.length; i++){

    const item = cartItems[i];
    const row = document.createElement('tr');
    row.classList.add('border-b')

    row.innerHTML = `
      <td class='px-4 py-2'>
    <div class='flex items-center space-x-2' >

     <img class='h-12 w-12 object-cover rounded-md' src=" ${productImageBase}${item.image}" alt="">
     
     <span class='font-semibold'>${item.title}</span>

    
    
    </div>
      
      </td>

     <td class='px-4 py-2'>${item.color}</td>
      <td class='px-4 py-2'>${item.size}</td>
      <td class='px-4 py-2'>${item.quantity}</td>
      <td class='px-4 py-2'>$${item.price}</td>
     
    
    `;
    cartContainer.appendChild(row)
  }




  cartModal.classList.remove('hidden');
})

document.getElementById('continue-shopping').addEventListener('click', function () {
  document.getElementById('cart-modal').classList.add('hidden');
});

document
  .getElementById('checkout')
  .addEventListener('click', function () {
   alert('proceeding to checkout...')
  });
