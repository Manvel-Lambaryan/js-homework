class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.thenCallback = undefined;

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        if (this.thenCallback) {
          this.thenCallback(this.value);
        }
      }
    };

    executor(resolve);
  }

  then(onFulfilled) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    } else {
      this.thenCallback = onFulfilled;
    }
  }
}

const p = new MyPromise(r => r(42));
p.then(v => console.log(v));

const p2 = new MyPromise(r => setTimeout(() => r("ok"), 0));
setTimeout(() => p2.then(v => console.log(v)), 10);