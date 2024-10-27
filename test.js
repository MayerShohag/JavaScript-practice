// class Hello{
//     constructor(name){
//         this.name = name;
//         // this.r = r;
//     }
//     h(){
//         return `my name is ${this.name}`
//     }
// }
// const obj = new Hello("Shohag", 34);
// const obj2 = new Hello("Shohag", 34);
// console.log(obj.h());
// console.log(obj2);

// let a = new Object();
// console.log(a instanceof Object);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// function Person(name, age) {
//     if (!new.target) {
//         throw Error("Please Use 'new Keyword' ")
//     }
//     this.name = name;
//     this.age = age;
// }

// let result = new Person("Shohag", 20);
// console.log(result);

// Array Merge
// const arr = [1, 2];
// const copiedArr = [1, 2, 3, 4, 5];
// let temp = [...arr, ...copiedArr]

// Object Copy
// const obj = { name: "Shohag", age: 20 };
// const coppiedObj = {...obj};
// console.log(coppiedObj.age);

// Object Merge
// const obj = { name: "Shohag", age: 20 };
// const obj2 = { city: "Pabna", Zip: 6600 };

// let temp = {...obj, ...obj2};
// console.log(temp);

class Hello {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class hi extends Hello {
  constructor(name, age, grade, dept) {
    super(name, age);
    this.grade = grade;
    this.dept = dept;
  }
}

class hey extends hi {
  constructor(name, age, grade, dept, city) {
    super(name, age, grade, dept, city);
    this.city = city;
  }
}

const result = new hey("Shohag", 20, "12th", "Computer", "Pabna");
console.log(result);
