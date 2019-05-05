let httpRequesting = new XMLHttpRequest();
httpRequesting.open('GET', ' https://netology-slow-rest.herokuapp.com');
httpRequesting.send();

httpRequesting.addEventListener('readystatechange',()=>{
    let items = document.getElementById('items');
    let loader = document.getElementById('loader');
    
    if(httpRequesting.readyState == 4) {
        loader.classList.remove('loader_active');
        let request = JSON.parse(httpRequesting.responseText);
        for(valute in request.response.Valute){
            let charCode = '';
            let valueOfValute ='';
            for(key in request.response.Valute[valute]){
                if(key == 'CharCode') charCode = request.response.Valute[valute][key];
                if(key =='Value') valueOfValute = request.response.Valute[valute][key];
            }

            items.innerHTML+=
            `<div class="item">
                <div class="item__code">
                    ${charCode}
                </div>
                <div class="item__value">
                    ${valueOfValute}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`;
        }
    }
});