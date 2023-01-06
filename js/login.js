const email = document.querySelector('.email')
const pwd = document.querySelector('.pwd')
const login = document.querySelector('.login')


const eyeOffIcon = document.querySelector('.eyeOffIcon')
const eyeOnIcon = document.querySelector('.eyeOnIcon')

const emailError = document.querySelector('.emailError')
const pwdError = document.querySelector('.pwdError')


var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


email.addEventListener('keyup', ()=> {
 
  if(!email.value){
    email.style.borderColor = "red"
    emailError.innerHTML ="Email field can't be blank"
  }
 
  else{
    email.style.borderColor = "green"
    emailError.innerHTML =""
  }
})






login.addEventListener('click', (event) =>{
  event.preventDefault();
  console.log(email.value, pwd.value)
  if(!pwd.value ){
    pwd.style.borderColor = "red"
    pwdError.innerHTML ="Password field can't be blank"
    alert("Password required")
   
  }
  if(!email.value){
    email.style.borderColor = "red"
    alert("Username required")
  }
  if(pwd.value.length>=4 && pwd.value.length<12){
    alert("success")
    
    email.value="admin"
    pwd.value="ADMIN@123"
  }

  else{
    alert("Invalid username or password")
  }

})