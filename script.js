document.addEventListener("DOMContentLoaded", () => {


    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");


        if (navMenu.classList.contains("active")) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    });


    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("no-scroll");
    }));




    gsap.from(".top-bar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });


    gsap.from(".logo", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });


    gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out"
    });


    gsap.from(".nav-cta", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
    });
});



document.addEventListener("DOMContentLoaded", () => {


    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email-input");
    const errorMsg = document.getElementById("email-error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "" || !emailRegex.test(emailValue)) {

            errorMsg.style.display = "block";
            emailInput.style.border = "1px solid var(--error-red)";
        } else {

            errorMsg.style.display = "none";
            emailInput.style.border = "1px solid transparent";

            window.location.href = '404page.html'
            emailInput.value = "";
        }
    });



    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".footer-col", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.30,
        ease: "power2.out"
    });
});