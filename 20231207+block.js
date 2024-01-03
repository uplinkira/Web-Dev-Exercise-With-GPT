// 使用代码块来定义作用域
{
    let x = 10; // 在代码块内定义的变量 x
    console.log(x); // 输出 10
  }
  
  console.log(x); // 报错，x 在外部作用域不可见
  
  // 使用代码块定义函数
  function greet(name) {
    {
      let greeting = "Hello"; // 在函数内的代码块定义的变量 greeting
      console.log(`${greeting}, ${name}!`);
    }
  }
  
  greet("Alice"); // 输出 "Hello, Alice!"
  