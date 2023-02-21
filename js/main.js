

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    /*=============== Menu Show ===============*/
    // Validate if constant exists

    if(navToggle){
       navToggle.addEventListener('click', () => {
        navToggle.classList.add('hidden');
        navMenu.classList.add('show-menu');
       
       }) 
    }
    
    /*=============== Hide Menu ===============*/

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
            navToggle.classList.remove('hidden')
        })
    }



