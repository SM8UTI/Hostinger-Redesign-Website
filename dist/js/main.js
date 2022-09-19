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


const priceFetureLists = document.querySelector('.price-container-box-card-list')

for(let i = 0;i<priceFeatures.length;i++){
    priceFetureLists.innerHTML +=  `<li>
                            <img src="assets/vector/correct.svg" alt="">
                            <p>${priceFeatures[i].features}</p>
                        </li>`
}