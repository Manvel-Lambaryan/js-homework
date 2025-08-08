function handleRequest(clientId, delay) {
  console.log(`Handling ${clientId}`);

  setTimeout(() => {
     console.log(`${clientId} responded`);
  }, delay);
}

console.log("--------------------");

handleRequest('Client1', 3000);
handleRequest('Client2', 1000);
handleRequest('Client3', 2000);
