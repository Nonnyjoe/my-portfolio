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
    close();
    profileColor();
});

projectsBtn.onclick = (() => {
    close();
    projectsColor();
});

contactBtn.onclick = (() => {
    close();
    contactColor();
});

function profile() {
    event.preventDefault();
    close();
    profileColor();
}

function projects() {
    event.preventDefault();
    close();
    projectsColor();
}

function contact() {
    event.preventDefault();
    close();
    contactColor();
}

function close() {
    if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
    }
}

function profileColor() {
    mobileContainer.style.marginLeft = "0%";
    profileBtn.style.color = "#f37b6b";
    projectsBtn.style.color = "#b3b3b3";
    contactBtn.style.color = "#b3b3b3";
}

function projectsColor() {
    mobileContainer.style.marginLeft = "-104vw";
    profileBtn.style.color = "#b3b3b3";
    projectsBtn.style.color = "#f37b6b";
    contactBtn.style.color = "#b3b3b3";
}

function contactColor() {
    mobileContainer.style.marginLeft = "-205vw";
    profileBtn.style.color = "#b3b3b3";
    projectsBtn.style.color = "#b3b3b3";
    contactBtn.style.color = "#f37b6b";
}


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


// form submission