// Question 1: Take input n from user and print all numbers in reverse order.
// Ex. -> n = 7, Output -> 7, 6, 5, 4, 3, 2, 1, 0
//  -> n = 10, Output 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

var input = prompt("Enter the number to find the reverse order");

for (i = input; i >= 0; i--) {
    console.log(i)
}
