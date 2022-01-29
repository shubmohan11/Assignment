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
            case "A":    
            count = count + 1;
            break;
        case "e":
            case "E":
            count = count + 1;
            break;
        case "i":
            case "I":
            count = count + 1;
            break;
        case "o":
            case "O":
            count = count + 1;
            break;
        case "u":
            case "U":
            count = count + 1;
            break;
       
        default:
            break;
    }

}
console.log("No of vowels", +count);
