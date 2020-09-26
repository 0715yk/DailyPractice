class App {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  init() {
    document.querySelector('input[name="submit"]')
      .addEventListener('click', () => {
        let
          title = document.querySelector('select').value,
          money = parseInt(document.querySelector('input[name="money"]').value);
        this.updateBalance(title, money);
      })
  }

  getBalance() {
    return this.balance;
  }

  setBalance(newBalance) {
    this.balance = newBalance;
    return this.balance;
  }

  updateBalance(title, howMuch) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    this.balance += howMuch;
    li.textContent = `타이틀 : ${title} / 지출 및 획득 : ${howMuch}원 / 잔액 : ${this.balance}`;
    ul.append(li);
    let balance = document.querySelector('#balance');
    balance.textContent = "현재 잔액 : " + this.balance;
  }

}

const app = new App('yongki', 0);
app.init();


function submit() {
  fetch('http://localhost:3000/post', {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(json => {
      let ul = document.querySelector('#lists');
      ul.innerHTML = '<li>' + json.title + ' : ' + json.money + '잔액 : ' + json.balance + '</li>'
    }).catch(err => alert('전송실패 : error(' + err + ')'));
}