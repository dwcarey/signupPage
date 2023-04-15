const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(){
    document.getElementById('signupForm').requestSubmit();
});


const signupForm = document.getElementById('signupForm');
signupForm.noValidate=true;

signupForm.addEventListener('submit', validateForm)


function validateForm(e){
    const form=e.target;
    const errorSpans = document.querySelectorAll('.error');

    for (let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].textContent = '';}

    if (form.checkValidity()) {
        document.getElementById('signupForm').requestSubmit();
    }
    else {
        e.preventDefault();
        Array.from(form.elements).forEach(i=>{
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
}
