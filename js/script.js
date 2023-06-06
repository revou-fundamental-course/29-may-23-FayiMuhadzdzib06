window.addEventListener('scroll', e => {
    console.log(window.scrollY); 
    if (window.scrollY > 200){
        document.querySelector('nav').style.backgroundColor = 'salmon';
    }else{
        document.querySelector('nav').style.backgroundColor = 'transparent';
    }
});
