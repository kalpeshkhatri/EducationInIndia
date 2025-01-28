const burger=document.querySelector('.burger');
const navbar =document.querySelector('.navbar');
const navlist =document.querySelector('.nav-list');
const rightNav=document.querySelector('.rightNav');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    rightNav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
})