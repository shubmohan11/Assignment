function palindrome(pal){
    var length=split_user_inp.length;
    for(i=0;i<length/2;i++){
        if(split_user_inp[i]!==split_user_inp[length-1-i]){
        
            return false
        }else{
           
            return true
        }
    }

}


var user_inp=prompt("Enter a String");
var split_user_inp=user_inp.split("");

var value= palindrome(split_user_inp)
document.write(value);


