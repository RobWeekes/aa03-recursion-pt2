/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

let product = 1;
function exponent(num, power) {

    if(power === 0) {           // base case pos
        let result = product;
        product = 1;
        return result;
    }

    if(power > 0) {     // positive exponents --

            // debugger
            product = product * num;
            console.log(product);
            // power -= 1;
            console.log(power);
            return exponent(num, power - 1);
    }

    if(power < 0) {     // negative exponents --

            console.log(power);
            power += 1;
            console.log(power);
            product = product / num;
            console.log(product);
            return exponent(num, power);
    }
}

console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)
console.log(exponent(5, 5)); // 3125
console.log(Math.pow(5, 5));

console.log(exponent(2, -3));
console.log(Math.pow(2, -3));


        // Davidsons solution
function exponent3(num, power) {

    if (power === 0){
    return 1;
}
// if my power is positive
    if (power > 0){
    // return the number * the function call with power -1 to recurse until 0
    return num * exponent(num, power - 1);
}

//  if my power is negative
    else {
    // return number divided by the function call flip power sign
        return 1 / (num * exponent(num, -power - 1))
    }
}

console.log(exponent3(3, 2)); // 9
console.log(exponent3(2, -2)); // 1/4 (or 0.25)
console.log(exponent3(5, 5)); // 3125
console.log(Math.pow(5, 5)); // 3125

console.log(exponent3(2, -3));  // 0.125
console.log(Math.pow(2, -3)); // 0.125


// try solution with standard for loop --

function exponent2(num2, power2) {
let product2 = 1;

    if(power2 > 0) {      // positive exponents --
        for(let i = 0; i < power2; i++) {
            product2 = product2 * num2;
            console.log(num2);
        }
        return product2;
    }

    if(power2 < 0) {      // negative exponents --
        for(let j = power2; j < 0; j++) {
            product2 = product2 / num2;
            console.log(num2);
        }
        return product2;
    }
}

console.log(exponent2(3, 2)); // 9
console.log(exponent2(2, -2)); // 1/4 (or 0.25)
console.log(exponent2(5, 5)); // 3125

console.log(exponent2(2, -3));

// console.log(Math.pow(3, 2)); // 9
// console.log(Math.pow(2, -2)); // 1/4 (or 0.25)
// console.log(Math.pow(5, 5)); // 3125
// console.log(Math.pow(2, -3));


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
