function calculateFinalPrice(inputPrice: number) {
  const finalPrice = inputPrice + inputPrice * 0.19;
  const outputEl = document.getElementById('final-price');
  if (outputEl) {
    outputEl.textContent = 'Final Price: ' + finalPrice + ' €';
  } else {
    // Optionally handle the missing element case
    console.warn('Output element with id "final-price" not found.');
  }
}

const formEl = document.querySelector('form'); // Declare only once

if (formEl) {
  formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget as HTMLFormElement);
    const inputPrice = fd.get('price');
    if (inputPrice !== null) {
      calculateFinalPrice(+inputPrice); // Use the correct function name
    } else {
      alert('Please enter a price.');
    }
  });
}
