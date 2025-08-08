function wait(ms, callback) {
  setTimeout(() => {
    callback();
  }, ms);
}

function myCallBack() {
  console.log("CallBack is done:");
}

wait(2000, myCallBack);