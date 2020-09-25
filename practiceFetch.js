const app = {
    server: 'http://52.78.206.149:3000/messages',
};

app.fetch = function (server) {
    let a = fetch(server)
        .then(res => res.json())
    return a;
}
const message = {
    username: "미어캣",
    text: "빼꼼",
    roomname: "사막"
};

app.send = (messages) => {
    fetch(app.server, {
            method: 'POST',
            body: JSON.stringify(messages),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(json => json)
    // .catch(error => console.error('Error:', error));
}
console.log(app.fetch(app.server));