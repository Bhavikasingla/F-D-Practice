console.log("1.");
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
//console.log(student);
for (x in student) {
    console.log(x);
}
//console.log(student.name, student.modelno, student.number);

console.log("2.");
var student1 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student1);
delete student1.rollno;
console.log(student1);

console.log("3.");
var student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
console.log(Object.keys(student2)); //prints length of an object

console.log("4.");
var library = [{
        author: "J.K. Rowling",
        title: "Harry Potter and the goblet of fire",
        readingStatus: true,
    },
    {
        author: "Charlotte Bronte",
        title: "Jane Eyre",
        readingStatus: true,
    },
    {
        author: "Chetan Bhagat",
        title: "400 days",
        readingStatus: false,
    },
];

for (var i = 0; i < library.length; i++) {
    var book = " " + library[i].title + " by " + library[i].author;
    if (library[i].readingStatus) {
        console.log("You've already read" + book);
    } else {
        console.log("You still need to read" + book);
    }
}

console.log("5.");
var cylinder = {
    radius: 5,
    height: 10,
};

var volume = 3.14 * cylinder.radius * cylinder.height;
console.log(volume);

console.log("7.");
var str = "dog";
var subset = [];
for (var m = 0; m < str.length; m++) {
    for (var n = m + 1; n < str.length + 1; n++) {
        subset.push(str.slice(m, n));
        console.log(subset);
    }
}
//mera code
console.log("8.");
var count1 =0;
var count2 =0;
var count3=0;
var i=prompt();
var k=prompt();
var k=prompt();
for(i=0; i<=24; i++)
{
    for(j=0; j<=60; j++)
    {
        for(k=0; k<=60; k++)
        {
           count1++;
           if(count1>=60)
           {
            //console.log(k);
            //console.log(i+":"+j+":"+k);
            j++;
            k==0;
            console.log(i+":"+j+":"+k);
            //k-=60;
            break;
           }
        }
        count2++;
        if(count2>=60)
        {
            //console.log(j);
            i++;
            j==0;
           // j-=60;
            break;
        }
    }
    //console.log(i);
    count3++;
    if(count3>=24)
        {
            //console.log(j);
            i==0;
           // j-=60;
            break;
        }

}

//same ques diff code
console.log("81.");
var clock = {
  sec: 0,
  min: 0,
  hr: 0,
};

// var s = prompt("Enter start time");
// var f = prompt("Enter finish time");

for (var i = 0; i < 86400; i++) {
  clock.sec++;
  if (clock.sec > 60) {
    clock.min++;
    clock.sec = 0;
  }
  if (clock.min > 60) {
    clock.hr++;
    clock.min = 0;
    // break;
  }
  if (clock.hr >= 24) {
    clock.hr = 0;
    // break;
  }
  console.log(clock.hr + ":" + clock.min + ":" + clock.sec);
}

console.log("9.");

function area(radius) {
    var area = 3.14 * radius * radius;
    console.log(area);
}

function perimeter(radius) {
    var perimeter = 2 * 3.14 * radius;
    console.log(perimeter);
}
area(10);
perimeter(10);

//strings
console.log("1.");
is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
        return true;
    else
        return false;
};
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


console.log("2.");
is_Blank = function(input) {
    if (input.length === 0)
        return true;
    else
        return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

console.log("3.");
string_to_array = function(str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));

//arrow function
/*xyz=(a,b){
    sum= a+b;
    console.log(arguments);
}
xyz(5,6);*/
//the above fn won't work

//normal function
function xyz(a,b){
    sum= a+b;
    console.log(arguments);
}
xyz(5,6);