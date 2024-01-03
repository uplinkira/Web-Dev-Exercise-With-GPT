//使用assignment的形式定义属性：
//en:Define properties using assignment:
const carA = {};
carA.Brand = "Tesla";
carA.Model = "Model x";

//使用键值对的形式定义属性：
//en:Define properties using key-value pairs:
const carB = {Brand: "Porsche", Model: "911"};


////////////////////////////////////////////////

// Class: Define a class named "Car"
class Car {
    // Function: Constructor function, used to create Car objects and initialize properties
    //cn:构造函数，用于创建Car对象并初始化属性
    constructor(make, model) {
      this.make = make;     // Brand property
      this.model = model;   // Model property
      this.speed = 0;       // Current speed property, initialized to 0
    }

    // Method1 of the Car Class: Accelerate
    accelerate() {
      this.speed += 10;  // Increase speed by 10 units
    }
  
    // Method2 of the Car Class: Brake
    brake() {
      this.speed -= 5;   // Decrease speed by 5 units
    }
  }
  
  // Create two Car objects using the Car class
  const car1 = new Car("Toyota", "Camry");
  const car2 = new Car("Honda", "Civic");
  
  // Access properties and use methods of the objects
  console.log(`${car1.make} ${car1.model}`); // Output: Toyota Camry
  console.log(`${car2.make} ${car2.model}`); // Output: Honda Civic
  
  car1.accelerate(); // Accelerate car1 object
  console.log(`Car1's speed: ${car1.speed}`); // Output: Car1's speed: 10
  
  car2.accelerate(); // Accelerate car2 object
  car2.brake();      // Brake car2 object
  console.log(`Car2's speed: ${car2.speed}`); // Output: Car2's speed: 5



