// Using setInterval:使用 setInterval ：

// setInterval is used to repeatedly execute a specified function at regular intervals. 
// 用于定期重复执行指定的函数。

// setInterval takes two parameters: the function name and the time between function calls. 
//采用两个参数：函数名称和函数调用之间的时间。

//The state being maintained in this context is a counter that increments every time the function is called.
// 在此上下文中维护的状态是一个计数器，每次调用该函数时该计数器都会递增。
//The function continues to execute at the specified interval as long as the program is running.只要程序正在运行，该函数就会继续按照指定的时间间隔执行。

// Can you modify the function to increase by five on each console write?  
var counter = 0;
function writeAdd5(){
    counter += 5;// counter = counter + 5;
    console.log(counter);
}
setInterval(writeAdd5, 3000);

//Can you create exponential growth?  
var counter = 0;
function writeExponential5(){
    counter *= 2; // counter = counter * 2;
    console.log(counter);
}
setInterval(writeExponential5, 3000);

//To achieve exponential growth, modify the function to multiply the counter by a constant factor greater than one with each call.
//要实现指数增长，请修改该函数，以便每次调用时将计数器乘以大于 1 的常数因子。