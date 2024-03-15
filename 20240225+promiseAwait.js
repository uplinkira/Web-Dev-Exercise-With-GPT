////////////////////////////////////////
// how to fetch data from a URL while using the await keyword:
async function a() {
  let url = 'https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap';
  const res = await fetch(url);
  const data = await res.text();
  console.log(data);
}
////////////////////////////////////////
let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation like a fetch request
  let condition = true; // Simplified condition
  if (condition) {
    resolve('Promise fulfilled');
  } else {
    reject('Promise rejected');
  }
});
myPromise.then((value) => {
  console.log(value); // Handles fulfilled case
}).catch((error) => {
  console.error(error); // Handles rejected case
});

////////////////////////////////////////
//how do async and await work together?
// In the async function asyncCall(), the await keyword tells you which promise it’s waiting for whose results it’ll later return.
function resolveAfter2Seconds() { 
  return new Promise(resolve => {
      setTimeout(()=> {
          resolve('resolved');
      }, 2000);
  });
}
async function asyncCall() {
  console.log('Calling!');
  const result = await resolveAfter2Seconds();
  console.log(result);
}
asyncCall();

////////////////////////////////////////
// Another way to wait for a response to come back before continuing to execute your code is with a promise (p is the promise in the below example)
// 在继续执行代码之前等待响应返回的另一种方法是使用 promise

p.then(onFulfilled[, onRejected]);
//This line of code attaches callback functions for the fulfillment (onFulfilled) and rejection (onRejected) cases of the Promise p. The then method is used to schedule actions to be performed after the Promise p is settled (either fulfilled or rejected).此代码行附加了 Promise p 的履行 （ onFulfilled ） 和拒绝 （ onRejected ） 情况的回调函数。该 then 方法用于计划在 Promise p 结算（履行或拒绝）后要执行的操作。

p.then(value => {
  // Fulfillment
}, reason => {
  // Rejection
});
// This code may execute before the fulfillment or rejection due to the asynchronous nature of the request


const promise = Promise.resolve('Coffee is ready');

promise.then(result => {
  console.log(result); // Output: "Coffee is ready"
});

////////////////////////////////////////
// .then() method

// Basic usage: Handling a promise's fulfillment基本用法：处理承诺的履行
const promise = new Promise(resolve => setTimeout(() => resolve(1), 100));
promise.then(firstResult => {
  console.log(firstResult); // Output: 1
  return firstResult * 2;
})
// Here, once the promise of getting coffee is fulfilled, you log the result to the console.在这里，一旦兑现了获得咖啡的承诺，您就会将结果记录到控制台。

// Chaining .then(): Performing sequential asynchronous operations链接 .then() ：执行顺序异步操作
.then(secondResult => {
  console.log(secondResult); // Output: 2
  return secondResult * 2;
})
.then(finalResult => {
  console.log(finalResult); // Output: 4
});
// This is like ordering a series of coffees one after the other, with each step dependent on the completion of the previous one.这就像一个接一个地订购一系列咖啡，每一步都取决于前一步的完成情况。

// Handling errors: Catching rejections in a promise chain处理错误：捕获承诺链中的拒绝
const promise = Promise.reject('Coffee machine is broken');
promise.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error); // Output: "Coffee machine is broken"
});
// This example shows how to handle the situation where you can't get your coffee due to a broken machine, by catching the error and possibly taking some action like reporting the issue.此示例展示了如何处理由于机器损坏而无法喝咖啡的情况，方法是捕获错误并可能采取一些措施（例如报告问题）。

////////////////////////////////////////
//.catch() method

// Basic usage: Handling a single promise's rejection基本用法：处理单个 promise 的拒绝
const promise = Promise.reject('Out of coffee');

promise.catch(error => {
  console.error(error); // Output: "Out of coffee"
});
// In this scenario, if the promise of getting coffee is rejected because the shop is out of coffee, you catch the error and log it, perhaps to notify someone or to make a different choice.在这种情况下，如果因为商店没有咖啡而拒绝了买咖啡的承诺，您会发现错误并记录下来，也许是为了通知某人或做出不同的选择。

