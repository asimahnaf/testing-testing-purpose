// console.log(34);
// console.log(" hello java screap");
// var a = 10;
// var b = 30;
// var c = a+b;
// console.log(c);
// document.getElementById("demo").innerHTML = 5 + 6;
// document.write(55+20);
// window.alert(5 + 9);
// window.print();
// use var to change the value
// var a = 20;
// console.log(a);
// var a = 30;
// console.log(a);


// //use let u can't reuse that like a var
// let x = 10;
// // let a = 20;

// if(1){
//     let x = 10;
//     console.log(x);
// }
  

// {
//     let x = 20;
//     console.log(x);
//     let x = 30;
//     console.log(x);
// }



// const array = [ "volvo", "audi" ];
// //you can change element
// array[0] = "mitshupshy";
// console.log(array);


// let a = "jon";
// let b = "rohim";
// let c = a + " " + b;
// console.log(c);


// let text = "what a very ";
// text += "nice day!";
// console.log(text);


// let a = 20;
// let b = "20";
// let c = 20 + "20";
// console.log(c);



//typeof opetator
// let x = 10;
// let y = "  ";
// let z = 4;
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
 


//this is the object data type;
// let parson = {
//     name : "john", 
//     age : 30, 
//     hight : 1.7, 
//     color : "block"
// };
// console.log(parson);



// let he = " he is " + (4 + 4) +  "   ";
// console.log(he);



//function 
// function myfunction(bad){
//                 console.log(bad);
// }
// //function call
// myfunction("hugy");


// let carname = "volvo";
// function myfunction()
// {
//             let carname = " bmw";
//             console.log(carname);
// }
// myfunction();
// console.log(carname);



//this part has object
//object example
// let car = {
//             name : "volvo",
//             modle : 500,
//             color : "white",
//             speed: "400kn/h",
//             start : function () {
//                 console.log("car has driving");
//             },
//             drive : function () {
//                 console.log("car is driving");
//             },

//     };
// //they are  same..
// console.log(car.speed);
// console.log(car ["speed"]);



//object another technic
// const parson = {
//     firstname : " RENTU",
//     lastname : "MAHMUD",
//     hight : "5.3 inc",
//     wide : "100kg",
//     fullname : function ( ) {
//             this.firstname + "    " +this.lastname;
//     },
// };
// console.log(parson.fullname);


//object examp
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   document.getElementById("demo1").innerHTML = person.fullName();

// you can show
// document.write(person.firstName);
// alert(person.firstName);


// const shape = {
//     radious : 10,
//     diameter(){
//         return this.radious * 2;
//     }
// }

// console.log(shape.diameter());

// let tv = {
//     display : block,
//     color : red,
//     display :  function(){
//           console.log("hello world");
//     },
// }

// let text = "hello";
// console.log(text.length);

//there is the string methode ex:
//omit the string  
// let str = "banana, apple, tomato"
// let restr = str.slice(5,  7);
// console.log(restr); 
// let text = "hello  world";
// console.log(text.length);


// let h = "hello world";
// console.log(h.replace("world", "hello"));



// let e = "7";
// console.log(e.padStart(2, 7));

// let name = 'johan';
// let a = `${name}, is a good girl`;
// let firstName = "John";
// let lastName = "Doe";
// let a = 20;
// let b = 30;
// let text = `Welcome ${firstName}, ${lastName} this is ${a + b}`;
// console.log(text);


//number system
// let number = 32;
// console.log(number.toString(2));

// let n = NaN;
// console.log(typeof n);

// let str = 'b' + 'a' + + 'a'+ 'a';
// console.log(str.toUpperCase());


// const five = "5";
// const two  = 2;
// const text = `${five - two}`;
// console.log(text);

// let a = 130;
// a  = a.toString()
// console.log(typeof a);

// let a = 20;
// console.log(a);

// let a = (20 + 30).toString();
// console.log(a);


// let num = (new Date());
// console.log(num);

// let num = Number.MAX_VALUE;
// console.log(num);


// let car = `hello ebrahim`;
// document.getElementById("car").innerHTML = car;

// let myArray = [Date(), `my function`, 20];
// console.log(myArray);


