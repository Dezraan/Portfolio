const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


let btnMe = document.querySelector('#me'),
    modal = document.querySelector('.about'),
    portfolio = document.querySelector('#portfolio');
    
const closeModal = document.querySelector('#close'),
      text = document.querySelector('.about__text');
      
function openClose() {
    btnMe.textContent  === "Закрыть" ? "Про меня" : "Про меня";
    btnMe.addEventListener('click', () => {
        if (modal.classList.contains ('show')) {
            setTimeout(() => {
                modal.classList.remove('an_open');
            }, 800);
            modal.classList.remove('show'),
            modal.classList.add('an_close');
        } else {
            modal.classList.remove('an_close'),
            modal.classList.add('show', 'an_open');
        }
        
    });

    btnMe.addEventListener('click', () => {
    if (btnMe.classList.contains ('btn')) {
       btnMe.classList.remove('btn'),
       portfolio.classList.add('btn');
    } else {
        btnMe.classList.add('btn'),
        portfolio.classList.remove('btn');
    }
    });
    portfolio.addEventListener('click', () => {
        btnMe.classList.remove('btn'),
        portfolio.classList.add('btn');
        setTimeout(() => {
            modal.classList.remove('an_open');
        }, 800);
        modal.classList.remove('show'),
        modal.classList.add('an_close');
    });

    closeModal.addEventListener('click', () => {
        setTimeout(() => {
            modal.classList.remove('an_open');
        }, 800);
        btnMe.classList.remove('btn'),
        portfolio.classList.add('btn');
        modal.classList.remove('show'),
        modal.classList.add('an_close');
    });
}


let gradbtn = document.querySelector('.gradient-button'),
    windows = document.querySelector('#openModal')
    closegrad = document.querySelector('.close')








openClose();
