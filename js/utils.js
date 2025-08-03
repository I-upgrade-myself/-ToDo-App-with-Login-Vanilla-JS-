// js/utils.js

 function areFieldsFilled(...fields) {
    return fields.every(field => field.trim() !== '');
}


 function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function isValidPassword(password) {
  const passwordRegex = /^[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password.trim());
}

function renderUI() {
  const appElement = document.getElementById("app");
  if(appElement) {
    appElement.textContent = "";
  } else {
    console.warn('Element from ID not found ');
    
  }
}
