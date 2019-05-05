let signInForm = document.getElementById('signin__form');
let signContainer = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');
signContainer.classList.add('signin_active')

if(localStorage.getItem('user_id') !== null){
    signContainer.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('user_id');
}

signInForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(signInForm);
    let httpRequesting = new XMLHttpRequest();
    httpRequesting.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');
    httpRequesting.send(formData);
    httpRequesting.addEventListener('readystatechange',()=>{
        if(httpRequesting.readyState == 4){
            if(JSON.parse(httpRequesting.responseText).success == true){
                signContainer.classList.remove('signin_active');
                let response = JSON.parse(httpRequesting.responseText);
                localStorage.setItem('user_id',response.user_id);
                welcome.classList.add('welcome_active');
                userId.textContent = response.user_id;
            }else{
                alert('Неверный логин/пароль');
            }

        }
    })
})

