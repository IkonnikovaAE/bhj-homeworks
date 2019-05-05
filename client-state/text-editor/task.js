const textArea = document.getElementById('editor');
if(localStorage.getItem('textArea') !== null) textArea.value = localStorage.getItem('textArea');
textArea.addEventListener('change',()=>{
    localStorage.setItem('textArea',textArea.value);
})