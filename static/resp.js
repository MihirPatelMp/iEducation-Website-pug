const burger=document.querySelector('.burger');
const navbar=document.querySelector('.navbar'); 
const navList=document.querySelector('.nav-list');
const rightNav=document.querySelector('.rightNav');
const listItems=document.querySelector('.list-items');
const listItems1=document.querySelector('.list-items-1');
const listItems2=document.querySelector('.list-items-2');
const listItems3=document.querySelector('.list-items-3');


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-nav-resp');
    rightNav.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp'); 
})

listItems.addEventListener('click',()=>{
    navList.classList.toggle('v-nav-resp');
    rightNav.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})
listItems1.addEventListener('click',()=>{
    navList.classList.toggle('v-nav-resp');
    rightNav.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})
listItems2.addEventListener('click',()=>{
    navList.classList.toggle('v-nav-resp');
    rightNav.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})
listItems3.addEventListener('click',()=>{
    navList.classList.toggle('v-nav-resp');
    rightNav.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})
