
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm_password");
const passwordInfo = document.getElementById("password_info");

var neutralStyle = password.style.border;
var invalidStyle = "1px solid orangered";

confirmPassword.addEventListener("blur", verify_password);


function verify_password() {
    if (password.value != confirmPassword.value) {
        password.value = "";
        confirmPassword.value = "";

        password.style.border = invalidStyle;
        confirmPassword.style.border = invalidStyle;
        passwordInfo.textContent = "password do not match";
    }else{
        passwordInfo.textContent = "";
        password.style.border = neutralStyle;
        confirmPassword.style.border = neutralStyle;
    }    
}