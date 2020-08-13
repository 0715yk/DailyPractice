let menus = document.querySelectorAll("button");

let btnAmericano = menus[0];
let btnBlackTea = menus[1];

btnAmericano.onclick = handleClick;
btnBlackTea.onclick = handleClick;

function handleClick(event) {
  let currentMenu =  event.target.textContent;
  console.log(currentMenu + "를 클릭하셨습니다.");
}