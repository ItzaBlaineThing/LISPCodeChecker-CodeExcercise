// Function to validate the parentheses of a string, returns 'True' if properly nested
function checkCode() {
    // Open the string that the user has entered in the input field
    var codeString = document.getElementById("lispString").value;

    // Create an array that will be used to add and remove parentheses
    var parentheses = [];

    // For loop to iterate through each character of the provided string
    for (let x = 0; x < codeString.length; x++) {
        
        // If, the codeString character for this iteration is a '(', add it to the parentheses array
        if (codeString[x] === "(") {
            // Add this '(' to the codeString array
            // This will be used later to determine if there is matching parentheses
            parentheses.push(codeString[x]);

        } else if (codeString[x] === ")") {
            // If, the parentheses array is empty, then we know there is not a matching parentheses
            //  since this only executes when there is a right parentheses in codeString[x]
            if (parentheses.length === 0) {
                // Break out of the loop since we know there are not matching parentheses
                console.log("False")
                // Return false from the function
                return false;
                
                // Else, the codeString character for this iteration is a ')', remove
                // the last character in parentheses array
            } else {
                // Remove the last element in the parentheses array, which
                // should be a left parentheses
                parentheses.pop();
            }
        }
    }
    
    // If the parentheses array is not empty, then the parentheses
    // do not match, return false
    if (parentheses.length > 0) {
        console.log("False");
        return false;

        // Else, the parentheses array is empty and the loop finished meaning
        // there was never a right parentheses without a matching right parentheses
    } else {
        console.log("True");
        return true;
    }
    
}