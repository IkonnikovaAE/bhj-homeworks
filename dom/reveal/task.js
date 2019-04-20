const revealBlocks = document.querySelectorAll('.reveal');
revealBlocks.forEach(element => {
    console.log(element);
   document.addEventListener('scroll',()=>{
        if (window.innerHeight > element.getBoundingClientRect().top) element.classList.add('reveal_active');       
   }); 
});