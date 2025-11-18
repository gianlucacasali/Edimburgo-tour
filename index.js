

const navbarToggle = document.querySelector('.navbar_toggle')
const navbarMenu = document.querySelector('.navbar_menu')
const dropdownMenu = document.querySelector('.dropdown_menu')
const tourToggle = document.querySelector('.tour_toggle')

function openNavbar()
{
    navbarMenu.classList.toggle('openNavbar')
    navbarToggle.classList.toggle('openNavbar')
    if(dropdownMenu.classList.contains('openTours') == true)
        dropdownMenu.classList.toggle('openTours')
}

function openTours()
{
    dropdownMenu.classList.toggle('openTours')
    tourToggle.classList.toggle('rotated')

}

function closeTours()
{
    dropdownMenu.classList.toggle('openTours')
}

// // Toggle dropdown on click
// document.getElementById("dropdownToggle").addEventListener("click", function() {
//     document.getElementById("dropdownMenu").classList.toggle("show");
//   });

//   // Close dropdown when clicking outside
//   document.addEventListener("click", function(e) {
//     if (!document.querySelector(".dropdown").contains(e.target)) {
//       document.getElementById("dropdownMenu").classList.remove("show");
//     }
//   });

//   // Highlight current language
//   function highlightCurrentLanguage() {
//     const current = localStorage.getItem("lang");
//     if (!current) return;

//     document.querySelectorAll(".dropdown-item").forEach(item => {
//       item.classList.toggle("active", item.dataset.lang === current);
//     });
//   }

//   // Handle click on a language option
//   function switchLanguage(url, langCode) {
//     localStorage.setItem("lang", langCode);
//     window.location.href = url;
//   }

//   highlightCurrentLanguage();


document.addEventListener('click', function(e){
    let id = e.target.getAttribute('data-itinerary'); // target the attribute name of the element where the click has appeaned
    let parent = document.getElementById(id) // get the parent of the element clicked, id will match with attribute
    let target = parent.querySelector('.itinerary_description') // select the child with the specified class
    target.classList.toggle('hide') // toggle the class open-faw
    e.target.classList.toggle('rotated')
    console.log(target)
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



