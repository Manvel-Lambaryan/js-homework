function logWithRandomDelay(message) {
  const randomDelay = Math.random() * (5000 - 1000) + 1000;
  setTimeout(() => {
    console.log(message);
  }, randomDelay);
}

logWithRandomDelay("This message will appear after a random delay!");