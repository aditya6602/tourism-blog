

bars = document.querySelector('.bars')
navbar = document.querySelector('.navbar')
vclass = document.querySelector('.v-class')
hclass = document.querySelector('.h-class')
home = document.querySelector('.home')
about = document.querySelector('.about')
service = document.querySelector('.service')
contact = document.querySelector('.contact')
log = document.querySelector('.log')

bars.addEventListener("click", () => {
    home.classList.toggle("v-class");
    about.classList.toggle("v-class");
    service.classList.toggle("v-class");
    contact.classList.toggle("v-class");
    log.classList.toggle("v-class");
    navbar.classList.toggle("h-class");
})



let update = () => {
    let currentDate = new Date();
    time.innerHTML = currentDate;
}
setInterval(update, 1000)
