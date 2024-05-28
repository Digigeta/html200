// Create an array with at least 5 strings
let fruits = ['mango', 'peach', 'grape', 'plum', 'kiwi'];
console.log('Initial array:', fruits);

// Add an element to the end of the array
fruits.push('pineapple');
console.log('After adding an element to the end:', fruits);

// Remove the third element (index 2)
fruits.splice(2, 1); // Remove 1 element at index 2
console.log('After removing the third element:', fruits);

// Create a string from the elements and comma separate them
let fruitString = fruits.join(', ');
console.log('Comma-separated string:', fruitString);
