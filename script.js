const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//input error message
function showError(input,message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  return String(input)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

/*
//Event Listeners
form.addEventListener('submit',function(e){
  e.preventDefault();
  
  if(username.value == "") {
    showError(username, 'Username is required');
  } 
  else {
    showSuccess(username);
  }

  if(email.value == "") {
    showError(email, 'Email is required');
  }
  else if(!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  }
  else {
    showSuccess(email);
  }

  if(password.value == "") {
    showError(password, 'Password is required');
  } 
  else {
    showSuccess(password);
  }

  if(password2.value == "") {
    showError(password2, 'Password is required');
  } 
  else {
    showSuccess(password2);
  }
})
*/

//check require function
function checkRequire(inputArr) {
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//check input length
function checkLength(input,min,max) {
  if(input.value.length<min) {
    showError(input,`${getFieldName(input)} must be atleast ${min} characters`);

  } else if(input.value.length>max) {
    showError(input,`${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//check passwords match
function checkPasswordMatch(input1,input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}


//Event Listeners
form.addEventListener('submit',function(e){
  e.preventDefault();
  
  checkRequire([username,email,password,password2]);
  checkLength(username,3,15);
  checkLength(password,6,25);
  checkPasswordMatch(password,password2);
});