import CheckboxFunction from "../Checkbox/Checkbox";
import "./PasswordField.css";
import ValidatorFunction from '../services/Validator/Validator';

// import Validator from "../services/Validator";

// function myFunction(e) {
//     e.preventDefault();
//     var myElement = document.getElementById("inputPass");

//     if (myElement.type == 'password') {
//         myElement.type = "text";
//         myElement.innerHTML = "Show";
//     } else {
//         myElement.type = "password";
//         myElement.innerHTML = "Hide";
//     }
// }
const PasswordField = () => {

  
    return (

        <form className="passwordForm">
            <input type="password" id="inputPass" onClick={ValidatorFunction}/>
            
            <button onClick={CheckboxFunction} >
               
                <input type="checkbox" value="checkbox" ></input>
                <span toggle="password" id="togglePassword" >Show</span>
            </button>
        </form>
    )
}

export default PasswordField;

