const ringButtons = document.querySelectorAll('.ring-button');


// button border added and main page image change related simple code
for (let i = 0; i < ringButtons.length; i++) {
  
  const ringBtn = ringButtons[i];
  

  ringBtn.addEventListener('click', function (event) {
    
    const color = event.target.id.replace('-color','')
    console.log(color);

     for (let j = 0; j < ringButtons.length; j++) {
       ringButtons[j].classList.remove('border-red-500');
       
     }

 
    event.target.classList.add('border-red-500');

    //(since this is the latest line so red color will activated when clicking)


    const productImage = document.getElementById('product-image');
    
    

    //dynamically add color
    productImage.src = "../images/" + color + ".png";
  });
}


//wrist size related code (main html has onclick for buttons to make code easy)
function selectWristSize(size) {
  
  //console.log(size)
  const sizes = ['M', 'L', 'S', 'XL']

  for (object of sizes) {
    const element = object;

    const button = document.getElementById('size-' + element);

    if (size === element) {
      button.classList.add('border-purple-600');
    }
    else {
      button.classList.remove('border-purple-600');
    }
    
  }
}