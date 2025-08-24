class MyPromise {
  constructor(executor) {
    this.value = null;
    this.reason = null;
    this.state = 'pending';
    this.handler = null;
    this.catchHandler = null;

    const resolve = (value) => {
      if (this.state !== 'pending') return;
      this.state = 'resolved';
      this.value = value;
      if (this.handler) {
        queueMicrotask(() => this.handler(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.reason = reason;
      if (this.catchHandler) {
        queueMicrotask(() => this.catchHandler(this.reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(handler) {
    this.handler = handler;
    if (this.state === 'resolved') {
      queueMicrotask(() => this.handler(this.value));
    }
  }

  catch(catchHandler) {
    this.catchHandler = catchHandler;
    if (this.state === 'rejected') {
      queueMicrotask(() => this.catchHandler(this.reason));
    }
  }
}

new MyPromise((_, rej) => rej("boom")).catch(e => console.log(e));
new MyPromise(() => { throw 123; }).catch(e => console.log(e));