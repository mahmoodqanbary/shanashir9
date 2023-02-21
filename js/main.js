

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



