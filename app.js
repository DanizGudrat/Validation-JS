let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordTwo = document.querySelector('#passwordTwo');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   checkInputs(); 
});
function checkInputs() {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let passwordTwoValue = passwordTwo.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, "Username Cannot Be Empty");
    } else{
        setSuccessFor(username);
    }
    if(emailValue === '') {
        setErrorFor(email, "Email Cannot Be Empty");
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email Is Not Valid");
    } else{
        setSuccessFor(email);
    }
    if(passwordValue === '') {
        setErrorFor(password, "Password Cannot Be Empty");
    } else{
        setSuccessFor(password);
    }
    if(passwordTwoValue === '') {
        setErrorFor(passwordTwo, "Check Password Cannot Be Empty");
    } else if (passwordValue !== passwordTwoValue) {
        setErrorFor(passwordTwo, "Password Does Not Match");
    } else{
        setSuccessFor(passwordTwo);
    }
}
function setErrorFor(input, message) {
    let formControl = input.parentElement; 
    let span = formControl.querySelector('span');
    span.innerText = message;
    formControl.className = 'form-control error'
}
function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success'
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
