/* 
    //  1.Js Console API

     console.log("Hello V2");
     alert("Welcome V2");

     document.write("This text is only for V2"); 
    // above is use to write on our html web page without using the paragarph tag

     console.warn('a worning for you');
     console.error('Sb khtm 😒 nikal phle fursat M');
     console.assert()


 */





/*
// Js variables
// what are variables? - conatiner to store values

// "var" is use to define a variable
var num1 = 21;
console.log(num1);

*/




// Data Types in JS
var num1 = 21; // Number
var Str1 = "This is a string bro/bri"; //string
var Obj1 = {
    v2: 100,
    VV:99.99
}

var num2 ; // Ab yeh variable ki value undefined hai chae m var num1 = undefined ; assign kru ya na kru .  Samze balak

// Booleans
var a = true;
var b = false;


// null
var c = null; // Null means kooch nhi

/*
At a high level there are two types of data types in javascript
1. Primitive : undefined, null, number, string, boolean, symbol
2. Reference : Arrays and Objects
*/




/*
var arr = [1,3,4,5,6,7,88,8,]; // Array


// Arithmetic operator in JS
var d = 100;
var e = 10;
console.log('valuse of a+b =', a+b);
console.log('valuse of a-b =', a-b);
console.log('valuse of a*b =', a*b);
console.log('valuse of a/b =', a/b);

// Assignment operator
c = b;
// += , -= , *= , /= , == , >= ,  <= , < , >


// logical Operators

// and operator
console.log(true&&true);
console.log(true&&false);
console.log(false&&false);

// Or operator
console.log(true||true);
console.log(true||false);
console.log(false||false);

//  Logical not
console.log(!true);
console.log(!false);
*/



/*

// 😶 Function in javascript
function avg(x,y){
    return (x+y)/2 ;
}
c1 = avg(20,2)
console.log(c1)

*/

/*

// if else Ladder
age = 21;
if(age>25){
    console.log("Youa Avastha");
}
else if(age>18){
    console.log("kishor Avastha");
}
else if(age>12){
    console.log("ghr jao aur khelo");
}
else{
    console.log("niklo phle fursat m")
}
console.log("bs bhi khtm statement");

*/



/*
1.Forloop
// now lets get start Loops
var Arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(Arr);
// for(var i=0;i<Arr.lenght;i++){
//     console.log(Arr[i]);
// }

// or we can use 
Arr.forEach(function(element){
    console.log(element);
})


// let has a Block level scope means, its scope is only upto curly brackets
let j=0;

// constant kr dega yeh value ko sza V2
const P2=20;

2.whileLoop

let j=0;
while(j<arr.lenght){
    console.log(arr[j]);
    j++;
}

3.DowhileLoop
do{
    console.log(arr[j]);
    j++;
}while(j<arr.lenght)

*/

/*
//  break and continue

var Arr = [1,2,3,4,5,6,7,8,9,10];
console.log(Arr);
for(var i=0;i<Arr.lenght;i++){
    if(i==2){
        // break;
        // continue;
    }
    console.log(Arr[i]);
}
*/


/*
// Array methods
let myarr = ["V2","V",21,null,true]; 
console.log(myarr.length);
myarr.pop();// last wala element delete
myarr.push("Hello");// last m ik element add kra ja raha hai.
myarr.shift(); // first element ko chod kr 2nd se pring kr dega
myarr.unshift("VV");//starting m ik VV ko add kr degea
myarr.tostring(); //yeh complete array ko ik string bna dege
myarr.sort();//number wali array ko sort kr dega . - phle yeh values ko string m convert kr dega and then dictonary ki according sort krta hai.
*/

/*
// String methods in JS 
let mystr= "Hello V2, whats going on ";
console.log(mystr.length);
console.log(mystr.indexOf("going"));
console.log(mystr.lastIndexOf("going"));
console.log(mystr.slice(1,4));

d = mystr.replace("V2","v2")
d = d.replace("Hello", "hey"); //replace sirf first wali occurance ko string mae se replace kr raha hai
*/

/*
let myDate = new Date();
console.log(myDate);
// is mae kooch function bhi hai like
console.log(myDate.getDate);
console.log(myDate.getDay);
console.log(myDate.getFullYear);
console.log(myDate.getTime);
console.log(myDate.getMinutes);
*/

/*
// lets get our party start with DOM (Document Object Model) 
let elem = document.getElementById('click');
let elemclass = document.getElementsByClassName("conatiner");

elemclass[0].style.background = "orange";
//  in case koi css ki class add krne hai toh bs us class ka nam ex- "bg-primary" so to use that class 
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.remove("bg-primary"); // use to remove class mantioned in ()

// now let us see innerhtml and innertext
console.log(elem.innerHTML);
console.log(elem.innerText);
 tn = document.getElementsByTagName('div');
console.log(tn);
// add tags in page using JS
createElemen = document.createElement('p');
createElemen.innerText = "This is a paragraph";
t[0].appendChild(createElemen);
// t[0].replaceChild(2(jo avi hai), 1(ji se replace krna hai));
// t[0].removeChild(element); ---> removes child 

// selecting using query
sel = document.querySelector('.container'); // first container class degea
console.log(sel);
sel = document.querySelectorAll('.container'); // All container class degea


*/


/*
// Events in JavaScript

// 1. Onclock
function clicked(){
    console.log('Button clicked');
}
// 2. Onload

window.onload = function(){
    console.log('Window/Page refreshed');
}

// now let us see event listener 
firstconatiner.addEventListener('click', function(){
    console.log("clicked on container");
})

// one more function 
firstconatiner.addEventListener('mouseover', function(){
    console.log("mouse on container");
})

firstconatiner.addEventListener('mouseup ', function(){
    console.log("mouse up when clicked on container");
})

firstconatiner.addEventListener('mousedown', function(){
    console.log("mouse down when clicked on container");
})
*/


/*
// Arrow Function
 function summ(a,b){
    return a+b;
}
// ab upr wale function ko ik algg trike s likha ja skta hai let us see 
summ = (a,b)=>{
    return a+b;
}
// dono same he work kr rahe hai bs yeh upr wala is liye use kra jata taki function banaenee k need na pde agr us chiz ka scope bs us area tk limited hai

*/

// use of setInterval
// use of setTimeout
// learn about local Storage


// Now also check about Json
obj = {"name"="V2", length:1}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)




