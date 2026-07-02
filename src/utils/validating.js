import { email } from "./querySelectors";
import { emailError } from "./querySelectors";
import { showError } from "./error";

function emailValidate(){
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error"
    } else {
        showError()
    }
}

export {emailValidate}