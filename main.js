document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const createPasswordForm = document.querySelector("#createPassword");

    // clicking the forgot password will hide the loginform and remove the createpassword form
    document.querySelector("#linkCreatePassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form__form--hidden");
        createPasswordForm.classList.remove("form__form--hidden");
        
     });

    //  clicking the go back will remove the hidden to login form and will hide the create password form
     document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__form--hidden");
        createPasswordForm.classList.add("form__form--hidden");
        
     });
   
    //  clicking the create account will hide the login form
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form__form--hidden");
        createAccountForm.classList.remove("form__form--hidden");
        
     });
    //  will hide the create account
     document.querySelector("#linktologin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__form--hidden");
        createAccountForm.classList.add("form__form--hidden");
        
     });
});

// for login form validation
function loginvalidate() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value.trim() == "" || password.value.trim() == ""){
            alert("Username and Password required!");
            return false;
    }else {
            true;
    }

}

// for new password validation
function Newvalidate() {
    var newPass = document.getElementById("newPass");
    var newPassCon = document.getElementById("newPassCon");
   

    if (newPass.value.trim() == "" || newPassCon.value.trim() == ""){
            alert("No blank value are allowed!");
            return false;
    }
    else {
        true;
    }
}


// for sign un validation
function Signupvalidate() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var email = document.getElementById("email");
    var confirm = document.getElementById("confirm");

    if (user.value.trim() == "" || email.value.trim() == "" || pass.value.trim() == "" || confirm.value.trim() == ""){
            alert("No blank value are allowed!");
            return false;
    }else {
            true;
    }

}

