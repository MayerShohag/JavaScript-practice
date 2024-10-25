
// two array are concat()
// const concat = [1, 3, 6, 8];
// const concat2 = [4, 8, 8, 9]
// let result = concat.concat(concat2)
// console.log(result);



// at() method
// const atMethod = [1, 2, 3, 5, 6, 9];
// console.log(atMethod.at(-3));



// const age = [30, 50, 10, 5, 20, 18];
// let result = age.filter((el) => {
//     if (el < 0) {
//         return el;
//     }
//     console.log(el);
// })



// const person = [
//     { id: 101, age: 20, name: "Shohag", city: "pabna" },
//     { id: 102, age: 22, name: "Shadhon", city: "faridpur" },
//     { id: 103, age: 20, name: "Sajib", city: "jhenaidah" },
//     { id: 104, age: 21, name: "Samad", city: "Kushtia" },
//     { id: 105, age: 19, name: "Nazmul", city: "pabna" },
// ]


// let result = person.filter((el) => {
//     if (el.city == "pabna") return true;
//     else return false;
// });
// console.log(result);




// const converter = {
//     megaByte(megaByte = 0) {
//          return (megaByte * 1024 + " KB");
//     },
//     gigaByte(gigaByte = 0){
//         return (gigaByte * 1024 + " MB")
//     },
//     teraByte(teraByte = 0){
//         return (teraByte * 1048576 + " MB")
//     },
//     petaByte(petaByte = 0){
//         return (petaByte * 1073741824 + " MB")
//     },

// }


// let result = converter.teraByte(1);

// console.log(result);






// const container = [1, 531, 7, 2, 9, 10, 32, 12, 67, 4]


// function Max() {    
//     let maxNum = container[0];
//     for (let i = 1; i < container.length; i++) {
//         if (maxNum < container[i]) {
//             maxNum = container[i];
//         }
//     }
//     console.log(maxNum);
// }

// Max(container);


// const container = [-1222, 531, 7, 2, 9, 10, 32, 12, 67, 4];
// let min = container[0];
// container.forEach((el) => {
//     if (min > el) {
//         min = el;
//     }
// });
// console.log(min);



// const container = [-1222, 531, 7, 2, 9, 10, 32, 12, 67, 4];
// function Min() {
//     let minNum = container[0];
//     for (let i = 1; i < container.length; i++) {
//         if (minNum > container[i]) {
//             minNum = container[i];
//         }
//     }
//     console.log(minNum);
// }
// Min(container);


// const container = [31, 7, 2, 9, 10, 32, 12, 67, 4];
// let sum = 0;
// let result = container.forEach((el) => {
//     sum = sum + el;
// });
// console.log(sum);


// const container = [31, 7, 2, 9, 10, 32, 12, 67, 4];
// let sum = 0;
// for (let i = 0; i < container.length; i++) {
//     sum = sum + container[i];
// }
// console.log(sum);






// const arr = [1, 4, 2, 5, 7, 9];
// let el;
// function find(accept) {
//     for (el = 0; el < arr.length; el++) {
//         if (arr[el] === accept) {
//             return arr[el];
//         }
//     }    
// }

// let result = find();
// console.log(result);




// const person = [
//     { id: 101, age: 20, name: "Shohag", city: "pabna" },
//     { id: 102, age: 22, name: "Shadhon", city: "faridpur" },
//     { id: 103, age: 20, name: "Sajib", city: "jhenaidah" },
//     { id: 104, age: 21, name: "Samad", city: "kushtia" },
//     { id: 105, age: 19, name: "Nazmul", city: "pabna" },
// ]
// function BigDataFind(accept = "Not Found") {
//     for (let el = 0; el < person.length; el++) {
//         if (person[el].age == accept || person[el].city == accept || person[el].name == accept || person[el].id == accept) {
//             console.log(person[el]);
//         }

//     }
// }
// BigDataFind();




