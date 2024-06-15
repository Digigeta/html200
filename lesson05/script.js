// Function to handle button click
function handleButtonClick() {
    // Prompt the user for a number
    let userInput = prompt("Please enter a number:");
    
    // Convert the input to a number
    let number = parseFloat(userInput);
    
    // Check if the input is a valid number
    if (isNaN(number)) {
        alert("Please enter a valid number.");
    } else {
        // Calculate the square of the number
        let result = number * number;
        
        // Display the result in an alert
        alert("The square of " + number + " is " + result);
    }
}

// Add event listener to the button
document.getElementById("squareButton").addEventListener("click", handleButtonClick);
