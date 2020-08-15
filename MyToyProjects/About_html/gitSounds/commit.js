const lyrics = [];
const commitBtn = document.querySelector('#flexbox2 #item2');

//날짜 형식 변환 함수
function getFormatDate(date){
    var year = date.getFullYear();         
    var month = (1 + date.getMonth());       
    month = month >= 10 ? month : '0' + month; 
    var day = date.getDate();                 
    day = day >= 10 ? day : '0' + day;  
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();        
    sec = sec<10 ? `0${sec}`: sec;
    return  `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

// commit 버튼으로 데일리 커밋용 버튼
commitBtn.onclick = function() {
    const obj = {};
    var lyricsInput = document.querySelector('#flexbox2 #item1');
    obj.verse = lyricsInput.value;
    var date = new Date();
    var now = getFormatDate(date);
    obj.date = now;
    lyrics.push(obj);
    var lyricList = document.querySelector('#lyricList');
    while (lyricList.firstChild) {
        lyricList.removeChild(lyricList.firstChild);
    }
    lyricsInput.value='';
    verseAppender(lyrics);
}

// lyrics 배열에 있는 모든 verse객체의 자료를 html문서에 출력하도록 하는 함수
function verseAppender(lyric) {
    var div = document.createDocumentFragment();
    for (let el of lyric) {
        let verseLi = document.createElement('li');
        verseLi.textContent = `${el.verse} [commit date : ${el.date}]`;
        div.appendChild(verseLi);
    }
    var lyricList = document.querySelector('#lyricList');
    lyricList.appendChild(div);
}
verseAppender(lyrics);

//