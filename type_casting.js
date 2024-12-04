/**
 * Type casting
 * Implicid and explicid
 */

// Automatic type casting, because we are adding 2 different types: number + string
// Mathematically this makes no sense, so JS will cast the  number to string
console.log(5 + "5"); // "55"

// This is manual type casting.
// We cast the string to number using Built-in Number Function.
console.log(5 +  Number("5"));

// Typeof operator we can use to check whatever data-type.
console.log(typeof 5);
console.log(typeof true);