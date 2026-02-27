// Comparison should be done between same data types..
// IN js == and > works differently

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);    // When using > JavaScript converts values to numbers => null → converted to number → 0


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);   // Any comparison with NaN is always false.


console.log("2" === 2);  // === => check their datatypes!
 