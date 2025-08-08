function measureDelay() {
  console.log("Task started");
  const startTime = Date.now();
  setTimeout(() => {
    const endTime = Date.now();
    const realDelay = endTime - startTime;
    console.log("Task finished");
    console.log(`Real delay: ${realDelay}ms`);
  }, 2000);
}

measureDelay();