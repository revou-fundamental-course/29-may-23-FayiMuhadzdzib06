window.addEventListener('scroll', e => {
    let home = document.getElementById('home');
    console.log(home.clientHeight); 
    if (window.scrollY > home.clientHeight){
        document.querySelector('nav').setAttribute('id', 'navScroll');
    }else{
        document.querySelector('nav').removeAttribute('id', 'navScroll');
    }
});

