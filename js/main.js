const elForm = document.getElementById("form");
const elName = document.getElementById("fname");
const elMail = document.getElementById("fmail");
const elNumber = document.getElementById("fnumber");
const elPassword = document.getElementById("fpassword");
const elPasswords = document.getElementById("fpasswords");
const elBtn = document.getElementById("fbtn");
const elError = document.getElementById("error");
const elErro = document.getElementById("erro");
const elErr = document.getElementById("err");
const elEr = document.getElementById("er");
const elEror = document.getElementById("eror");

elName.addEventListener("keyup", () =>{
  let nameMessage = document.getElementById("name-text");
  let nameBorder = document.getElementById("fname");
  try {
    if(elName.value == "") {
      nameBorder.style.border = "2px solid red"; 
      elError.style.display = "block";
      throw "Please enter your username.";
    } 
    else if(elName.value.match(/[0-9]/)) {
      nameBorder.style.border = "2px solid red";
      elError.style.display = "block";
      throw "Please fill in a valid username.";
    }
    else if(elName.value.match(/[!@#4%^&*]/)) {
      nameBorder.style.border = "2px solid red";
      elError.style.display = "block";
      throw "Please fill in a valid username.";
    }
    else {
      nameBorder.style.border = "2px solid #949494";
      elError.style.display = "none";
      throw "Succesfully ✔"
    }
    nameMessage.textContent = "";

  } catch (e) {
    nameMessage.textContent = e;
  }
});

elMail.addEventListener("keyup", () =>{
  let emailMessage = document.getElementById("email-text");
  let nameBorder = document.getElementById("fname");
  try {
    if(elMail.value == "") {
      nameBorder.style.border = "2px solid red"; 
      elErro.style.display = "block";
      throw "Please enter your email address.";
    } 
    else if(elMail.value.includes("@")) {
      nameBorder.style.border = "2px solid #949494";
      elErro.style.display = "none";
      throw "Succesfully ✔";
    }
    else {
      nameBorder.style.border = "2px solid red";
      elErro.style.display = "block";
      throw "Please fill in a valid email address.";
    }
    emailMessage.textContent = "";

  } catch (e) {
    emailMessage.textContent = e;
  }
});

elNumber.addEventListener("keyup", () =>{
  let num = elNumber.value.trim();
  let a = +num.slice(1, 13);
  let numberMessage = document.getElementById("number-text");
  let nameBorder = document.getElementById("fname");
  try {
    if(num.length == 0) {
      nameBorder.style.border = "2px solid red"; 
      elErr.style.display = "block";
      throw "Please enter your phone number.";
    } 
    else if(num.length != 13) {
      nameBorder.style.border = "2px solid red";
      elErr.style.display = "block";
      throw "Please fill in a valid phone number.";
    }
    else if(num[0] == "+" && +a) {
      nameBorder.style.border = "2px solid #949494";
      elErr.style.display = "none";
      throw "Succesfully ✔";
    } else {
      nameBorder.style.border = "2px solid red";
      elErr.style.display = "block";
      throw "Please fill in a valid phone number.";
    }
    numberMessage.textContent = "";

  } catch (e) {
    numberMessage.textContent = e;
  }
});

elPassword.addEventListener("keyup", ()=>{
  let passwordMessage = document.getElementById("password-text");
  let nameBorder = document.getElementById("fname");

  try {
    if(elPassword.value == ""){
      nameBorder.style.border = "2px solid red"; 
      elEr.style.display = "block";
      throw "Please enter your password.";
    }
    else if(elPassword.value.match(/[A-Z]/) && elPassword.value.length <= 8){
      nameBorder.style.border = "2px solid #949494";
      elEr.style.display = "none";
      throw "Succesfully ✔";
    }
    else {
      nameBorder.style.border = "2px solid red";
      elEr.style.display = "block";
      throw "Please fill in a valid phone number.";
    }
    passwordMessage.textContent = "";
  } catch (e) {
    passwordMessage.textContent = e;
    console.log(passwordMessage);
  }
});
elPasswords.addEventListener("keyup", ()=>{
  let passwordsMessage = document.getElementById("passwords-text");
  let nameBorder = document.getElementById("fname");

  try {
    if(elPasswords.value == ""){
      nameBorder.style.border = "2px solid red"; 
      elEror.style.display = "block";
      throw "Please enter your password.";
    }
    else if(elPasswords.value === elPassword.value){
      nameBorder.style.border = "2px solid #949494";
      elEror.style.display = "none";
      throw "Succesfully ✔";
    }
    else {
      nameBorder.style.border = "2px solid red";
      elEror.style.display = "block";
      throw "Please fill in a valid phone number.";
    }
    passwordsMessage.textContent = "";
  } catch (e) {
    passwordsMessage.textContent = e;
  }
});

elBtn.addEventListener("click", () =>{
  alert("Congratulation");
})