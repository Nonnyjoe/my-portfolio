const mobileContainer = document.querySelector(".mobile-container");
const profileBtn = document.querySelector(".profile");
const projectsBtn = document.querySelector(".projectsB");
const contactBtn = document.querySelector(".contact");

profileBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "0%";

});

projectsBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "-103%";

});

contactBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "-206%";

});