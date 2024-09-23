function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}


/**
 * module.exports: In Node.js, module.exports is an object that is returned 
 * as the result of a require() call. By default, module.exports is an empty 
 * object ({}), and we can add properties or methods to this object.
 * 
 * Overwriting module.exports: If we assign a new object or value to 
 * module.exports, we completely replace the original module.exports 
 * object with whatever we assigned. This means any previous properties 
 * or methods that were added to the original module.exports object are lost.
 */

module.exports = {
    add, subtract, multiply, divide
}
/*
{
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}
*/

module.exports.myDateTime = function () {
    return Date();
};
// {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     myDateTime: function () {
//         return Date();
//     }
// }