// const person = [
//     { id: 101, age: 20, name: "Shohag", city: "pabna" },
//     { id: 102, age: 22, name: "Shadhon", city: "faridpur" },
//     { id: 103, age: 20, name: "Sajib", city: "jhenaidah" },
//     { id: 104, age: 21, name: "Samad", city: "kushtia" },
//     { id: 105, age: 19, name: "Nazmul", city: "pabna" },
// ]
// function showErr() { console.log("No data entered"); }

// function BigDataFind(accept = showErr()) {
//     let count = 0;
//     for (let el = 0; el < person.length; el++) {
//         if (person[el].age == accept || person[el].city == accept || person[el].name == accept || person[el].id == accept) {
//             count++;
//             console.log(person[el]);
//         }
//     }
//     if (count === 0) console.log("Not found ");
// }
// BigDataFind();




// const myArr = [
//     [1, 2, 4],
//     [3, 5, [2, 5, [1, 5]]], 

// ];


// let result = myArr.flat(3)
// console.log(result);




// Destructuring
// const arr = [2, 5, true, "Shohag"];
// const [a, b, c, d] = arr;
// console.log();

// const array = [10, "JavaScript", true];

// const [num, progLan, bool] = array;

// console.log(num);
// console.log(progLan);
// console.log(bool);




// const object = {
//     name: "Shohag Kumar",
//     age: 20,
//     dob: {
//         day: 14,
//         month: 1,
//         year: 2004,
//     },
//     dept: "CST",

// }

// const { name: shohag, age: boyos, dob: {day:din, month:mash, year:bosor}, dept: bivag } = object;
// console.log(shohag, boyos, din, bosor, bivag);




// const object = {
//     num: 10,
//     progLan: {
//         OOP:{
//            py: "Python",
//            js: "JavaScript",
//            ts: "TypeScript",
//         },
//         c_variant:{
//             c: "C Programming",
//             cpp: "C++",
//         }
//     },
//     bool: true,
// };

// const {progLan:{OOP:{py}}} = object;
// console.log(py);



// const {num:newNum, progLan:newProgLan, bool:newBool} = object;

// console.log(newNum);
// console.log(newProgLan);
// console.log(newBool);






// function a(b, c, ...r) {
//     console.log(b);
//     console.log(c);
//     console.log(r instanceof Array);


// }
// a(1, 2, 4, 6, 3, 9);






/*
#### Pseudo code ####
Problem 1: Solution
1. make a function called calcualteStrikeRate(),
2. function takes two params - runs, balls
3. batsman runs multify by the batsman faces the balls 
4. runs and balls multiply by 100 to calculate strike rate.
5. the function should round the strike rate to two decimal point -> toFixed().
6. check if the params are not in Number display Strike Rate Invalid.

function calcualteStrikeRate(runs, balls) {
    if (isNaN(runs) || isNaN(balls)) {
        return "Strike Rate Invalid";
    } else {
        let float = (runs / balls) * 100;
        return float.toFixed(2);
    }
}

let result = calcualteStrikeRate();
console.log(result);
*/



/* Problem 2: Solution
### Pseudo Code ###
1. make a function called countPair(),
2. take argument value as an string and number
3. then argument value split for single string in array element with str.split() method
4. split return array, then forEach method will applied for check even value return.
5. set counter value = 0
6. if argument have a number value or the number in even counter increase 1,
7. return counter

function countPair(str = ""){
    let counter = 0;
    let storStr = str.split("");
    storStr.forEach(el => {
        if(el % 2 == 0){
            counter++;
        }
    });
    return counter;
}
let result = countPair();
console.log(result);
*/




/* Problem 3: 
Write a function called `reverseString` that takes a string as 
input and returns the reverse of that string. Your function should 
not use the built-in `reverse()` method.
Example Input/Output:
- reverseString('hello') should return 'olleh'
- reverseString('racecar') should return 'racecar'
- reverseString('12345') should return '54321'

### Pseudo Code ###
1. make 

*/





// function reverseString(str){
    
// }

// reverseString("hello")


