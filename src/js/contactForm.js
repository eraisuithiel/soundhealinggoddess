const contactForm = (event) => {
  event.preventDefault();
  // Query Selectors for fields

  const name = document.querySelector('#contact-name');
  const email = document.querySelector('#contact-email');
  const message = document.querySelector('#contact-message');

  // Query Selectors for error message fields

  const nameErrors = document.querySelector('#nameMsg');
  const emailErrors = document.querySelector('#emailMsg');
  const msgErrors = document.querySelector('#messageMsg');

  // Messages Object - Change error message text here

  const msg = {
    stdMsg: 'Field is blank',
    email: "E-Mail field is blank.",
    emailNoAt: "E-Mail must include an @ symbol",
    submitMsg: "Submitted successfully!",
    spChars: "Numbers (0-9) and Letters (A-Z) only"
  }

  // Check Field Function - Checks field for length and format.

  const checkField = (field, fieldErrors) => {
    const errorMsg = (msgNode, text) => {
      
      let node = document.createElement('div');
      if (!msgNode.innerHTML) {
        node.className = "error";
        msgNode.appendChild(node);
        node.innerText = text;
        }
      }

      const removeErrors = (msgNode) => {
        msgNode.removeChild(msgNode.firstChild);
      }

      let value = field.value;
      let errors = fieldErrors.children.length;

      if(errors >= 1) {
        if (value) {
          removeErrors(fieldErrors);
        }
      }
      if(!value) {
        if (field.type === 'text' || field.type === 'textarea') {
          errorMsg(fieldErrors, msg.stdMsg);
          return false;
        }
        if (!field.value && field.type === 'email') {
          errorMsg(fieldErrors, msg.email);
          return false;
      }
      if (field.type === 'email') {
        }
        if (!field.value.includes('@')){
          errorMsg(fieldErrors, msg.emailNoAt);
          return false;
        }
      }

      // Checks for special Characters in Name and Message Fields 

      if (field.type === 'text' || field.type === 'textarea') {
        const specialChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (specialChars.test(value)) {
          errorMsg(fieldErrors, msg.spChars);
          return false;
        }
      }
      return true;
    }

  // Checks all fields for errors

  const checkForm = () => {
    checkField(name, nameErrors);
    checkField(email, emailErrors);
    checkField(message, msgErrors);
    if (
      checkField(name, nameErrors) &&
      checkField(email, emailErrors) &&
      checkField(message, msgErrors)
     ) { 
      return true;
    }
    else { 
     return false;
    }
  }

  // Removes Submit Button and displays success message

  const submitForm = () => {
    const subBtnContainer = document.querySelector('#submit-btn-container');
    const subBtn = document.querySelector('#submit-btn');
    let submitMsg = document.createElement('div');
    subBtnContainer.appendChild(submitMsg);
    submitMsg.className = 'submit-msg';
    submitMsg.innerText = msg.submitMsg;
    subBtnContainer.removeChild(subBtn);
  }

  // If all fields are correct, submit message
  
  if (checkForm()) {
    submitForm();
    return true;
  } else {
    console.log('there are errors');
  }
}

export default contactForm;