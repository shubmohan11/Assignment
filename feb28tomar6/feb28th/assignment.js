
function fizzBuzz() {
    var num = prompt("ENter a  number");
    for (i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write("FizzBuzz" + "<br>");
        } else if (i % 5 == 0) {
            document.write("buzz" + "<br>");
        } else if (i % 3 == 0) {
            document.write("Fizz" + "<br>");
        } else {
            document.write(i + "<br>");


        }
    }

}

