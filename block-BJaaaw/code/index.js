// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let x = prompt(`Enter a number`);
if (x%2<=0) {
  alert(`Number is even`);
} else {
  alert (`Number is odd`);
}



// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.


let x = prompt(`Enter Number 1`);
let y = prompt(`Enter Number 2`);
if (x<y) {
  alert(`${y} is the max value`)
} else {
  alert(`${x} is the greater value`)
};



// 3. Convert the above code using`?` terniary operator

let x = prompt(`Enter Number 1`);
let y = prompt(`Enter Number 2`);
x < y ? alert(`${y} is greater`) : alert(`${x} is greater`)


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let x = prompt(`What is your House name?`);
switch (x) {
  case `stark`
  : alert(`Winter is Coming`);
  break;
  case `lannister`
  : alert(`A lannister always pays his debt`);
  break;
  default : alert(`All men must die`);
}


// 5. Convert the above code using`?` terniary operator

let x = prompt(`What is your House name?`);
x==`stark` ? alert(`Winter is Coming`) : x==`lannister` ? alert(`A lannister always pays his debt`) : alert(`All men must die`);


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let x = Number(prompt(`Enter number of the month`));
switch (x) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12
  : alert (`This month has 31 days`);
  break;
  case 2
  : alert (`February has 28 days`);
  break;
  default:  alert (`This month has 30 days`);
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/


let x = Number(prompt (`What is your Salary?`));

switch (true) {
    case (x <= 20000):
     alert (`Your in-hand Salary is ${0.9*x}`)
    break;
    case (40000 <= x <50000):
     alert (`Your in-hand Salary is ${0.8*x}`)
    break;
    default: 
    alert (`Your in-hand Salary is ${0.7*x}`);
}



//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number (prompt(`What is your marks?`))

if (marks > 100) {
  alert ("Marks can't be greater than 100")
} else if (marks > 80 && marks < 100){ 
  alert (`Grade A`)
} else if (marks > 50 && marks < 80) {
  alert (`Grade B`)
} else if (marks > 30 && marks < 50) {
  alert (`Grade C`)
} else {
  alert (`Grade D`)
}


let usermarks = Number (prompt(`What is your marks?`))

switch (true) {
     case (usermarks > 100):
     alert ("Marks can't be greater than 100")
    break;
    case (usermarks > 80 && usermarks < 100):
     alert (`Grade A`)
    break;
    case (usermarks > 50 && usermarks < 80):
     alert (`Grade B`)
    break;
    case (usermarks > 30 && usermarks < 50):
     alert (`Grade C`)
    break;
    default: 
    alert (`Grade D`);
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/


let weather = prompt (`What is the weather like outside?`)

switch (weather) {
    case `sunny`:
    alert (`Wear a T-shirt`);
    break;
    case `rainy`:
    alert (`Don't forget to take your raincoat`);
    break;
    case `hot`:
    alert (`Get a hanky`);
    break;
    case `freezing`:
    alert (`Get your sweater on`);
    break;
    default:
    alert(`Not a valid input`)
}



