const signupForm = document.getElementById('signupForm');
signupForm.noValidate=true;

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(e){
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    const errorSpans = document.querySelectorAll('.error');

    for (let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].textContent = '';}

    if ((signupForm.checkValidity())&&(password.value.length > 5) && (password.value === confirmPassword.value)) {
        signupForm.requestSubmit();
    }
    else if ((password.value.length <= 5) || (password.value !== confirmPassword.value)){
        Array.from(signupForm.elements).forEach(i=>{
            if (i.checkValidity()) {
                //field is valid
                i.parentElement.classList.remove('invalid');
                i.parentElement.classList.add('valid');
            }
            else {
                //field is invalid
                i.parentElement.classList.add('invalid');
                const errorMessageSpan = i.nextElementSibling;
                const errorMessage = document.createElement('p');
                errorMessage.textContent = i.validationMessage;
                errorMessageSpan.appendChild(errorMessage);
            }
        })        
        confirmPassword.parentElement.classList.add('invalid');
        e.preventDefault();

        const errorMessageSpan = confirmPassword.nextElementSibling;
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Passwords must match and be at least 6 characters long';
        errorMessageSpan.appendChild(errorMessage);
    }
    else {

        e.preventDefault();
        Array.from(signupForm.elements).forEach(i=>{
            if (i.checkValidity()) {
                //field is valid
                i.parentElement.classList.remove('invalid');
                i.parentElement.classList.add('valid');
            }
            else {
                //field is invalid
                i.parentElement.classList.add('invalid');
                const errorMessageSpan = i.nextElementSibling;
                const errorMessage = document.createElement('p');
                errorMessage.textContent = i.validationMessage;
                errorMessageSpan.appendChild(errorMessage);
            }
        })
    }


});
