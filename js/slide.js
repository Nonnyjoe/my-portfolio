const mobileContainer = document.querySelector(".mobile-container");
const profileBtn = document.querySelector(".profile");
const projectsBtn = document.querySelector(".projectsB");
const contactBtn = document.querySelector(".contact");
const downBtn = document.querySelector(".move-down");
const upBtn = document.querySelector(".back-up")
const aboutContainer = document.querySelector(".about-color1");

profileBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "0%";
    profileBtn.style.color = "#f37b6b";
    projectsBtn.style.color = "#b3b3b3";
    contactBtn.style.color = "#b3b3b3";
});

projectsBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "-103%";
    profileBtn.style.color = "#b3b3b3";
    projectsBtn.style.color = "#f37b6b";
    contactBtn.style.color = "#b3b3b3";
});

contactBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "-206%";
    profileBtn.style.color = "#b3b3b3";
    projectsBtn.style.color = "#b3b3b3";
    contactBtn.style.color = "#f37b6b";
});

downBtn.onclick = (() => {
    aboutContainer.style.marginTop = "-31rem";
});

upBtn.onclick = (() => {
    aboutContainer.style.marginTop = "";
});