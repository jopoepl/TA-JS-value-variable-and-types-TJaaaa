//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for (let i=1; i <=10; i++) {
    console.log(i)
}

// Using `console.log` log all the evan values from 1 to 10.

for (let y = 0; y <= 10; y++) {
    if(y % 2 == 0) {
        console.log(y);
    }
}

// Using `console.log` log all the od values from 1 to 10.

for (let a = 0; a <= 10; a++) {
    if(a % 2 !== 0) {
        console.log(a);
    }
}

// Calculate the sum of all numbers from 1 to 10.


let sum = 0;

for (let b = 0; b <= 10 ; b = b++) 
     {
    console.log(sum)
    sum = sum + b 
    }


let i = 1;
let b = 0;

while (i <= 10) {
    b = b + i;
    console.log (b); 
    i++
    }


// Log all the values from 1 to 10 using while loop

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    console.log (sum); 
    i++
    }
