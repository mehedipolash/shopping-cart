const ringButtons = document.querySelectorAll('.ring-button');

for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  // console.log(ringButtons[i]);

  ringBtn.addEventListener('click', function (event) {
    //color add korar age sobgulake check kore jodi dekhi purple ase tahole cpolor remove kore dibo ebong gray add kore dibo

    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove('border-red-500');
      ringButtons[j].classList.add('border-gray-500');
    }

    //color add kortesi
    event.target.classList.add('border-red-500');
    event.target.classList.remove('border-gray-500');

    const productImage = document.getElementById('product-image');
    // productImage.src = '../images/teal.png';
  });
}
