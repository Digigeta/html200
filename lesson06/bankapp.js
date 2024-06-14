let balance = 0;

function bankApp() {
    let action;

    while (action !== 'Q') {
        action = prompt("Choose an action:\nEnter Q to quit\nEnter W to withdraw\nEnter D to deposit\nEnter B to view balance").toUpperCase();

        switch (action) {
            case 'Q':
                alert("Thank you for using the bank application. Goodbye!");
                break;

            case 'W':
                let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                    if (withdrawAmount <= balance) {
                        balance -= withdrawAmount;
                        alert(`You have withdrawn $${withdrawAmount}. Your new balance is $${balance}.`);
                    } else {
                        alert("Insufficient funds.");
                    }
                } else {
                    alert("Invalid amount. Please try again.");
                }
                break;

            case 'D':
                let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                if (!isNaN(depositAmount) && depositAmount > 0) {
                    balance += depositAmount;
                    alert(`You have deposited $${depositAmount}. Your new balance is $${balance}.`);
                } else {
                    alert("Invalid amount. Please try again.");
                }
                break;

            case 'B':
                alert(`Your current balance is $${balance}.`);
                break;

            default:
                alert("Invalid option. Please choose a valid action.");
                break;
        }
    }
}

// Start the bank application
bankApp();
