const ringButtons = document.querySelectorAll('.ring-button');


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
    productImage.src = "../images/" + color + ".png";
  });
}


//wrist size related code (main html has onclick for buttons to make code easy)
function selectWristSize(size) {
  
  //console.log(size)
  const objects = ['M', 'L', 'S', 'XL']

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
  console.log(btn)
  btn.addEventListener('click', function (event) {
   //console.log(event.target)
   const amount = event.target.innerText === '+' ? 1 : -1;


   const quantityElement = document.getElementById('quantity'); 
   const currentQuantity = parseInt(quantityElement.innerText); //0
   const newQuantity = Math.max(0, currentQuantity + amount);

   
   quantityElement.innerText = newQuantity;
 });
}
