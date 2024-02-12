// Check if keys exist in an object
// 检查对象中是否存在键

const bankInfo = {
  name: 'ING',
  address: '79 Strasse',
  city: 'Amsterdam',
  country: 'Europe'
}
console.log(bankInfo['name']) //the key name is ING

// use `in` within a conditional
if('address' in bankInfo){
  console.log('result: ', bankInfo['address'])
}
//will print result:  79 Strasse
//remember to use quotes around the key

// Iterate over the keys in an object
// 循环访问对象中的键
let pet = {
  name: 'kitty',
  age: 2,
  sound: 'meow',
  owner: 'Atha'
}

for(let key in pet){
  console.log(pet[key]) // 'kitty'
}
//will print
// 'kitty'
//2
//meow
//Atha

// 在这个循环中，'key' 变量在每次迭代时都会被初始化为对象 'pet' 的下一个属性名


// 为什么使用[key]?
// 动态属性名: 使用pet[key]允许动态地访问对象的属性。这意味着你不需要事先知道要访问的属性名称，这在处理不确定或可变的对象结构时非常有用。

// 变量作为属性名: 在不知道确切属性名或属性名是动态生成的情况下，这种方法特别有用。key在循环中每次迭代都会改变，让你能够遍历对象的所有属性。


