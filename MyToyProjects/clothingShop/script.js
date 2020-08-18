const clothingData = [
    {
        name : 'Gore-tex texture supreme hoody',
        href : 'https://cdn-images.farfetch-contents.com/14/15/12/36/14151236_20131845_600.jpg',
        price : '1,550,000￦'
    },
    {
        name : 'Valenciaga navy hoody ',
        href : 'https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/b/a/balenciaga-blue-cotton-logo-hoodie-321203-dbc7c30bc5dfef4d57548d96428ad6c9368ac2fa.jpg',
        price : '1,200,000￦'
    },
    {
        name : 'GUCCI Cotton Jersey Oversize',
        href : 'https://media.bergdorfgoodman.com/image/upload/b_rgb:e9eaeb/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/3125141_100714_m',
        price : '2,550,000￦'
    },
    {
        name : 'OFF-WHITE high cut Rubber Shoes',
        href : 'https://cf.shopee.ph/file/f1eaa187a3dfb7757b74a2636577c69f',
        price : '550,000￦'
    },
    {
        name : 'OFF-WHITE Green ODSY-1000 Sneakers',
        href : 'https://static.highsnobiety.com/thumbor/t1g4irWWhDswZxCRntnoCCsf7h8=/fit-in/320x213/smart/static.highsnobiety.com/wp-content/uploads/2019/08/19102300/off-white-low-vulcanized-sneaker-release-date-price-06.jpg',
        price : '850,000￦'
    },
    {
        name : 'Nike MAG Back to the Future',
        href : 'https://stockx.imgix.net/Nike-Air-Mag-Back-To-The-Future-BTTF-2016.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256',
        price : '12,000,000￦'
    },
    {   
        name : 'PRADA Ugly Shoes white',
        href : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MjhfMTA4%2FMDAxNTU5MDM0NTA3NTQy.LPGmIRjoh-wFZ3RN4hFB1jpYFc21gETmJhZ0X522vfMg.5O1XKspqC3-L1gY8tSAiGyTUouChRP-ukn-RjXq0D0sg.JPEG.mainbaroshop%2FKakaoTalk_20190528_101418549.jpg&type=sc960_832',
        price : '850,000￦'
    }
];

let showItems = function(data) {
    if (data.length === 0) {
        return false;
    } else {
        for (let el of data) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            var name_div = document.createElement('div');
            var price_div = document.createElement('div');

            div.classList.add('clothing-items');
            name_div.classList.add('inform');
            name_div.setAttribute('id', 'item-name');
            name_div.textContent = el.name;

            price_div.classList.add('inform');
            price_div.setAttribute('id', 'item-price');
            price_div.textContent = el.price;

            img.classList.add('inform');
            img.setAttribute('id', 'item-img');
            img.setAttribute('src', el.href);

            div.append(img, name_div, price_div);
            var article = document.querySelector('article');
            article.prepend(div);
        }
    }
}

showItems(clothingData);