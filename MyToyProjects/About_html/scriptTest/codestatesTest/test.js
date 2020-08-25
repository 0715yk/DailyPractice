let peopleList = [{
    firstName: 'Potter',
    lastName: 'Harry',
    age: 15,
    role: 'student'
  },
  {
    firstName: 'Dumbledore',
    lastName: 'Albus',
    age: 92,
    role: 'principal'
  }
]

// `printRole(${obj});
function printRole(user) {
    // Joe Blow를 클릭하면 clerk 이
    // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
    // 이 함수는 수정하지 마십시오.
    console.log(user.role);
  }

// printRole을 작동시키려면
// 일단, 클릭한 부분에 대한 요소를 가져와야함
// 그리고 printRole 함수의 매개변수로 해당 요소에 맞는 객체를 넣어줘야
// user.role에서 사용할 수 있음. 즉, user에는 객체가 들어가야함.

function test4(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let ul = document.querySelector('ul#container');

  for (let obj of arr) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.classList.add('name');
    a.textContent = obj.firstName + ' ' + obj.lastName;
    let div = document.createElement('div');
    div.classList.add('age');
    div.textContent = obj.age;
    li.append(a, div);
    ul.appendChild(li);
  }
  var aTags = document.querySelectorAll('.name');
    var aArr = Array.prototype.slice.apply(aTags);
    for (let el of aArr) {
        el.addEventListener('click', function(val) {
            for(let el of peopleList) {
                if (el.firstName + ' ' + el.lastName === val.target.textContent) {
                    return printRole(el);
                }
            }
        })
    }
}
test4(peopleList);


// test4 함수 작성을 완료한 뒤에 아래 주석을 풀어 실행해 봅니다
// test4(peopleList)
