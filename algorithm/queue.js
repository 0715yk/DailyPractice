// js로 CircularQueue구현해보기
class CircularQueue {
    constructor(maxLength) {
        this.storage = {},
            this.front_pointer = 0,
            this.rear_pointer = 0,
            this.len = maxLength
    }

    enqueue(element) {
        let front = this.front_pointer % this.len;
        if (Object.prototype.hasOwnProperty.call(this.storage, front)) {
            return this.front_pointer - this.rear_pointer;
        }
        this.storage[front] = element;
        this.front_pointer++;
        return this.front_pointer - this.rear_pointer;
    }

    dequeue() {
        if (this.rear_pointer === this.front_pointer) {
            return;
        }
        let rear = this.rear_pointer++ % this.len;
        let val = this.storage[rear];
        delete this.storage[rear];
        return val;
    }

    size() {
        return this.front_pointer - this.rear_pointer + 1;
    }

    isEmpty() {
        return this.front_pointer - this.rear_pointer + 1 === 0;
    }

    peek() {
        let rear = this.rear_pointer++ % this.len;
        return this.storage[rear];
    }
}