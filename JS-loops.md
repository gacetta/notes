# LOOPS

## DO...WHILE LOOPS

a `do...while` loop will first `do` one pass of the code inside the loop no matter what, and then continue to run the loop `while` the specified condition evaluates to `true`

    const ourArray = [];
    let i = 0;

    do {
    ourArray.push(i);
    i++;
    } while (i < 5);

At the end of the above example, the value of ourArray is [5]. 

Essentially, a `do...while` loop ensures that the code inside the loop will run at least once.