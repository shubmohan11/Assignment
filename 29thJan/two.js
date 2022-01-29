// Question 2:  User enters a number, check and tell whether that number is a prime number or not. (If user enters, abcd. You handle that situation).

var userinp = prompt("enter the number");
if (isNaN(userinp)) {
    alert("Please enter a valid number")
} else {
    // userinp=parseInt(userinp);
    if (userinp == 1) {
        console.log("number is prime");
    } else {
        for (i = 2; i <= userinp; i++) {
            if (userinp % i == 0) {
                console.log("Number is not prime")
                break;
            } else {
                console.log("Number is prime")
                break;
            }
        }

    }
}