// const fruits = ['apple', 'banana', 'pinaple', 'orange', 'stobarry'];
// function myFunction(value){

// console.log(value);
// }
// fruits.forEach(myFunction);


// const car = [`call`, `trol`, `flog`, 20, 50, 33];
// console.log(car);

// const carN = {
//     color : 'red',
//     start: function(){

//         console.log('hello');
//     }
// };
// console.log(carN);


// let car  = [`jeej`, 345, 54.55];
// console.log(typeof car);

// let myArray = [
//     "color",
//     "name",
//     "funclub",
//     "what ever"
// ];

// document.getElementById("demo").innerHTML = myArray;
// console.log(myArray.length);

// Car = `hello`;
// console.log(Car.length);

// const fruits = ['apple', 'bannana', 'pinaple'];

// let a = fruits.pop();
// console.log(fruits);

// const fruits = ['mango', 'pinaple'];
// fruits.push("stoberry");
// console.log(fruits);


// fruits.pop();
// console.log(fruits);

//this element is important splice()

// const fruits = ["apple", "pinaple", "banana", "akfrouts"];
// fruits.join("*");
// console.log(fruits);
// document.getElementById("demo").innerHTML = fruits.join("  #  ");



// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("my").innerHTML = points;  

// function myFunction() {
//   points.sort(function(a, b){return a - b});
//   document.getElementById("my").innerHTML = points;

// }

// let myArray = [10, 30, 40, 50,  60, 70, 80, 90, 100];

// myArray.forEach(myFunction);

// function myFunction(value, index, array) {
     
//           console.log(value);
//           console.log(index);
//           console.log(array);
//           console.log('----------------------------------');
// }

//the map methode
// const myArray = [20, 50, 43, 50];
// const myArray1 = myArray.map(myFunction);
// function myFunction(value, index, array){
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   console.log('>>...............>>>')
//   return value * 2;
// }

// console.log(myArray1);
// console.log(myArray);


//array fiilter
// const array = [20, 10, 15, 11, 12, 14, 40, 50, 60];
// const  over18 = array.filter(myFunction);
// function myFunction(value, index, array) {

//       console.log(value);
//       console.log(index);
//       console.log(array);
//       return value > 18;
// }

// console.log(over18);

// reduce methode
// const array = [20, 10, 15, 11, 12, 14, 40, 50, 60];
// const  sum = array.reduce(myFunction);
// function myFunction(total, value , index, array) {

//       console.log(value);
//       console.log(index);
//       console.log(array);
//       return total + value;
// }

// console.log(sum);

// console.log(Array.from("abcd"));

//array const***


// math max Number;
// console.log(Math.max(19, 20, 30, 50));



//problem randome number

// function getrendom(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getrendom(1, 8));
 
// let x = 3.30;
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.round(x));

// console.log(Math.sign(-50));
// console.log(Math.sign(0));
// console.log(Math.sign(30));

// console.log(Math.sqrt(64));

// console.log(Math.random());

// console.log(Math.floor(Math.random() * 10));


//proper randome function

// function getrendome(min, max){

//     return Math.floor(Math.random() * (max - min) + min);
// }
// function getrendome1(min, max){

//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// console.log(getrendome(1, 6));  
// console.log(getrendome1(1, 4));  


// const fruits = ["banana", "apple", "mango"];
// console.log(fruits.sort());

//check voule;
// const vowele = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function constVoid(sentance){
//         let count = 0;
//         const letters = Array.from(sentance);

//         letters.forEach(function(value){
//             if(vowele.includes(value){
//                 count++;
//             })

// }

// console.log(constVoid("hello world"));

// console.log(Math.floor(Math.random() * 10) + 1);
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
// console.log(getRndInteger(1, 10));


// if(10 >= 10){
//   console.log(10);
// } else {
//   console.log("nothing else");
// }

// let year = 2020;

// if(true){
//   console.log(year);
//   let year = 2021;
// }
// let accessories = [ "mouse", "keybord", "monitor", "cadle"];
// console.log(accessories.pop("cadle"));
// console.log(accessories);

// if(10 > 10) {
//   console.log("y");


// } else{
//   console.log("e");

// }

// let My_Array = [10, 60, 40, 50, 44];
// console.log(My_Array.pop(10));



