import convertFahrenheitToCelsius from "./fahrenheitToCelsius.js";

// Penggunaan convertFahrenheitToCelsius
let fahrenheitInput = 200; // Misalnya suhu 100°F
let celsiusOutput = convertFahrenheitToCelsius(fahrenheitInput);
console.log(`${fahrenheitInput}°F = ${celsiusOutput.toFixed(2)}°C`);
