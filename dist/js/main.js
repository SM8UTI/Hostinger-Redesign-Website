
const priceFeatures = [
    {
        features:"Unmetered traffic (Unlimited GB)"
    },
    {
        features:"100 Websites"
    },
    {
        features:"100 GB SSD Storage "
    },
    {
        features:"Free Weekly Backups"
    },
    {
        features:"Unlimited Free SSL "
    },
    {
        features:"Free Domain "
    },
    {
        features:"Free Email"
    },
    {
        features:"Optimized for WordPress"
    },
    {
        features:"100 Parked domains"
    },
    {
        features:"40 Active Processes"
    },
    {
        features:"Unlimited databases"
    },
    {
        features:"100 Subdomains per account "
    },
    {
        features:"20 Entry Processes"
    },
    {
        features:"3 GB database size"
    },
    {
        features:"Managed WordPress"
    },
    {
        features:"Access Management"
    },
]

const reviews = [
    {
        name:"Colin Hamilton",
        message:"Hostinger is one of the best web hosting companies I've had the opportunity to work with in some time. With its complete services and pre setup environment for WordPress, Hostinger is an amazing company to work with.",
        image:'https://images.unsplash.com/photo-1609017879802-fd6e6fb563bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        name:"Britain Eriksen",
        message:"As a customer of hostinger in Indonesia, I am one of their early customers. I am very amazed by the service updates and features that always increase from time to time with competitive prices, safe and always up to date. Thank you hostinger as the best hosting company.",
        image:'https://images.unsplash.com/profile-1603267077654-3d2d911647f7image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
    },
    {
        name:"Allef Vinicius",
        message:"I've been using Hostinger for a couple of years now and I'm very satisfied.I'm using it both for WordPress websites on a shared server and for NodeJs apps on a VPS server.",
        image:'https://images.unsplash.com/photo-1547395267-9900968de5a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
]

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
        if(e.classList.contains("active")){
            e.classList.toggle('active')
        }
        else{
            navMenu.forEach((f)=>{
                f.classList.remove('active')
            })

            e.classList.add('active')
        }
    })
})


//Count Down  timer 

const offerLastDate = '20 Oct 2022';

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countDownTimer = () =>{
    const lastDate = new Date(offerLastDate);
    const currentDate = new Date();

    const totalSeconds = (lastDate - currentDate)/1000;

    const day = Math.floor(totalSeconds/3600/24)
    const hour = Math.floor(totalSeconds/3600%24)
    const minute = Math.floor(totalSeconds/60%60)
    const second = Math.floor(totalSeconds%60)

    days.innerText = formatTime(day);
    hours.innerText = formatTime(hour);
    minutes.innerText = formatTime(minute);
    seconds.innerText = formatTime(second);
};

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countDownTimer,1000);



// price list section 

const priceFetureLists = document.querySelector('.price-container-box-card-list')

for(let i = 0;i<priceFeatures.length;i++){
    priceFetureLists.innerHTML +=  `<li>
                            <img src="assets/vector/correct.svg" alt="">
                            <p>${priceFeatures[i].features}</p>
                        </li>`
}


// reviews section 

const testomonialBox = document.querySelector('.testomonial-container-box')

for(let i = 0;i<reviews.length;i++){
    testomonialBox.innerHTML += `<div class="testomonial-container-box-item swiper-slide">
                        <img src="assets/vector/message-cl.svg" alt="">
                        <p>${reviews[i].message}</p>
                        <div class="testomonial-container-box-item-profile">
                            <img src="${reviews[i].image}" alt="">
                            <h2>${reviews[i].name}</h2>
                        </div>
                    </div>`
}