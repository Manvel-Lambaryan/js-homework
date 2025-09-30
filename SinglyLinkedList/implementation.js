class Node  {
  constructor(next = null, head) {
    this.next = next;
    this.head = head;
  }
}

class SLinkedList {
   constructor(iterable = []) {
    this.head = null;
    this.tail = null;
    this._size = 0;

    for (const item of iterable) {
      this.push_back(item);
    }
  }

  size() {
    return this._size;
  }

  isEmpty() {
    if(this.head == null) {
      return true;
    }
    return false;
  }

  clear() {
    return this._size = 0;
  }

  front() {
    if(this.head == null) return undefined;
    return this.head;
  }

  push_front(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this._size++;
  }

  push_back(value) {
    const node = new Node(value);
    if(!(this.head)) {
      this.head = this.tail = value;
    } else {
      this.tail = node;
    }
    this._size++;
  }

  pop_front() {
    
  }
}