/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;


while (303.91 > amount) {
    amount += PHONE_PRICE; // Phone price increases as long as amount is less than 303.91
    if (amount < SPENDING_THRESHOLD) { //Decides on whether to add accessory price
        amount += ACCESSORY_PRICE;
        bank_balance -= (PHONE_PRICE + ACCESSORY_PRICE);
    } else {
        bank_balance -= PHONE_PRICE;
    }
    
}

alert(`$` + amount * (1 + TAX_RATE));

// your code goes here

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
var finalamount = 0;
var i = 0;

while (amount < 303.91) {
    i++
    amount = (PHONE_PRICE) * i;
    if (amount < SPENDING_THRESHOLD ) {
        amount += ACCESSORY_PRICE
        bank_balance -= (PHONE_PRICE + ACCESSORY_PRICE);
    } else {
        bank_balance -= PHONE_PRICE;
    }
    
    console.log(amount, bank_balance)
}


// ⛑ Answer of the above will `$334.76`.

