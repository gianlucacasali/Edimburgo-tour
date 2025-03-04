

const navbarToggle = document.querySelector('.navbar_toggle')
const navbarMenu = document.querySelector('.navbar_menu')

function openNavbar()
{
    navbarMenu.classList.toggle('openNavbar')
    navbarToggle.classList.toggle('openNavbar')
}

document.addEventListener('click', function(e){
    let id = e.target.getAttribute('data-itinerary'); // target the attribute name of the element where the click has appeaned
    let parent = document.getElementById(id) // get the parent of the element clicked, id will match with attribute
    let target = parent.querySelector('.itinerary_description') // select the child with the specified class
    target.classList.toggle('hide') // toggle the class open-faw 
    e.target.classList.toggle('rotated')
})


const myslide = document.querySelectorAll('.fade'),
    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);
let timer = setInterval(autoSlide, 10000);
function autoSlide() {
    counter += 1;
    slidefun(counter);
}
function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 10000);
}
function slidefun(n) {
    let i;
    for(i = 0;i<myslide.length;i++){
        myslide[i].style.display = "none";
    }
    for(i = 0;i<dot.length;i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
}



