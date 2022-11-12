let navbutton = document.querySelector(".icons .menu-btn");
let navbar = document.querySelector("header .navbar");
let searchbutton = document.querySelector("header .search");
let search = document.querySelector("header .search-form");
let userbutton = document.querySelector("header .icons .user");
let loginForm = document.querySelector('header .login-form');
let contactbutton = document.querySelector("header .icons  .contact");
let contactInfo = document.querySelector('.contact-info');
let closebutton = document.querySelector("#close-contact-info");
let span = document.querySelector(".up");

navbutton.onclick = () =>{
    navbar.classList.toggle("active");
    search.classList.remove("active");
    loginForm.classList.remove("active")
}
searchbutton.onclick = ()=>{
    search.classList.toggle("active");
    navbar.classList.remove("add");
    loginForm.classList.remove("active");
}
userbutton.onclick = ()=>{
    loginForm.classList.toggle("active");
    search.classList.remove("active");
    navbar.classList.remove("active");
}
contactbutton.onclick = ()=>{
    contactInfo.classList.toggle("active");
    loginForm.classList.remove("active")
    search.classList.remove("active");
    navbar.classList.remove("active");
}
closebutton.onclick = ()=>{
    contactInfo.classList.remove("active");
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

let nextbutton = document.querySelector(".button-next");
let prevbutton = document.querySelector(".button-prev");
let slide = Array.from(document.querySelectorAll(".home section"));

let counter = 1;

nextbutton.onclick = nextButton;
prevbutton.onclick = prevButton;


TheChecker();



function prevButton(){
    if(prevbutton.classList.contains("disabled"))
    {
        return false;
        
    } else{
        
        counter--;
        TheChecker();
    }
}

function nextButton(){    
    if(nextbutton.classList.contains("disabled"))
    {
        return false;


    } else{

        counter++;
        TheChecker();
    }
}



function TheChecker()
{
    slide.forEach((sec)=>{
        sec.style.display="none";
    });

    slide[counter - 1].style.display = 'flex';

    if(counter === 3)
    {
        nextbutton.classList.add("disabled");
    }else{
        nextbutton.classList.remove("disabled");
    }
    if(counter === 1)
    {
        prevbutton.classList.add("disabled");
    }else{
        prevbutton.classList.remove("disabled");
    }

}
window.onscroll = function()
{
    if(window.scrollY >=1000)
    {
        span.classList.add("show");
    } else{
        span.classList.remove("show")
    }

}


span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };