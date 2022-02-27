
function anagram(a, b) {
    var split_string1 = a.split("").sort().join("");
    var split_string2 = b.split("").sort().join("");

    var len1 = split_string1.length;
    var len2 = split_string2.length;
    // var count=0;
    if (len1 != len2) {
return 
    }
    //    for(i=0;i<=len1;i++){
        if(split_string1 == split_string2) {
            return true
        } else {
            return false
        }
    
}

var string1 = prompt("Enter first string");
var string2 = prompt("Enter second string");

var value = anagram(string1, string2);

document.write(value);













