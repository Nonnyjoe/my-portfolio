const mobileContainer = document.querySelector(".mobile-container");
const profileBtn = document.querySelector(".profile");
const projectsBtn = document.querySelector(".projectsB");
const contactBtn = document.querySelector(".contact");
const downBtn = document.querySelector(".move-down");
const upBtn = document.querySelector(".back-up")
const aboutContainer = document.querySelector(".about-color1");
const moreContainer = document.querySelector(".more");
const submit = document.getElementById("submit");
const profile2 = document.querySelector(".profile2");


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

submit.addEventListener("click", submited);

function submited() {
    setTimeout(function() {
        submit.disabled = true;
        submit.value = "Message Sent"
        submit.classList.add("submited")
    }, 1000);

}

profile2.addEventListener("click", shift);

function shift() {
    console.log("testing")
    mobileContainer.style.marginLeft = "3%";

}