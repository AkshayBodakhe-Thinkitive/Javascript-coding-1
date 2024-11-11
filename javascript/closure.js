// First-Class Functions in JavaScript:
// Functions are treated like any other value. They can be:
// - Assigned to variables
// - Passed as arguments to other functions
// - Returned from other functions
// - Stored in data structures

// Advantages of First-Class Functions:

// 1. Code Reusability
function greet() {
    return "Hello!";
  }
  const sayHello = greet; // Assigning function to a variable
  console.log(sayHello());  // Output: "Hello!"
  
  // 2. Higher-Order Functions (HOFs)
  function multiplier(factor) {
    return function(x) {
      return x * factor;
    };
  }
  const double = multiplier(2);  // Returning a function
  console.log(double(5));  // Output: 10
  
  // 3. Callbacks for Asynchronous Programming
  setTimeout(() => console.log('This runs after 2 seconds'), 2000);  // Passing a function as an argument
  
  // 4. Closures: Maintaining State
  function counter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  const increment = counter();  // Closure remembers the lexical scope
  console.log(increment());  // Output: 1
  console.log(increment());  // Output: 2
  
  // 5. Improved Readability with Array Methods
  const numbers = [1, 2, 3];
  const doubled = numbers.map(num => num * 2);  // Passing function to map
  console.log(doubled);  // Output: [2, 4, 6]
  