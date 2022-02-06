
var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
        {
            "name": "Name 1",
            "marks": 15
        },
        {
            "name": "Name 2",
            "marks": 17
        },
        {
            "name": "Name 3",
            "marks": 19
        },
        {
            "name": "Name 4",
            "marks": 21
        },
        {
            "name": "Name 5",
            "marks": 0
        },
        {
            "name": "Name 6",
            "marks": 27
        },
    ],
};
userinp = prompt("Enter passing marks");
userinp = parseInt(userinp)
len = obj.students.length
var pass_stu = [];
for (i = 0; i < len; i++) {
    new1 = obj.students[i];
    if (new1["marks"] >= userinp) {
        pass_stu.push(new1["name"]);
    }
}
console.log(pass_stu)
