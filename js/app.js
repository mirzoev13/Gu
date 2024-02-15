let menu = document.querySelector(".nav");
let menu2 = document.querySelector(".nav2");

var card = document.querySelectorAll('.card_club');

var arrow = document.querySelector('.scroll');


var activeCard = null;

window.addEventListener("scroll", function () {
    if(this.window.scrollY>200){
        menu.classList.add('fixed');
    }
    if(this.window.scrollY<200){
        menu.classList.remove('fixed');
    }
    if(this.window.scrollY>400){
        arrow.classList.add('active_scroll')
    }else if(this.window.scrollY<400){
        arrow.classList.remove('active_scroll')
    }

    if(this.window.scrollY>600){
        menu2.classList.add('fixed');
    }
    if(this.window.scrollY<600){
        menu2.classList.remove('fixed');
    }
});

card.forEach(function(card){
    card.addEventListener('click', function(){
        if (activeCard){
            activeCard.classList.remove('club_active');
        }
        card.classList.add('club_active');
        activeCard = card;
    })
});

