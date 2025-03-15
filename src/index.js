import convertLength from "./convertLength.js";
import convertFahrenheitToCelsius from "./fahrenheitToCelsius.js";
import isEven from "./isEven.js";
import isPalindrome from "./isPalindrome.js";
import removeFirstOccurrence from "./removeFirstOccurrence.js";

// Penggunaan convertFahrenheitToCelsius
let fahrenheitInput = 200; // Misalnya suhu 100°F
let celsiusOutput = convertFahrenheitToCelsius(fahrenheitInput);
console.log(`${fahrenheitInput}°F = ${celsiusOutput.toFixed(2)}°C`);

// Penggunaan convertLength
console.log(convertLength(100000)); // ouput "1 km"
console.log(convertLength(2)); // Output: "200000 cm"

// Penggunaan isEven
console.log(`1000 → isEven: ${isEven(1000)}`); // Output: 1000 => isEven: true
console.log(`1001 → isEven: ${isEven(1001)}`); // Output: 1001 => isEven: false

// Penggunaan removeFirstOccurrence
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"

// Penggunaan isPalindrome
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
