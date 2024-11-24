 // Open popup
 function openPopup() {
    document.getElementById('popupForm').classList.add('show');
    document.getElementById('overlay').style.display = 'block';
  }

  // Close popup
  function closePopup() {
    document.getElementById('popupForm').classList.remove('show');
    document.getElementById('overlay').style.display = 'none';
  }