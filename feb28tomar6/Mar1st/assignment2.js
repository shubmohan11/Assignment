function addition() {
    var number1 = document.getElementById("num1");
    var num1_value = number1.value;
    num1_value=parseInt(num1_value);
    var number2 = document.getElementById("num2");
    var num2_value = number2.value;
    num2_value=parseInt(num2_value);
    var num3= num1_value+ num2_value;
    var result=document.getElementById("result");
    result.innerText=num3;

}









