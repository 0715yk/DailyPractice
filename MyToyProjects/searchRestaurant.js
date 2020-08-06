const restaurantLists = {
    sinchon : ['팔덕식당', '대포찜닭', '유자유 떡볶이', '기꾸스시', '장군찜닭', '고삼이', '더진국', '연대포', '포석정', '행복은 간장밥', '곱창이야기', '황소곱창'],
    hongdae : ['감성타코', '버터밀크', '몬스터피자', '무라', '이춘복참치', '카페부라노', '박용석스시', '홍대 개미', '연어에이드' ],
    hapjung : ['이치류', '오레노라멘', '쿠이신보', '카밀로라자네리아', '오스테리아샘킴', '라뚜셩트', '잇텐고', '크레이지카츠', '교다이야'],
    gangnam : ['메종 드 라 카테고리', '미미미 가든', '무탄', '살롱드곱떡', '리틀넥 청담', '무한야끼', '호족반', '치즈룸', '미미면가'],
    mokdong : ['청춘포차', '곱차이야기', '겐지', '한신포차']
}

function WhichRestaurantToday() {
    let area = prompt('오늘은 어디로 가시겠습니까?(sinchon, hongdae, hapjung, gangnam, mokdong)'); 
    if (Object.keys(restaurantLists).indexOf(area) === -1) {
        console.log('잘못입력하셨습니다');
        return WhichRestaurantToday(area);       
    }
    return `${area}에서는 ? 여기로! ${restaurantLists[area][Math.floor(Math.random(0, restaurantLists[area].length) * 10)]}`;
}

let whereToGo = WhichRestaurantToday();
console.log(whereToGo);