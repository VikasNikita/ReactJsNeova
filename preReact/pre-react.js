// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if(year<2015)
// {
//     alert("To early");
// }
// else if (year>2015)
// {
//     alert("To late")
// }
// else{
//     alert("To Exactly");
// }


// let age=prompt("age?",18);
// let msg=(age<3) ? "hii":
// (age<18) ? "Hello":
// (age<100) ? "Greeting" :
// "what an unusual age?"

// alert(msg);
//Logical Operator
// 

//Loops

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
// //   alert( i );
// console.log(i);
//   i++;
// }

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
// //   alert( i );
// console.log(i);
//   i--;
// }

// let i = 0;
// do {
// console.log(i);
// //   alert( i );
//   i++;
// } while(i<3);

// let a=6;
// for (let i = 0; i < a; i++) { // shows 0, then 1, then 2
//     console.log(i);
//   }

// for (let i = 0; i < 10; i++) {

//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;
  
//     console.log(i); // 1, then 3, 5, 7, 9
//   }
// for (let i = 0; i < 10; i++) {

//   if (i > 5) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }


// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }
//..............................................................................

// function showMessage() {
//     alert( 'Hello everyone!' );
//   }

//   showMessage();



// function message()
// {
//     let message="I am learn javascript!"
//     alert(message);
// }

// message();
// // console.log(message);Error! The variable is local to the function


// let Name="Julia";
// function showMessage()
// {
//     let Name="Julie";
//      alert(Name);
// }
// // alert(Name);
// showMessage();
// alert(Name);

// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?"); // Ann: What's up? (**)