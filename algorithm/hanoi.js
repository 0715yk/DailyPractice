function hanoi(n) {
    return Math.pow(2,n)-1;
}
//n=0 => 0+0+0 =0
//n=1 => 0+1+0 =1
//n=2 => 1+1+1 =3
//n=3 => 3+1+3 =7
//n=4 => 7+1+7 =15
//n=5 => 15+1+15 =31
//n=6 => 31+1+31 =63
// ......
// Xn = 2**n-1

// 하노이의 탑 재귀함수로 구현해보기
let num = Number(prompt('>'));
function hanoi(n, from_, to_, by_ ) {
  if (n === 1) {
    console.log(from_ + ' ' + to_);
    return ;
  } 
  hanoi(n-1, from_, by_, to_);
  console.log(from_ + ' ' + to_);
  hanoi(n-1, by_, to_, from_);
}
console.log(2**num -1 );
hanoi(num,1,3,2);
