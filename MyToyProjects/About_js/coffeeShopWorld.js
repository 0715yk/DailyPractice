// 객체 지향 프로그래밍을 생각하며 coffeeShop을 만들어보자(하나의 세계관을 구현한다고 생각해보기)
// 객체 종류 : 손님, 바리스타, 손님이 이용할 메뉴판, 메뉴판 속의 메뉴들, 바리스타가 만들 커피, 손님이 지불할 돈
// 메시지 구현 :
// 손님은 커피를 고르고, 시킨다
//      >> 메뉴판은 손님에게 커피를 보여준다 => 메뉴 속의 커피는 각각 가격, 종류가 다르다 => 손님은 이중에 커피를 고른다
//      >> 손님은 바리스타에게 커피를 시킨다 => 시킬 때 돈을 지불한다 => 돈은 지불된다
// 바리스타는 주문을 받고, 돈을 받고, 커피를 만든다
//      >> 바리스타는 먼저, 주문을 받는다(손님이 주문한) => 돈을 받는다(손님으로부터) => 커피를 만든다 => 커피는 손님이 고른 커피
// 크게 손님 - 바리스타라는 객체를 바탕으로 이루어지는 coffeeShopWorld 그리고 그 손님과 바리스타 객체를 주변으로 연관성을 가지고 있는
// 돈, 메뉴판, 커피메뉴들, 주문받은 커피 등등의 객체

// 그럼 먼저 클래스를 생성해보자 손님(다수), 바리스타(1명), 메뉴판(다수), 메뉴(다수), 제공되는 돈(손님 객체의 속성), 
// 제공받는 돈(바리스타가 커피샵의 사장이라는 전제하에 바리스타의 속성에 더해짐), 
function CoffeeShop(shopName, masterName) {
    this.NAME = shopName;
    this.MASTER = masterName;
    // 사장님 상수로 한명만 
    this.bankAccount = 1000000000;
    // 손님이 구매함에 따라서 오르는 커피샾의 은행계좌
    this.barista = new Barista();
    // coffeeShop의 바리스타 
    this.menu = [];

    CoffeeShop.prototype.addMenu = function() {
        function Coffee(kind, price) {
            this.kind = kind;
            this.price = price;
        }
        let readline = require('readline');
        let r = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        r.setPrompt('>>');
        r.prompt();
        r.on('line', function(line) {
            if(line=='exit') {
                r.close();
            }
            r.prompt();
        })
        r.on('close', function() {
            process.exit();
        })
    }



    function Barista(name, sex, level) {
        this.name = name;
        this.sex = sex;
        this.level = level;

        Barista.prototype.makeCoffee = function (coffee) {
            return `${coffee.kind} 제조 완료!`;
        }
        Barista.prototype.takeOrder = function (menu) {
            if(!this.menu.indexOf(order)) {
                return '메뉴에 없는 커피입니다 손님';
            } else {
                return `${menu} 주문하셨고, ${menu.price}원 입니다. 손님`;
            }
        }
            
    }
}
let yongkini = new CoffeeShop('yongkini', '홍용기');
console.log(yongkini.bankAccount);
console.log(yongkini.menu);
yongkini.addMenu();
