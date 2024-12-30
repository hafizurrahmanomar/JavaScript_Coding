
//1.Example without Parameters

(function () {
  // Code inside the IIFE
  const message = "Hello, World! .<br>";
  document.write(message);
})();

//2. Example with Parameters
(function (name) {
  const greeting = `Hello, ${name}! .<br>`;
  document.write(greeting);
})("Hafizur Rahman");


// 3.Initialization Example

(function () {
document.write("IIFE executed to initialize the application. <br>");
  const appConfig = {
    theme: "dark",
    language: "en",
  };
  console.log("App initialized with config:", appConfig);
})();


//4.With Arrow Function

(() => {
  const message = "With Arrow Function .<br>";
  document.write(message);
})();

//5. Parameterized IIFE

(function (a, b) {
  document.write(`The sum of ${a} and ${b} is: `, a + b + ".<br>");
})(5, 10);


// 6. IIFE with return value
// const userSettings = (function () {
//   const defaultSettings = { theme: "light", language: "en" };
//   return defaultSettings;
// })();

// console.log(userSettings);

//7.Feature Detection

(function () {
  if ("geolocation" in navigator) {
    console.log("Geolocation is supported!");
  } else {
    console.log("Geolocation is not supported.");
  }
})();

