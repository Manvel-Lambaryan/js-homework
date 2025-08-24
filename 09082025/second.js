class MyPromise {
  constructor(executor) {
    this.value = null;
    this.handler = null;

    const resolve = (value) => {
      this.value = value;
      if (this.handler) {
        queueMicrotask(() => {
          this.handler(this.value);
        });
      }
    };
    executor(resolve);
  }

  then(handler) {
    this.handler = handler;
    if (this.value) {
      queueMicrotask(() => {
        this.handler(this.value);
      });
    }
  }
}

new MyPromise(r => r("A")).then(console.log);
console.log("B");