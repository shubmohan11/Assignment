

function checkPassword() {
    var password = document.getElementById("password");
    var new_password = password.value;
    var confirm_password = document.getElementById("Confirm_Password");
    var new_confirm_password = confirm_password.value;
    var matching = document.getElementById("pwdcheck");

  

    if (new_password == new_confirm_password) {
        matching.innerText = "Password  Matched";
    } else {
        matching.innerText = "Password InCorrect ";
    }

}

