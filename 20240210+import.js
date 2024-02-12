// 从模块中导入单个命名导出
// Importing a single named export from a module
import { myFunction } from './myModule.js';

// 从模块中导入多个命名导出
// Importing multiple named exports from a module
import { function1, function2 } from './myModule.js';

// 为方便起见，重命名命名导入
// Renaming named imports for convenience
import { originalName as alias } from './myModule.js';



// 将模块中的所有命名导出作为一个对象导入
// Importing all named exports from a module as an object
import * as allFunctions from './myModule.js';
// Suppose 'myModule.js' exports several functions like so:
// export const function1 = () => {...};
// export const function2 = () => {...};

// You can import all of them as properties of a single object 'allFunctions'
import * as allFunctions from './myModule.js';

// To use a function, you refer to the object first, then the specific function
allFunctions.function1();
allFunctions.function2();


// 仅为了其副作用而导入模块，而不导入任何特定的导出
// Importing a module for its side effects only, without importing any specific exports
import './myModule.js';