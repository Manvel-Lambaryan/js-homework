function countDown(n) {
  if (n >= 1) {
    console.log(n);
    setTimeout(() => {
      countDown(n - 1);
    }, 1000);
  }
}

countDown(5);