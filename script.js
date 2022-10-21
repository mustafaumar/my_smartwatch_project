const menu = document.querySelector('.menu')
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    menu.classList.toggle('show')
    navbar.classList.toggle('hidden')
})