

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      logoHide = document.getElementById('logo');

    /*=============== Menu Show ===============*/
    // Validate if constant exists

    if(navToggle){
       navToggle.addEventListener('click', () => {
        navToggle.classList.add('hidden');
        navMenu.classList.add('show-menu');
        logoHide.classList.add('logohide');
       
       }) 
    }
    
    /*=============== Hide Menu ===============*/

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
            navToggle.classList.remove('hidden');
            logoHide.classList.remove('logohide');
        })
    }




    // Project Slider

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })



