let second = 0;

setTimeout(() => {
  console.log("Dialing...");
}, second);

setTimeout(() => {
  console.log("Ringing...");
}, (second += 1) * 1000);

setTimeout(() => {
  console.log("Call connected!");
}, (second += 3) * 1000);