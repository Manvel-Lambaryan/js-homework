let second = 3;
setTimeout(() => {
  console.log("First : Output after 3 seconds");
}, second * 1000);

setTimeout(() => {
  console.log("Second : Output after 1 second");
}, (second += 1) * 1000);

setTimeout(() => {
  console.log("Third : Output after 2 second");
}, (second += 2) * 1000);