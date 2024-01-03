// Declare a variable called "counter" and set it to 0
var counter = 0;

// Write a function that increments the variable "counter" by 1 every time it is called
function incrementCounter() {
    //counter = counter + 1;
    //counter += 1;
    counter++;
    // "counter += 1;" uses the assignment operator += to add 1 to the current value of counter and then assigns the result back to counter.“计数器+=1；”使用赋值运算符 += 将 counter 的当前值加 1，然后将结果赋回 counter 。
    // "counter++;" uses the increment operator ++, which automatically increases the value of counter by 1 and returns the value before the increment. This means that after using "counter++;", the value of counter is increased, but the expression's value is the value before the increment.“计数器++；”使用增量运算符 ++ ，它会自动将 counter 的值加 1 并返回增量之前的值。这意味着使用“counter++;”后， counter 的值增加了，但表达式的值是增加之前的值。
}

// Schedule the execution of the function every 3 seconds
setInterval(incrementCounter, 3000);
console.log(counter); // Log the incremented value here