class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(data);
    }
  }
  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.nextNode;
    }
  }
  get(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    return currentNode.data;
  }
}
const list = new LinkedList();
