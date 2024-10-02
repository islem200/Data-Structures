export class Stack {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    const lastIndex = this.data.length - 1;
    return this.data[lastIndex];
  }
  isEmpty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
}
