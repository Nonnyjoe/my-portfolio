const mobileContainer = document.querySelector(".mobile-container");
const profileBtn = document.querySelector(".profile");
const projectsBtn = document.querySelector(".projectsB");
const contactBtn = document.querySelector(".contact");
const downBtn = document.querySelector(".move-down");
const upBtn = document.querySelector(".back-up")
const aboutContainer = document.querySelector(".about-color1");
const moreContainer = document.querySelector(".more");

profileBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "0%";
    profileBtn.style.color = "#f37b6b";
    projectsBtn.style.color = "#b3b3b3";
    contactBtn.style.color = "#b3b3b3";
});

projectsBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "-104vw";
    profileBtn.style.color = "#b3b3b3";
    projectsBtn.style.color = "#f37b6b";
    contactBtn.style.color = "#b3b3b3";
});

contactBtn.onclick = (() => {
    mobileContainer.style.marginLeft = "-205vw";
    profileBtn.style.color = "#b3b3b3";
    projectsBtn.style.color = "#b3b3b3";
    contactBtn.style.color = "#f37b6b";
});

downBtn.onclick = (() => {
    aboutContainer.style.marginTop = "-31rem";
    moreContainer.style.opacity = "1";
    aboutContainer.style.opacity = "0";

});

upBtn.onclick = (() => {
    aboutContainer.style.opacity = "1"
    aboutContainer.style.marginTop = "";
    moreContainer.style.opacity = "0";
});