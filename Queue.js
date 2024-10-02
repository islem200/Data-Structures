export class Queue{
    constructor(){
        this.data = [];
    }
    enqueue(record){
        this.data.unshift(record);
    }
    dequeue(){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1];
    }
    size(){
        return this.data.length;
    }
}