var number1=prompt("Enter 1st number");
var number2=prompt("Enter 2nd number");
var number3=prompt("Enter 3rd number");

var numb1=parseInt(number1);
var numb2=parseInt(number2);
var numb3=parseInt(number3);

if(numb1<numb2&&numb1<numb3){
    alert(numb1+" is minimum");
}else if(num2<numb1&&numb2<numb3){
    alert(numb2+"  is minimum" );
}else{
    alert(numb3+"is minimum");
}
