const obj1 = new Object(true);
const obj2 = new Object(1n);
const obj3 = new Object();

const car = {
    type : "Fiat",
    model : "500",
    color : "White"
};

const person1 = {};
person1.firstName = "Jhon";
person1.middleName = "Doe";
person1.age = 50;

const person2 = new Object({
  firstName: "Luca",
  lastName: "Gorayeb",
  age: 20,
  eyeColor: "brown",
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
});

console.log(person2.fullName());

// Create an Array
const myArray = Object.values(person1);
console.log(myArray);

// Stringify the Array
let text = myArray.toString();
console.log(text);

// Stringify Object
let text2 = JSON.stringify(person1);
console.log(text2);

const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);

function Person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
};

Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
};

const p = new Person("Luca", "Gorayeb", 20, "Brown");

console.log(p.name())