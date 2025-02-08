

const navbarToggle = document.querySelector('.navbar_toggle')
const navbarMenu = document.querySelector('.navbar_menu')

const form = document.getElementById('form');
const result = document.getElementById('result');

function openNavbar()
{
    navbarMenu.classList.toggle('openNavbar')
    navbarToggle.classList.toggle('openNavbar')
}

const myslide = document.querySelectorAll('.fade'),
    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);
let timer = setInterval(autoSlide, 8000);
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
    timer = setInterval(autoSlide, 8000);
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

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    // Get the name input value
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const startDate = formData.get('start-date');
    const endDate = formData.get('end-date');
    const numGuest = formData.get('num-guest');
    console.log(firstName)

    // Create a custom subject
    const subject = `${firstName} sent you a request`;

    // Append the custom subject to the form data
    formData.append('subject', subject);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch( {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

