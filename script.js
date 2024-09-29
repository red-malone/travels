
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const travelDate = document.getElementById('travelDate').value;
  
    if (!name || !email || !travelDate) {
      alert('Please fill out all required fields.');
      return false;
    }
  
    const confirmSubmit = confirm('Do you want to submit the form?');
    if (!confirmSubmit) return false;
  
    alert('Form submitted successfully!');
    return true;
  }
  