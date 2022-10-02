const read=1;
const write=2;
const execute=4;
var myacess=0;
myacess=myacess|read|write;
console.log("value of myaccess is: " + myacess);

var msg=(myacess&read)?"Yes":"No";
console.log(msg);

console.log("Hi, this is my first js prog...")

// next prog
var x=Math.round(Math.random()*5);
switch(x){
	case 1:
	console.log("Watch");
	break;

	case 2:
	console.log("Chocolate");
	break;

	case 3:
	console.log("Aeroplane Model");
	break;

	case 4:
	console.log("Phone");
	break;

    default:
    console.log("Better luck next time!!");
}

// for-in loop

var person={
	fname: "xyz",
	lname: "abc",
    age: 20
} 

var a=0;
var x=" ";
for(let a in person)
{
	x+=person[a]+" ";
	console.log("inside loop steps: "+x);

}
console.log("outside loop: "+x);

//next prog

var num=prompt();
if(num>0)
{
	console.log("number is positive");
}
else
{
	console.log("number is negative");
}

//next prog

var no=prompt();
if(no%2==0)
{
	console.log("number is even");
}
else
{
	console.log("number is odd");
}

//next prog

var s1=prompt();
var s2=prompt();
var s3=prompt();
if(s1==s2&&s2==s3&&s3==s1)
{
	console.log("Equilateral triangle");
}
else if(s1==s2 || s2==s3 || s1==s3)
{
	console.log("Isoceles triangle");
}
else
{
	console.log("Scalene triangle");
}

//next prog

var leap=prompt();
if(leap%4==0)
{
	if(leap%100==0)
	{
		if(leap%400==0)
		{
			console.log("Leap Year");
		}
		else
		{
			console.log("Not a Leap Year");
		}
	}
	else
	{
		console.log("Leap Year");
	}
}
else
{
	console.log("Not a Leap Year");
}


//next prog

var n=prompt();
if(n&1==0)
{
	console.log("odd");
}
else
{
	console.log("even");
}

//string palindrome

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
    return newString;
}
reverseString('hello');

//or 2nd solution
function palindrome(){
	var newStr=" ";
	var st="abcdc";
	for(var i = str.length - 1; i >= 0; i--)
	{
		newStr+=str[i];
	}
	if(str=newStr)
	{
		console.log("palindrome");
	}
	else
	{
		console.log("not palindrome");
	}
}

//next prog
// var st=prompt("enter string");
// varLetter=prompt("")