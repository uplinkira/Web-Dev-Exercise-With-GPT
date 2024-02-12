// Switch conditionals
const fruit = 'watermelon';

switch (fruit) {
  case 'Mandarins':
    console.log('Mandarins are $2.59 a pound.');
    break;
  case 'cantaloupes':
    console.log('cantaloupes are $5.29 a pound.');
    break;
  case 'watermelon':
    console.log('cantaloupes and watermelons are $3.79 a pound.');
    // expected output: "cantaloupes and watermelons are $3.79 a pound."
    break;
  default:
    // If not cases are matched, then execute the following code
    console.log(`Sorry, we are out of ${fruit}.`);
}

// In this example, the constant fruit is evaluated based on 3 different cases: does it equal 'Mandarins’, ‘cantaloupes’ or 'watermelon’? This would be comparable to the following if..else statements:
// 在此示例中，该常数 fruit 是根据 3 种不同的情况计算的：它是否等于“柑橘”、“哈密瓜”或“西瓜”？这与以下 if..else 陈述相当：

const fruit = 'watermelon';

if(fruit==='Mandarins')
    console.log('Mandarins are $2.59 a pound.');
else if(fruit==='cantaloupes')
    console.log('cantaloupes are $5.29 a pound.');
else if(fruit==='watermelon')
    console.log('cantaloupes and watermelons are $3.79 a pound.');
else
    console.log(`Sorry, we are out of ${fruit}.`);