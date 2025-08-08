function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(() => {
    console.log("Water is boiling!");
    callback();
  }, 2000);
}

function addPasta(callback) {
  console.log("Adding pasta...");
  setTimeout(() => {
    console.log("Pasta added!");
    callback();
  }, 1000); 
}

boilWater(() => {
  addPasta(() => {
    console.log("Pasta is cooking!");
  });
});