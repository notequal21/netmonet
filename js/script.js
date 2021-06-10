
// ---- native JS
// $(document).ready(function(){
//     $('.burger-body__item-burger').click(function(event){
//         $('.burger-body__item-burger, .burger-body__item-content').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

// let burger = document.querySelector('.burger-body__item-burger');
// let content = document.querySelector('.burger-body__item-content');

document.querySelector('.burger__btn').addEventListener('click', (event) => {
    if ( document.querySelector('.burger__btn').classList.contains('active') ) {
        document.querySelector('.burger__btn').classList.remove('active');
    } else 
    {
        document.querySelector('.burger__btn').classList.add('active');
    }

    if ( document.querySelector('.header-body__menu').classList.contains('active') ) {
        document.querySelector('.header-body__menu').classList.remove('active');
    } else 
    {
        document.querySelector('.header-body__menu').classList.add('active');
    }
    
    if ( document.querySelector('body').classList.contains('lock') ) {
        document.querySelector('body').classList.remove('lock');
    } else 
    {
        document.querySelector('body').classList.add('lock');
    }
});
$(document).ready(function(){
    $('.questions-body__item-title').click(function(event) {
        if($('.questions-body__content').hasClass('one')){
            $('.questions-body__item-title').not($(this)).removeClass('active');
            $('.questions-body__tem-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    }); 
});



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});