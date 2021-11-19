
const CheckboxFunction = (e) =>{
    e.preventDefault();
    var checkboxButton = document.getElementById("inputPass");
  
    if(checkboxButton.type === "password" ){
        checkboxButton.type = "text";
        checkboxButton.innerHTML = "Show";
    }else{
        checkboxButton.type = "password";
        checkboxButton.innerHTML = "Hide";
    }
  }
 export default CheckboxFunction;