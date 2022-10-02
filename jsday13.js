let a=document.createElement("h1");
let b=document.createTextNode("Hello");
let c=a.appendChild(b);
// console.log(a);
// console.log(b);
console.log(c);
let target=document.getElementById("xyz");
target.appendChild(c);
// document.body.appendChild(c);
