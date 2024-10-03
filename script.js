// Step 1: Declaring Arrays

const mixedArray = [10, "Hello", true, 3.14, "World"];

// Step 2: Accessing Arrays

const firstElement = mixedArray[0];
const lastElement = mixedArray[mixedArray.length - 1];
const middleElement = mixedArray[Math.floor(mixedArray.length / 2)];

// Step 3: Using Array Properties

console.log("Number of elements:", mixedArray.length);

// Step 4: Array Methods

mixedArray.push("JavaScript");
mixedArray.pop();
mixedArray.unshift(42);
mixedArray.shift();
mixedArray[2] = false;

// Step 5: Iterating Through Arrays

for (let i = 0; i < mixedArray.length; i++) {
console.log(mixedArray[i]);
}

mixedArray.forEach(element => {
console.log(element);
});

// Step 6: Array Destructuring

const [first, second, ...rest] = mixedArray;

