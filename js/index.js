let formButton = document.getElementById("formButton")

const correctEmail = "citmern2308@mail.com"
const correctPassword = "Password01"


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


let emailError = ''
let passwordError = ''


formButton.addEventListener("click", function(e){

    e.preventDefault()

    let email = document.getElementById("email")
    let password = document.getElementById("password")

    if(email.value == ""){
        emailError = 'please enter email'
        document.getElementById("email_error").innerText = emailError;
        email.style.outlineColor = "red";
        email.focus()
    }
    else if (emailRegex.test(email.value) == false){
        emailError = 'please enter valid email'
        document.getElementById("email_error").innerText = emailError;
        email.style.outlineColor = "red";
        email.focus()
    }
    else if(email.value != correctEmail){
        emailError = 'please enter correct email'
        document.getElementById("email_error").innerText = emailError;
        email.style.outlineColor = "red";
        email.focus()
    }
    else if(password.value == ""){
        document.getElementById("email_error").innerText = "";

        passwordError = 'Enter the Password'
        document.getElementById("password_error").innerText = passwordError
        password.style.outlineColor = "red"
        password.focus()
    }
    else if(passwordRegex.test(password.value) == false){
        document.getElementById("email_error").innerText = "";

        passwordError = 'Please Enter valid password'
        document.getElementById("password_error").innerText = passwordError
        password.style.outlineColor = "red"
        password.focus()
    }
    else if(password.value != correctPassword){
        document.getElementById("email_error").innerText = "";

        passwordError = 'Please Enter correct password'
        document.getElementById("password_error").innerText = passwordError
        password.style.outlineColor = "red"
        password.focus()
    } 
    else{
        window.location.href = "assets/home.html"
    }
})

let passShowHide = document.getElementById("passShowHide")

passShowHide.addEventListener("click", function(){

    let passwordField = document.getElementById('password')
    
    if(passwordField.type == "password"){
        passwordField.type = "text"
        passShowHide.classList.remove("fa-eye")
        passShowHide.classList.add("fa-eye-slash")
    }
    else{
        passwordField.type = "password"
        passShowHide.classList.add("fa-eye")
        passShowHide.classList.remove("fa-eye-slash")
    }


})