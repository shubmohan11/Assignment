// Question 1:  User will give a string. Return the count of vowels.
// Ex. -> aayush -> Output: 3
// -> AAYuSH -> Output: 3



var inp = prompt("Enter a String");
var a = inp.split("");
count = 0;
for (i = 0; i <= a.length; i++) {

    var character = a[i];

    switch (character) {
        case "a":
            count = count + 1;
            break;
        case "e":
            count = count + 1;
            break;
        case "e":
            count = count + 1;
            break;
        case "i":
            count = count + 1;
            break;
        case "o":
            count = count + 1;
            break;
        case "u":
            count = count + 1;
            break;
        default:
            break;
    }

}
console.log("No of vowels", +count);
