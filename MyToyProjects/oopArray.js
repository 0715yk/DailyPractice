// goal : Array 객체 구현해보기
// 객체 지향 프로그래밍(oop)을 생각하면서 구현해보자
// 먼저, Array는 클래스, arr=[]와 같이 Array 클래스를 바탕으로 만든 인스턴스가 있음
// 그러면 먼저, Array 클래스(function형태)를 설계해보자 with 속성(this키워드), 메서드(prototype키워드)

class MyArray {
    constructor (...elements) {
        if (elements.length === 1) {
            this.length = elements[0];
            let arr = [];
            for (let i=0;i<this.length;i++) {
                arr.push(undefined);
            }
            this.value = arr;
            return arr;
        } else {
            this.length = elements.length;
            this.value = elements;
            return elements;
        }
    }
    push(input) {
        this.value[length] = input;
        console.log(this.value.length);
        return input;
    }
    pop() {
        let deletedValue = this.value[length-1];
        this.value.splice(length-1, 1);
        return deletedValue;
    }
}

let arr = new Array(1,2,3);
arr.push(4);
arr.pop();
console.log(arr);