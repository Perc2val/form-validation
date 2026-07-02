import { emailValidate } from "./validating";
import { email } from "./querySelectors";


function listener(){
    email.addEventListener("input", emailValidate)
}


export {listener}