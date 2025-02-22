//Contact form submission
$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault(); 

        $("#responseMessage")
            .text("Processing your message...")
            .removeClass("text-green-500 text-red-500")
            .addClass("text-yellow-400 opacity-100");

        $.ajax({
            url: "contact.php",
            type: "POST",
            data: $(this).serialize(),
            success: function (response) {
                $("#responseMessage")
                    .text(response) 
                    .removeClass("text-yellow-400 text-red-500")
                    .addClass("text-green-500 opacity-100");
                $("#contactForm")[0].reset(); 
            },
            error: function () {
                $("#responseMessage")
                    .text("Error sending message. Please try again.")
                    .removeClass("text-yellow-400 text-green-500")
                    .addClass("text-red-500 opacity-100");
            }
        });
    });
});

//Sliders
$(document).ready(function(){
    $('.vertical-slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand',
        infinite: true,
        arrows:true,
        prevArrow: $('.vertical-prev'),
        nextArrow: $('.vertical-next'),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 }},
            { breakpoint: 768, settings: { slidesToShow: 2 }},
            { breakpoint: 480, settings: { slidesToShow: 1 }}
        ]
    });

    $('.horizontal-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand',
        infinite: true,
        arrows: true,
        prevArrow: $('.horizontal-prev'),
        nextArrow: $('.horizontal-next'),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 }},
            { breakpoint: 768, settings: { slidesToShow: 1 }}
        ]
    });

    $('.skymenu-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand',
        infinite: false,
        arrows: true,
        prevArrow: $('.skymenu-prev'),
        nextArrow: $('.skymenu-next'),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 }},
            { breakpoint: 768, settings: { slidesToShow: 1 }}
        ]
    });

    $('.italiancoffee-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand',
        infinite: false,
        arrows: true,
        prevArrow: $('.italiancoffee-prev'),
        nextArrow: $('.italiancoffee-next'),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 }},
            { breakpoint: 768, settings: { slidesToShow: 1 }}
        ]
    });

    $('.strip-slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand',
        infinite: true,
        arrows:true,
        prevArrow: $('.strip-prev'),
        nextArrow: $('.strip-next'),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 }},
            { breakpoint: 768, settings: { slidesToShow: 2 }},
            { breakpoint: 480, settings: { slidesToShow: 1 }}
        ]
    });
});

//Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
    const leftCol = document.querySelector(".about-left");
    const rightCol = document.querySelector(".about-right");
    const navbar = document.getElementById("navbar");
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger");
    let lastScrollTop = 0;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0", "-translate-x-20", "translate-x-20");
                    entry.target.classList.add("opacity-100", "translate-x-0");
                }
            });
        },
        { threshold: 0.3 }
    );
    observer.observe(leftCol);
    observer.observe(rightCol);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: "smooth",
                });
            }
            
            mobileMenu.classList.add("hidden");
        });
    });

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop) {
            navbar.style.transform = "translateY(-100%)";
        } else {
            navbar.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop;
    });

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });
});
