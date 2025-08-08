let second = 3;
let test = setInterval(() => {
  if (second > 0) {
    console.log(second);
    second--;
  } else {
    clearInterval(test);
    console.log("Go!");
  }
}, 1000);