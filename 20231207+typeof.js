//代码解释：typeof是一个操作符，用来返回一个变量或者表达式的数据类型。
//en: typeof is an operator that returns the data type of a variable or expression.
//这是js特有吗？js only?
//回答：不是，其他语言也有类似的操作符。No, other languages have similar operators.
//举例，
let number_of_transactions = 970
console.log(typeof(number_of_transactions))
//expected result: number


console.log(typeof("The ceremony is scheduled at 8am."))
//string

console.log(typeof(true))
//boolean


console.log(typeof(sept_record))
//undefined

function isString(a, b, c) {
    // Check if all three parameters are of type 'string'
    if (typeof a === 'string' && typeof b === 'string' && typeof c === 'string') {
      return 'strings';
    } else {
      return 'not strings';
    }
  }
  
  // Example usage:
  const result1 = isString('hello', 'world', '!');
  console.log(result1); // Output: 'strings'
  
  const result2 = isString('hello', 42, 'world');
  console.log(result2); // Output: 'not strings'
  