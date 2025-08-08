function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(() => {
    console.log("Water ready!");
    if (typeof callback === 'function') {
      callback();
    }
  }, 3000);
}

function makeTea() {
  console.log("Making Tea with the ready water!");
}

boilWater(makeTea)