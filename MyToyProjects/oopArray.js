// goal : Array 객체 구현해보기
// 객체 지향 프로그래밍(oop)을 생각하면서 구현해보자
// 먼저, Array는 클래스, arr=[]와 같이 Array 클래스를 바탕으로 만든 인스턴스가 있음
// 그러면 먼저, Array 클래스(function형태)를 설계해보자 with 속성(this키워드), 메서드(prototype키워드)

function Array(...elements) {
    this.length = `${elements.length}개`;
    Array.prototype.pop = function () {
        let erased = elements[parseInt(this.length)-1];
        this.length = `${parseInt(this.length) - 1}개`;
        return `${erased}을 제거했습니다` ;
    }
}

let arr = new Array(1,2,3);
console.log(arr.length);
console.log(arr.pop());
console.log(arr.length);
console.log(arr.pop());
console.log(arr.length);
