/**
 * @param {number} n - Number of steps to climb
 * @return {number} - Number of distinct ways to climb the stairs
 */
var climbStairs = function(n) {
    // Initialize variables to keep track of the number of ways to reach each step
    let one = 1; // Number of ways to reach step 1
    let two = 1; // Number of ways to reach step 2

    // Loop through each step starting from step 3 up to the target step 'n'
    for (let i = 0; i < n - 1; i++) {
        // Store the current value of 'one' in a temporary variable
        let temp = one;
        // Update the number of ways to reach step 'i + 2' (one step ahead)
        one = one + two;
        // Update the number of ways to reach step 'i + 1' to prepare for the next iteration
        two = temp;
    }

    // The number of ways to reach the target step 'n' is stored in 'one'
    return one; // Return the number of distinct ways to climb the stairs
};
