const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    if( ( e.target.className == 'fa fa-bars' || e.target.className == 'fa fa-bars cek' ) || ( e.target.className == 'fa fa-close' || e.target.className == 'fa fa-close cek' ) ){
        e.target.classList.replace('fa-close', 'fa-bars')
        console.log(e.target)
        e.target.classList.toggle('cek');
        if( e.target.className == 'fa fa-bars cek' || e.target.className == 'fa fa-close cek' ){
            e.target.classList.replace('fa-bars', 'fa-close')
            ul.style.top = '80px';
        }else{
            ul.style.top = '-250px';
        };
    };
});

let home = document.getElementById('home');
window.addEventListener('scroll', e => {
    if( window.innerWidth < 600 ){
        if (window.scrollY > home.clientHeight - 80){
            nav.removeAttribute('id');
        }
    }else{
        if (window.scrollY > home.clientHeight - 80){
            nav.setAttribute('id', 'navScroll');
        }else{
            nav.removeAttribute('id');
        }
    }
});

// my profile
document.getElementById('mProfile').addEventListener('click', () => layer.style.display = 'grid')
const layer = document.querySelector('.layer');
layer.addEventListener('click', e => {
    if( e.target.className == 'layer' || e.target.className == 'btn-close' || e.target.className == 'fa fa-close' ){
        layer.style.display = 'none';
    }
})

// Message Us
const mu = document.getElementById('message');
mu.addEventListener('click', e => {
    if( e.target.classList.contains('btn') ){
        e.preventDefault();
        // tangkep isi yang ada di form input
        let nama = document.querySelector('.message .card .input input[type="text"]').value;
        let tanggal = document.querySelector('.message .card .input input[type="date"]').value;
        let jenisKelamin = document.querySelectorAll('form input[type="radio"]');
        let jk;
        for(let i = 0; i < jenisKelamin.length; i++) {
            if(jenisKelamin[i].checked){
                jk = jenisKelamin[i].value;
            }
        };
        let pesan = document.querySelector('.message .card .input textarea').value;

        if( nama == "" || tanggal == "" || jk == "" || pesan == ""){
            alert('Masih ada yang belum lengkap, Lengkapi terlebih dahulu!!!');
        }else {
            // masukkan ke output
            document.querySelector('p:nth-child(3) span').innerHTML = nama;
            document.querySelector('p:nth-child(4) span').innerHTML = tanggal;
            document.querySelector('p:nth-child(5) span').innerHTML = jk;
            document.querySelector('p:nth-child(6) span').innerHTML = pesan;
            
            // nonaktifin display nonenya dan ilangin teks spannya
            let cos = document.querySelectorAll('.card-output p');
            for(const co of cos){
                co.style.display = 'block';
            }
            document.querySelector('.au').style.display = 'none';
        }
        
    }
})

