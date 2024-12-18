//console.log("Hi, Node.js!");
//An array is a collection of items stored at contiguous memory locations. It is used to store multiple values in a single variable.

//Characteristics:
//Arrays are indexed(zero based in javascript)\
//They can store multiple type of data that are typically homogeneous for logical organization.\
//Efficiently manage and manipulate data set
//it is dynamic

//Accessing and Modifying Array Elements 
//Access: Use the index of an element (starting at 0).
//Modify: Assign a new value to a specific index.

let fruits = [1, 'banana', 'cherry'];

console.log(fruits[0]); // Output: apple

//Common array methods 
//Adding elements:
//push(): add to the end
//unshift(): adds to the beginning
//Removing elements:
//pop(): Removes the last element 
//shift(): removes the first element

let fruits1 = [1, 'banana', 'cherry'];
//fruits1.push('mango');
//fruits1.pop();
//fruits1.unshift('kiwi');
console.log(fruits1.length);

let english_clubs = ['City', 'Arsenal', 'Chelsea'];
let spanish_clubs = ['Barcelona', 'Madrid', 'Girona'];
ucl= english_clubs.concat(spanish_clubs);
console.log(ucl);

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);

console.log(doubled);

let arr = [1, 5, 2, 8];

arr.push(10); // arr is now [1, 5, 2, 8, 10]

let last = arr.pop(); // last is 10, arr is now [1, 5, 2, 8]

arr.splice(1, 2, 3, 4); // arr is now [1, 3, 4, 8]

let newArr = arr.slice(1); // newArr is [3, 4, 8]

console.log(arr.includes(5)); //false

console.log(arr.indexOf(4)); //2

let numbers2 = [1, 2, 3, 4, 5];

let sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

let fruits3 = ['apple', 'banana', 'cherry'];

//for (let i = 0; i < fruits3.length; i++) {

  //  console.log(fruits[i]);

//}

ucl.forEach(fruity => console.log(fruity));

let num = [10, 20, 30, 40];

let summ = 0;

for (let i = 0; i < numbers.length; i++) {

    summ += numbers[i];

}

console.log('Sum:', sum); // Output: Sum: 100
//lists allows for more flexible operation.

//Objects are unordered collections of key-value pairs. Equivalent to dictionary on python
let user = {
  namee: 'Faith',
  age: 19,
  isMale: 'true',
  address: {
    city: "london",
    zip: '001',
  }
};

console.log(user.namee);
console.log(user.address);
console.log(user.address.zip);
//console.log(user['age']);
//console.log(typeof(user));

let num2 = [1, [2, 3]];
//console.log(num2[1]); 

let user2 = new Object();
user2.name = 'Kehinde';
user2.age = '20';
//console.log(user2);
delete user2.age;
//console.log(user2);

let car = {
  brand: 'toyota',
  model: 'corolla',
  year: 2022,
}

car.color = 'red'
//console.log(car.color);

for (let key in car){
  //console.log(`${key}: ${car[key]}`);
  //console.log(car[key]);
}

let person = {

  firstName: 'Charlie',

  lastName: 'Brown',

  age: 35,

  getFullName: function() {

      return this.firstName + '' + this.lastName;

  },

  getAgeNextYear: function(){

      return this.age + 1;

  }

};

console.log(person.getFullName()); // Output: Charlie Brown

console.log(person.getAgeNextYear()); // Output: 36

//Stacks
//Definition: LIFO (Last-In-First-Out).
//Operations:
//push(): Add to the top.
//pop(): Remove the top.
//pick(): allows to see the top element
//Queues
//Definition: FIFO (First-In-First-Out).
//Operations:
//enqueue(): Add to the end.
//dequeue(): Remove from the front.
//front(): also allows you to view
//Linked Lists
//Elements are nodes, each pointing to the next. More complex to implement but efficient for insertions/deletions in the middle. We won’t cover the full implementation here due to space constraints, but it involves creating Node objects and managing pointers.

//while loop needed for binary search 


const people = [{name: 'Sponge', age: 30, gpa: 3.0},
                {name: 'Squidward', age: 35, gpa: 3.5},
                {name: 'Patrick', age: 37, gpa: 1.5},
                {name: 'Sandy', age: 27, gpa: 4.0},]
people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people);

const people2 = [{name: 'Sponge', age: 30, gpa: 3.0},
  {name: 'Squidward', age: 35, gpa: 3.5},
  {name: 'Patrick', age: 37, gpa: 1.5},
  {name: 'Sandy', age: 27, gpa: 4.0},]
people.sort((a,b) => a.age - b.age);

console.log(people);