let subscribeModal = document.getElementById('subscribe-modal');

let getCookie = (name) => {
    let value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if(parts.length === 2) {
        return parts
        .pop()
        .split(';')
        .shift();
    }
}

if(getCookie('closed')) subscribeModal.classList.remove('modal_active');

if(subscribeModal !== null) {
    let close = document.querySelector('.modal__close');
    console.log(subscribeModal,close);
    close.addEventListener('click',()=>{
        document.cookie = 'closed=true';
        subscribeModal.classList.remove('modal_active');
    });
}