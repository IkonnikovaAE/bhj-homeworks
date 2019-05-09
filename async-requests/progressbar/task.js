let form = document.getElementById('form');
let progressBar = document.getElementById('progress');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = new FormData(form);
    let httpRequesting = new XMLHttpRequest();
    httpRequesting.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');

    httpRequesting.upload.addEventListener('progress',(event)=>{
    	let percentComplete = 0;
        event.total == 0 ? percentComplete = 0 : percentComplete = (event.loaded/event.total);
        progressBar.value = percentComplete;
    })
    
    httpRequesting.send(formData);
})