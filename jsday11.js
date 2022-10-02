//conosle.log("Enter the names of the students: ");
const a=[];
var i;
for(i=0; i<5; i++)
{
	a[i]=prompt("Enter attendance: ");

}
for(i=0; i<5; i++)
{
	console.log(a[i]);
	document.write(a[i]);
	document.write(" ");
	
}
document.write("<br>");
a.sort();
document.write(a);
document.write("<br>");
a.reverse();
document.write(a);
// or use this
/*var arr=[];
var j;
for(j=0; j<5; j++)
{
	var x=prompt("Name");
	arr.push(x);
}
document.write(a[j] );*/
//multi arr
document.write("<br>");
console.log("Multi-dimensional array: ");
var arr=[
["Harry",20,true],
["Sejal",10,false],
["Arsh",16,true]
]

// a=[
// document.write("<table>")
// ["Harry",20,true],
// ["Sejal",10,false],
// ["Arsh",16,true]
// ]

// for (var i=0; i<3; i++)
// {
// 	for(j=0; j<3; j++)
// 	{
// 		document.write(arr[i][j]+" ");
// 	}
// 	document.write("<br>");
// }

//ma'am prog 
document.write("<table border='1'>")
document.write("<br>")
for(var j=0;j<arr.length; j++)
{
	// document.write("<br>")
	document.write("<tr>")
	for(var k=0; k<3; k++)
	{
		document.write("<td>")
		document.write(arr[j][k]);
		document.write("</td>")
	}
	document.write("</tr>")
}
document.write("</table>")