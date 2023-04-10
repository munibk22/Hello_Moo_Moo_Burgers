// https://www.youtube.com/watch?v=5XnX83goEZo
//nav bar toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let index = 0; index < navbarLinks.length; index++) {
    const element = navbarLinks[index];
    element.addEventListener("click", function () {
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    })

}
// for (let i in navbarLinks) {
//     // console.log(navbarLinks[i]);
//     const element = navbarLinks[i];
//     element.addEventListener("click", function () {
//         navbar.classList.toggle("active");
//         menuToggleBtn.classList.toggle("active");
//     })
// };

//header sticky
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
})

//search container toggle
const searchbtn = document.querySelector(".search-btn");
const searchContainer = document.querySelector("[data-search-container]");
const closebtn = document.querySelector("[data-search-close-btn]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
searchbtn.addEventListener("click", () => {

    searchContainer.classList.add('active');

});
closebtn.addEventListener("click", () => {
    searchContainer.classList.toggle('active');
})
searchSubmitBtn.addEventListener("click", () => {
    console.log("Hello submit");
});

//move delivery boy cycle on scroll
const deliveryBoy = document.querySelector("[data-delivery-boy]");
let deliveryBoyMove = -80;
let lastScrollPos = 0;
window.addEventListener("scroll", () => {
    let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
    if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        let activeScrollPos = window.scrollY;

        if (lastScrollPos < activeScrollPos) {
            deliveryBoyMove += 2;
        } else {
            deliveryBoyMove -= 1.5;
        }
        lastScrollPos = activeScrollPos;
        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    }
})