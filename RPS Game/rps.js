function rps() {
    while (true) {
      const rpsArr = ['가위', '바위', '보'];
      let mine = prompt('가위바위보 게임(종료 : exit 입력)\n가위바위보!>>');
      if (mine === 'exit') {
        console.log('종료합니다');
        return;
      } else if(!rpsArr.includes(mine)) {
        console.log('잘못입력하셨습니다');
        continue;
      }
      let randIndex = Math.floor(Math.random(0,1) * 3);
      if (rpsArr.indexOf(mine)===randIndex) {
        console.log(`나 : ${mine}\n컴퓨터 : ${rpsArr[randIndex]}\n무승부!\n`);
      } else if(rpsArr.indexOf(mine)>randIndex 
      && rpsArr.indexOf(mine)-randIndex===1) { 
        console.log(`나 : ${mine}\n컴퓨터 : ${rpsArr[randIndex]}\n유저 승리!\n`);
      } else if(rpsArr.indexOf(mine)<randIndex 
      && randIndex-rpsArr.indexOf(mine)===1) {
        console.log(`나 : ${mine}\n컴퓨터 : ${rpsArr[randIndex]}\n컴퓨터 승리!\n`);
      } else {
        if (rpsArr.indexOf(mine)>randIndex) {
          console.log(`나 : ${mine}\n컴퓨터 : ${rpsArr[randIndex]}\n컴퓨터 승리!\n`);
        } else {
          console.log(`나 : ${mine}\n컴퓨터 : ${rpsArr[randIndex]}\n유저 승리!\n`);
        }
      }
    }
  }
