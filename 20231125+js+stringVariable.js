/*Instructions
 - Greet your friend by printing a message to the console.
*/
let myFriend = "fox"
// fox如果没有""会ReferenceError: fox is not defined

///////////////
function greetings() {
    return "Greetings," + myFriend + "!";
  }
  
  //leave this line unchanged to console log the results
  console.log('results: ', greetings());
  
  //don't change this line
  module.exports = {greetings} ;
  
// Note: The following line of code `console.log('results: ', greetings());` will print the result of your code to the console. You will learn more about how this works later on in the course.  
// 注意：以下代码行 `console.log('results: ', greetings());` 会将代码结果打印到控制台。  