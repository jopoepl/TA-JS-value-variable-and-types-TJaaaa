// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let userAge = +prompt(`What is your age?`); 

switch (true) {
  case (userAge>= 12 && userAge<=55):
    alert(`You can participate in the marathon`);
    break;
  case (userAge>= 4 && userAge<=11):
    alert(`You are too young to participate in the marathon`);
    break;
  case (userAge<4):
      alert(`Hey Kiddo! Can You Walk ?`);
      break;
  default:
      alert(`You are too old to participate in the marthon`);
}


// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

let n = +prompt(`Pick a random value of n`);
let j = "";

while (n>0){
  j += 'e';
  console.log (`H` + j + `llo`);
  n--;
}







/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let n = +prompt(`Pick a random value of n`);
let sum = 0;

while (n>0) {
  sum += n; 
  console.log(sum);
  n--;
}



/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let number = +prompt (`Input your number`);

switch (number) {
  case 1:
    alert (`ONE`);
    break;
  case 2:
      alert (`TWO`);
      break;
  case 3:
    alert (`THREE`);
    break;
  case 4:
    alert (`FOUR`);
    break;
  case 5:
    alert (`FIVE`);
    break;
  case 6:
    alert (`SIX`);
    break;
  case 7:
    alert (`SEVEN`);
    break;
  case 8:
    alert (`EIGHT`);
    break;
  case 9:
    alert (`NINE`);
    break;
  default:
    alert(`PLEASE TRY AGAIN`)
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let userMarks = +prompt(`Enter your marks`); userMarks>0;

switch (true) {
  case userMarks > 90:
    alert(`Your grade is AA`);
    break;
  case userMarks > 80 && userMarks < 90:
      alert(`Your grade is AB`);
      break;
  case userMarks > 70 && userMarks < 80:
      alert(`Your grade is BB`);
      break;
  case userMarks > 60 && userMarks < 70:
      alert(`Your grade is BC`);
      break;
  case userMarks > 50 && userMarks < 60:
      alert(`Your grade is CC`);
      break;
  case userMarks > 40 && userMarks < 50:
      alert(`Your grade is CD`);
      break;
  case userMarks > 30 && userMarks < 40:
      alert(`Your grade is DD`);
      break;
  default:
    alert(`Your grade is FF`)
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let numA = +prompt(`Enter Number 1`);
let numB = +prompt(`Enter Number 2`);

if (numA > numB) {
  alert(`${numA} is greater`);
} else {
  alert(`${numB} is greater`);
}



/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let numA = +prompt(`Enter Number 1`);
let numB = +prompt(`Enter Number 2`);
let numC = +prompt(`Enter Number 3`)

let product = numA * numB * numC;

if (product>0){
  alert(`+`);
} else {
  alert(`-`);
}


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let numA = +prompt(`Enter Number 1`);
let numB = +prompt(`Enter Number 2`);
let operation = prompt(`Enter your operation`);

switch (true) {
  case operation === `Add`:
    alert(numA + numB);
    break;
  case operation === `Mul`:
    alert(numA * numB);
    break;
  case operation === `Sub` && numA > numB:
    alert(numA - numB);
    break;
  case operation === `Div` && numA > numB:
    alert(numA / numB);
    break;
  case operation === `Sub` && numA < numB:
    alert(`Number Two is larger than Number one`);
    break;
  case operation ===`Div` && numA < numB:
    alert(`Number Two is larger than Number one`);
    break;
  default:
    alert(`Check your operation`)
}



