const name = document.querySelector('.name')
const email = document.querySelector('.email')
const pwd = document.querySelector('.pwd')
const checkButton = document.querySelector('input[type="checkbox"]')
const signup = document.querySelector('.signup')


const eyeOffIcon = document.querySelector('.eyeOffIcon')
const eyeOnIcon = document.querySelector('.eyeOnIcon')

const nameError = document.querySelector('.nameError')
const emailError = document.querySelector('.emailError')
const pwdError = document.querySelector('.pwdError')
const checkError = document.querySelector('.checkError')


const box = document.querySelector('.box')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')


var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//name validation
name.addEventListener('keyup', ()=> {
  if(name.value){
    name.style.borderColor = "green"
    nameError.innerHTML =""
  }
})
//email validation
email.addEventListener('keyup', ()=> {
  if(!email.value){
    email.style.borderColor = "red"
    emailError.innerHTML ="Email field can't be blank"
  }
  else if(!pattern.test(email.value)){
    emailError.innerHTML ="Email Id is not valid"
    email.style.borderColor = "red"
  }
  else{
    email.style.borderColor = "green"
    emailError.innerHTML =""
  }
})

//password validation

pwd.addEventListener('keyup', ()=> {
    if(!pwd.value){
      pwd.style.borderColor = "red"
      pwdError.innerHTML ="Password field can't be blank"
    }
    else if(pwd.value.length==4){
      pwd.style.borderColor = "red"
      pwdError.innerHTML ="WEAK password"
    }
    else if(pwd.value.length==6){
      pwd.style.borderColor = "red"
      pwdError.innerHTML ="MEDIUM PASSWORD"
    }
    else if(pwd.value.length>=8){
      pwd.style.borderColor = "green"
      pwdError.innerHTML = "STRONG PASSWORD"
     
    }
  })
  

//EyeIcon functionality
eyeOffIcon.addEventListener('click', () =>{
  if (pwd.type === "password") {
    pwd.type = "text";
    eyeOffIcon.style.visibility="hidden"
    eyeOnIcon.style.visibility="visible"
  }
})
eyeOnIcon.addEventListener('click', () =>{
  if (pwd.type === "text") {
    pwd.type = "password";
    eyeOffIcon.style.visibility="visible"
    eyeOnIcon.style.visibility="hidden"
  }
})



signup.addEventListener('click', (event) =>{
  event.preventDefault();
  if(!name.value ){
    name.style.borderColor = "red"
    nameError.innerHTML ="Name field can't be blank"
  }
  if(!email.value){
    email.style.borderColor = "red"
    emailError.innerHTML ="Email field can't be blank"
  }
  if(!pwd.value){
    pwd.style.borderColor = "red"
    pwdError.innerHTML ="Password field can't be blank"
  }
  if(!checkButton.checked){
      checkError.innerHTML ="Please check this box"
  }
  if(pattern.test(email.value) && pwd.value.length>=4 && pwd.value.length<12 && checkButton.checked && name.value){
    alert("success")
    window.location = "success.html";
    name.value=""
    email.value=""
    pwd.value=""
    checkButton.checked=false
  }

})