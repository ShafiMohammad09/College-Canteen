burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav1 = document.querySelector('.nav1')
nav2 = document.querySelector('.nav2')




burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    nav1.classList.toggle('v-class');
    nav2.classList.toggle('v-class');
})