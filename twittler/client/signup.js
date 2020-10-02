let input = document.querySelector('input[name="submit"]');

input.addEventListener('click', () => {
    let userImage = document.querySelector('#img');
    let imageUrl = URL.createObjectURL(userImage.files[0]);
    let id = document.querySelector('input[name="id"]');
    let name = document.querySelector('input[name="nickname"]');
    let psw1 = document.querySelector('input[name="psw1"]');
    let psw2 = document.querySelector('input[name="psw2"]');
    if (psw1.value !== psw2.value) {
        alert('비밀번호가 일치하지 않습니다!');
    }
    let userObj = {
        'id': id.value,
        'psw': psw1.value,
        'nickname': name.value,
        'img': imageUrl
    }
    console.log(userObj);
})