$(document).ready(function () {
    var owl = $('.mainbanner');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        dotsContainer: ".custom-dots"
    });

    $('.next-btn').on('click', function () {
        owl.trigger('next.owl');
    });

    $('.prev-btn').on('click', function () {
        owl.trigger('prev.owl');
    });
});

$('.blogsec').owlCarousel({
    loop: true,
    margin: 10,
    items: 2.5,
    center: true,
    nav: false,
    ltr: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


function tognav() {
    $(".hidenav").toggleClass("shownav");
    // $(".main").toggleClass("mainbg");
}


const buttons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.tab-section');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
     
        buttons.forEach((btn) => {
            btn.classList.remove('bg-[#002f6c]', 'text-white', 'font-bold');
            btn.classList.add('bg-gray-200', 'text-black');
        });


        sections.forEach((section) => section.classList.add('hidden'));


        button.classList.add('bg-[#002f6c]', 'text-white', 'font-bold');
        button.classList.remove('bg-gray-200', 'text-black');

        const sectionId = button.getAttribute('data-section');
        document.getElementById(sectionId).classList.remove('hidden');
    });
});

buttons[0].classList.add('bg-[#002f6c]', 'text-white', 'font-bold');
buttons[0].classList.remove('bg-gray-200', 'text-black');
sections[0].classList.remove('hidden');


function animateCount(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    let current = start;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const interval = setInterval(() => {
        current +=10;
        element.textContent = current;
        if (current === end) {
            clearInterval(interval);
        }
    }, stepTime);
}

window.onload = function() {
    animateCount("projects", 0, 3500, 2000);  // Project Registration
    animateCount("units", 0, 11000, 2000);    // Units Registered
    animateCount("area", 0, 5000, 2000);    // Area Registered
    animateCount("cities", 0, 120, 1000);     // Cities Covered
};


const topThreshold = 150;
const head = document.getElementById('header'); 

window.addEventListener("scroll", () => {
    if (window.scrollY > topThreshold) {
        head.classList.add("first");
        head.classList.remove("second"); 
    } else {
        head.classList.remove("first"); 
        head.classList.add("second"); 
    }
});


let mybutton = document.getElementById("topbtn");

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  const scrollStep = -window.scrollY / 100; 
  function step() {
    if (window.scrollY > 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}



