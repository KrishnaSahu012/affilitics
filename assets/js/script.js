// Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

backToTop.style.display = "flex";

}else{

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// Dark Mode

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});
// ================= EMAILJS CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(

            "service_coi1t8m",

            "template_asjv9u8",

            this

        ).then(function () {

            alert("✅ Message Sent Successfully!");

            contactForm.reset();

        }, function (error) {

            alert("❌ Failed to Send Message");

            console.log(error);

        });

    });

}