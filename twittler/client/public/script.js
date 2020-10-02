// // tweet버튼을 눌렀을 때 새로 자료가 html에서 추가되도록(tweetData에 추가되면서 자연스럽게 출력)
const tweetButton = document.querySelector('#tweet');

tweetButton.addEventListener('click', () => {
    let input = document.querySelector('#getComment');
    let nickname = document.querySelector('#nicknamePart');
    // let userImage = document.querySelectorAll('#userImg');
    let spareImg = "imgSrc";
    let data = {
        "username": nickname.textContent.trim(),
        "text": input.value,
        "img": spareImg,
        "date": getFormatDate(new Date())
    }
    fetch('http://localhost:3000/tweet', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            console.log('success!')
            input.value = null;
        })
        .catch(err => console.log(err))

})

// 계속해서 데이터 리셋
function init() {
    fetch('http://localhost:3000/getTweet')
        .then(res => res.json())
        .then(json => {
            let ul = document.querySelector('#tweetList');
            ul.innerHTML = '';
            showTweet(json)
            let divId = document.querySelector('#howManyTweets');
            divId.textContent = `Tweets Count : ${json.length}`;
            count = json.length;
        })
}

setInterval(init, 100);

// renderMessage
function showTweet(Data) {
    for (let el of Data) {
        let container = document.createDocumentFragment();
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927');
        img.setAttribute('width', '11%');
        img.setAttribute('height', '87%');
        img.setAttribute('style', 'overflow:hidden;float:left; position:relative; border-radius: 10px; margin-right:3px;');
        container.appendChild(img);
        let div = document.createElement('div');
        div.setAttribute('id', 'filter');
        div.setAttribute('style', 'z-index:99; display:inline-block; font-size:18px; float:left;');
        let p = document.createElement('p');
        p.setAttribute('id', 'user_date_inform');
        p.textContent = el.username + ' | ' + el.date;
        p.setAttribute('onclick', 'return filter();')
        p.setAttribute('style', 'box-sizing:border-box;margin:0px; cursor: pointer;')
        div.appendChild(p);
        let txtarea = document.createElement('textarea');
        txtarea.setAttribute('style', 'width:86%; height:58%; border-radius: 10px; font-size:18px;');
        txtarea.setAttribute('readonly', 'true');
        txtarea.textContent = el.text;
        container.appendChild(img);
        container.appendChild(div);
        container.appendChild(txtarea);
        li.appendChild(container);
        li.setAttribute('style', 'height:30%;');
        let ul = document.querySelector('#tweetList');
        ul.prepend(li);
    }
}

// 날짜 구하는 로직
function getFormatDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    sec = sec < 10 ? `0${sec}` : sec;
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}