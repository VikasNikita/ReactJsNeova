// "use strict";
// let message;
// message='hello';
// console.log(message);

// alert(message);

const myBirthday = '18.04.1982';

// myBirthday = '01.01.2001'; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


let admin;
let name;
name="john";
admin=name;
alert(admin);//john

//Data Types
let message="hello World";
message=123;
console.log(message);//123


let n=1234;
 n=123.67;
console.log(n);//123.67

 alert(1/0);//Infinity

alert("not a number"/2);//NAN

let str="I lerarn ";

let str1="javascript";

console.log(`Hello , ${str} ${str1}`);

// alert(`Hello,$(str) ,$(str1)`);

// let age=null;
// console.log(age);


let num1=123;
console.log(typeof(num1));

//Interaction
//alert
alert("It shows a message and waits for the user to press “OK”");

//prompt
let age=prompt("How are you old" ,100);
alert(`You are ${age} year old`);

//confirm
let isBoss=confirm("Are you boss");
alert(isBoss);



//Type of Conversion
//boolean to string

let value=true;
alert(value);

value=String(value);
alert(typeof(value));


//convert  str to num
let str2="123";
console.log(typeof(str));

let number=Number(str);
console.log(typeof(number));

//Operator
alert( 4 ** (1/2) ); 
alert( 4 ** (1/3) ); 


let str6="wish you good luck and";
let str7="success";
console.log(str6+str7);






