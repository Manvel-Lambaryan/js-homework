console.log("A");

setTimeout(() => {
  console.log("B");
  setTimeout(() => console.log("C"), 0);
}, 0);

setTimeout(() => console.log("D"), 0);

console.log("E");

// A E B D C 