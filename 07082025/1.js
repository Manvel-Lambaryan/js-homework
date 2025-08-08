function block(second) {
  let startTime = Date.now();
  let currentTime  = startTime;
  while(currentTime - startTime < second * 1000) {
    currentTime = Date.now();
  }
  
  console.log(`Block -> ${second} is done:`);
}

console.log("---------Block----------");

console.log("Start");
block(3);
console.log("End");

function nonBlock(second) {
  setTimeout(() => {
    console.log(`Non-Block -> ${second} is done`);
  }, second * 1000);
}

console.log("---------Non-Block----------");

console.log("Start");
nonBlock(3);
console.log("End");