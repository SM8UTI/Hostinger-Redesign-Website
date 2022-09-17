const header = document.getElementById('header');
const hamMenu = document.getElementById('hamburger-menu');
const btnGroups = document.querySelector('.btn-groups')

hamMenu.addEventListener("click",()=>{
    header.classList.toggle('active');
    hamMenu.classList.toggle('active');
    btnGroups.classList.toggle('active');
});


const navMenu = document.querySelectorAll('.nav-menu-item')

navMenu.forEach((e)=>{
    e.addEventListener("click",()=>{
        e.classList.toggle("active")
    })
})