"use strict";
// 180 Timers_ setTimeout and setInterval

// this event will happen after 3 SECONDS.
// HOWEVER !!! THE REST OF THE CODE BELlOW WILL CONTINUE TO EXECUTE!
// This is the mechanism called Asynchronism in JS!
setTimeout(() => console.log("Here is your pizza"), 5000);
console.log(
  "Look I am still here and after 5 seconds you will see the message above!"
);

// using this fucntion with an arguments
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  1000,
  "bread",
  "apple"
);
