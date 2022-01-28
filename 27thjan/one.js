var sizof = prompt(" Enter the num of values to enter");
var arr1 = [];
var i = 0;
for (i = 0; i < sizof; i++) {
    var value = prompt("Enter the number to compare");
    arr1.push(value);
}
var maxnum = arr1[0];
for (i = 0; i < sizof; i++) {
    if (arr1[i] > maxnum) {
        maxnum = arr1[i];
    }
}
alert("The maximum number is " + maxnum);


//Alternative approach but giving only 1 element of array if it is two digit.
// var num =prompt("Enter the numbers to find maximum",[]);

// var max = num[0];

// for (i = 1; i < num.length; i++) {
//     if (num[i] > max){
//         max = num[i];
//     }
// }
// alert(max);