// Chained after .then(): Catching errors in a promise chainChained after .then() ：捕获承诺链中的错误
Promise.resolve('Starting the machine')
  .then(result => {
    throw 'Machine error'; // Something goes wrong
  })
  .catch(error => {
    console.error(error); // Output: "Machine error"
  });
// Here, during the process of making coffee, an error occurs ("Machine error"). The .catch() method is used to handle this error gracefully, allowing for actions like alerting the staff or choosing an alternative.在这里，在制作咖啡的过程中，发生了错误（“机器错误”）。该 .catch() 方法用于优雅地处理此错误，允许执行警报员工或选择替代方案等操作。
// The statement throw 'Machine error'; in JavaScript is used to intentionally generate an error, known as throwing an exception. When you use throw followed by a message or an error object, it stops the execution of the current function and the control is passed to the first catch block in the call stack. If no catch block exists among caller functions, the program terminates, and the error message is typically displayed in the console or a debugging environment.JavaScript 中的语句 throw 'Machine error'; 用于故意生成错误，称为引发异常。当您使用 throw 后跟消息或错误对象时，它会停止当前函数的执行，并将控制传递到调用堆栈中的第一个 catch 块。如果调用方函数之间不存在 catch 块，则程序将终止，并且错误消息通常会显示在控制台或调试环境中。


// With .then() and .catch(): Full promise chain with error handling带 .then() 和 .catch() ： 具有错误处理功能的完整承诺链
const checkCoffeeSupply = () => Promise.reject('No beans');

checkCoffeeSupply()
  .then(() => {
    console.log('Making coffee');
  })
  .catch(error => {
    console.error(error); // Output: "No beans"
    return 'Getting tea instead';
  })
  .then(alternative => {
    console.log(alternative); // Output: "Getting tea instead"
  });
// This example illustrates a sequence where you first check the coffee supply, which fails ("No beans"). The .catch() method handles this error, and you decide to get tea instead. The subsequent .then() could represent taking the action based on that decision, like enjoying the tea.此示例演示了首先检查咖啡供应的序列，该顺序失败（“无咖啡豆”）。该 .catch() 方法处理此错误，您决定改用茶。随后 .then() 可能代表根据该决定采取行动，例如享受茶。

////////////////////////////////////////

// throw statement
//Throwing a string:抛出字符串：
function checkUsername(username) {
  if (username.length < 4) {
    throw 'Username too short';
  }
  console.log('Username is valid');
}

try {
  checkUsername('abc');
} catch (error) {
  console.error(error); // Output: "Username too short"
}
// This example simulates validating a username where the rule is it must be at least 4 characters long. If the condition isn't met, the function stops and throws an error.此示例模拟验证用户名，其中规则必须至少为 4 个字符。如果不满足条件，该函数将停止并引发错误。

// Throwing an object:抛出物体：
function validateAge(age) {
  if (age < 18) {
    throw {
      error: 'AgeError',
      message: 'You must be at least 18 years old'
    };
  }
  console.log('Age is valid');
}

try {
  validateAge(16);
} catch (error) {
  console.error(error.message); // Output: "You must be at least 18 years old"
}
// In this example, an age check is performed, and if the age is under 18, an error object is thrown, providing both an error type and a message. This provides more detailed error information.在此示例中，将执行年龄检查，如果年龄小于 18 岁，则会引发错误对象，同时提供错误类型和消息。这提供了更详细的错误信息。

// Throwing in asynchronous code:抛出异步代码：

async function fetchData(url) {
  if (!url) {
    throw 'URL is required';
  }
  // Assume fetch() is defined and returns data from the URL
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

fetchData('').catch(error => {
  console.error(error); // Output: "URL is required"
});
// This example demonstrates how to use throw in asynchronous functions. If the URL parameter is missing, the function immediately throws an error, which is then caught and handled by .catch() in the promise chain.此示例演示如何在异步函数 throw 中使用。如果缺少 URL 参数，该函数会立即引发错误，然后在 promise 链 .catch() 中捕获和处理该错误。

////////////////////////////////////////


