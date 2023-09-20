const backtotop=document.getElementById('backtotop');

function checkscroll() {

    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        backtotop.classList.add('show');
    } else {
        backtotop.classList.remove('show');
    }
}

function movebacktotop() {
    if (window.pageYOffset > 0 ){

        window.scrollTo({top:0,behavior: "smooth" })
    }
}



window.addEventListener( 'scroll', checkscroll);
backtotop.addEventListener('click', movebacktotop); 