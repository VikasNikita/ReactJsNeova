// //Normal Functions

// console.log(addNumbers);
// let result=addNumbers(10,20);
// console.log(result);

// function addNumbers(number1,number2)
// {
//     return number1+number2;
// }
// //functionExpression
// const addNumbers2= function(number1,number2)
// {
//     return number1+number2;
// };
// console.log(addNumbers2(10,20));

// //Arrow Function
// const addNumbersArrow=(number1,number2)=>
// {
//     return number1+number2;
// }
// console.log(addNumbersArrow(10,30));
// console.log(addNumbersArrow);

// //this
// const myObject={
//     name:"nikita",
//     getName:function()
//     {
//         return this.name;
//     },

// };
// const myNewObject={

//     name:"ranu",
// };
// const getNewName=myObject.getName.bind(myNewObject);

// console.log(myObject.getName());
// console.log(getNewName());

// function Person (name,age)
// {
//     if(!new.target)
//     {
//         return new Person(name,age);
//     }
    
//     this.name=name;
//     this.age=age;
//     return {name}; //return {name:name};
// }

// const personObj=new Person("nikita",25);
// console.log(personObj)

//Destructuring
const myArr1 = [1, 2, 3, 4];
// const a = myArr[0];
// const b = myArr[1];
// const c = myArr[2];
// const d = myArr[3];
const [a, c, b, d] = myArr1; //sequence is very important
console.log(a, b, c, d);
const myObject = {
  name: "Ankur",
  age: 29,
};
// const name = myObject.name;
// const age = myObject.age;
const { age, name } = myObject; //sequence is not important
console.log(name, age);


