function User(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
    this.list.push(this);
}
User.prototype.list = [];
User.prototype.addFriends = function (name) {
    for (let el of this.list) {
        if (el.name === name) {
            this.friends.push(el);
            return 'completed add friends name' + el.name;
        }
    }
}

User.prototype.friendsRecommendation = function () {
    if (this.friends.length === 0) {
        return; // random celebrity
    } else {
        // BFS
        // 내 친구 목록에 있는 친구들을 bfs 하는데,
        // 즉, 그 친구들의 친구목록을 훑는데, 친구들의 친구중에 겹치는 친구를 우선적으로 해볼 수 있을까?
        // 예를 들어, 내 친구 1, 2가 있는데, 그 1,2의 공동 친구인? 3이 있다면, 3을 우선 추천하는 것이 맞는 것 같다.(알 확률이 높음)
        // 나 = 0 친구목록 [1,2]//친구1의 친구목록 [0,2,3,4]// 친구2의 친구목록 [0,1,3,5]
        // 이 때, 나에게 3을 추천해주는 로직
        // 자료 구조를 생각해보면
        // 나를 기준으로 하니까 
        // 큐 : [0,1,2,3,4,5]
        // 먼저, 큐에 내친구들의 친구목록만 넣어보자
        // 만약 나 혹은 내 친구들의 목록과 일치하면 큐에 넣지 않는 조건으로
        // [0]
        // [1, 2] 
        // [3,4,5]
        // 내 친구들의 친구들을 훑으면서, 큐에 그 친구들 객체를 넣고,
        // 그 다음으로, 큐에서 하나식 뽑으면서, 그 친구들의 친구들을 보는데, 먼저, 1의 친구들을 볼때
        // [0,2,3,4] => 만약 나랑 일치하면 패스, 

        // 나를 기준으로 찾기 시작
        let queue = [];
        // 재귀함수를 만들 것
        // 맨위 root Node = me => 부터 시작해서, 차례로 큐에 넣음
        // 그러면 먼저, 큐에는 내 객체가 들어갈 것 [나]
        // 그 다음에 큐에 있는 나를 pop하고, 내 친구들(바로 다음 레벨)의 객체들을 큐에 넣음 this.friends push하기 (큐에)
        // [친구1, 친구2] 이 상태에서 큐에있는 첫번째 친구1을 pop하고, 그 친구의 친구들을 push하기
        // 같은 방법으로 맨 위에있는 친구2를 팝하고, 그 친구의 친구들을 push하기 
        // 원하는 레벨까지 갔으므로 재귀호출 끝내고
        // 현재 큐에 있는 친구의 친구 목록 리턴하기 
        function recursion(node) {
            try {
                for (let el of node.friends) {
                    // 친구1의 친구들로 for문 ---2
                    // 친구2의 친구들로 for문 ---3
                    if (queue.indexOf(el) === -1) queue.push(el);
                    // 친구1의 친구들을  큐에 푸시, 현재 큐 : [친구2, 친구1-1, 친구1-2]
                    // 친구2의 친구들을 큐에 푸시, 현재 큐 : [친구1-1, 친구1-2, 친구2-1, 친구2-2]
                }
                let pop = queue.shift();
                console.log(pop.name);
                // 현재 큐에 [친구1, 친구2] -- 1
                return recursion(pop); // 친구1로 recursion ----1
                //친구2로 recursion ----2
                // 이렇게 계속 BFS
            } catch (e) {}
        }
        recursion(this);
    }
}

let yongki = new User('yongki', 28, )
let minsun = new User('minsun', 27, )
let jaeyoung = new User('jaeyoung', 25, )
let minhae = new User('minhae', 21, )
let sinhee = new User('sinhee', 27, )
let junhee = new User('junhee', 26, )


yongki.addFriends('minsun');
yongki.addFriends('jaeyoung');
minsun.addFriends('jaeyoung');
minsun.addFriends('minhae');
minsun.addFriends('sinhee');
jaeyoung.addFriends('minhae');
jaeyoung.addFriends('junhee');

yongki.friendsRecommendation();