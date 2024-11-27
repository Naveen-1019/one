const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');

form.addEventListener('submit' , e =>{
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errrorDisplay = inputControl.querySelector('.error')

    errrorDisplay.innerText = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errrorDisplay = inputControl.querySelector('.error')

    errrorDisplay.innerText = '';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
}

const isvalidEmail = email =>{
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs =() => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim();
    const numberValue =number.value.trim();




if (usernameValue ===''){
    setError(username,'username is required'); 
}else {
    setSuccess(username);
}

if(emailValue === ''){
    setError(email, 'Email is required');
}else if (!isvalidEmail(emailValue)){
    setError(email,'Provide a valid email address');

}else{
    setSuccess(email)
}

if(passwordValue ===''){
    setError(password, 'password is required');

}else if(passwordValue.length < 8){
    setError(password, 'password must be at least 8 character.')
}else{
    setSuccess(password);
}

if(numberValue ===''){
    setError(number, 'Enter the number');

}else if (numberValue.length < 10){
    setError(number, 'Enter the  10 digits number');
}else if (numberValue.length > 10){
    setError(number, 'Enter the  10 digits number');
}else{
    setSuccess(number);
}

}