import { emailError } from "./querySelectors";
import { email } from "./querySelectors";


function showError(){
    if (email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address."
    } else if (email.validity.typeMismatch){
        emailError.textContent = "Entered value needs to be an email address"
    } else if (email.validity.tooShort){
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`
    }
}

export {showError}