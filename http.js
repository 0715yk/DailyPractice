const http = require('http');
const portNumber = 3000;
let balance = 0;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/post') {
        req.on('data', (data) => {
            data = JSON.parse(data);
            balance += data.money;
            data['balance'] = balance;
            res.writeHead(200, {
                'content-type': 'text/html',
            })
            res.end(data);
        })
    } else {
        res.writeHead(200, {
            'content-type': 'text/html',
        })
        res.end('hello world!');
    }
});

server.listen(portNumber);
console.log(`Listening port number ${portNumber}..`);

function submit() {
    let select = document.querySelector('select');
    let money = document.querySelector('input[name="money"]');
    let postBody = {
        'title': select.value,
        'money': money
    };
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
        }).catch(err => alert('전송실패' + err));
}