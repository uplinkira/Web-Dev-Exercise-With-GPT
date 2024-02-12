// 重新写一个正确的var contacts数组,email随意填写
var contacts = [{ name: 'amy', email: 'amy@mit.edu', course: 'web dev' }, {name: 'bob', email: 'bob@@mit.edu', course: 'web dev' }, {name: 'charlie', email: 'charlie@mit.edu', course: 'web dev' }];

// Change the course that Amy is taking to front end dev
// 改变 Amy 正在采取的前端开发路线
//增加代码实现:
contacts[0].course = 'front end dev';
console.log(contacts[0].course); //front end dev

// Add a new contact object to the array with your information
// 将包含您的信息的新联系人对象添加到数组中
//增加代码实现:
contacts.push({name: 'Anaki', email: 'anaki@mit.edu', course: 'web dev'});

// When we have a collection of elements stored in an array and have been asked to iterate over it in order to either add or remove or change any of its elements, we use a for-loop.
//当我们将元素集合存储在一个数组中，并被要求迭代它以添加、删除或更改其任何元素时，我们使用 for 循环。
// Review this example of looping over a simple array
let candidates = ['Jenna', 'Carly', 'Sofia']
for (let i = 0; i < candidates.length; i++) {
  // Runs 5 times, with values of each candidate.
  console.log(`Candidate #${i}: ${candidates[i]}`);
}
// resulting
// Candidate #0: Jenna
// Candidate #1: Carly
// Candidate #2: Sofia

// Flattening arrays 2D-array to 1D
// Define a function called arrayFlattener, that accepts a two dimensional array as an argument.
// arrayFlattener should return a new, one-dimensional array.

// The process involves iterating over each element of the input array and concatenating them into a new array, effectively removing any nested array structures. 
// 该函数旨在将二维数组展平为一维数组。该过程涉及遍历输入数组的每个元素并将它们连接成一个新数组

//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

function arrayFlattener(arr) {
  var newArr = [];

  for var (i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }
  return newArr;
}
//Return a new 1 dimensional array like, [1,2,3,4]



// Check if the variable is an Array
let fruits = ['Apple', 'Banana', 'Mango'];
console.log(Array.isArray(fruits)); // true

let number = 42;
console.log(Array.isArray(number)); // false
