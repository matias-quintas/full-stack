let actionMenuButton = document.querySelector(".hbImg");
let navSection = document.getElementsByClassName(".menuMobile");
let actionExitButton = document.querySelector(".menuMobileContainer");

function mostrarNav () {
  navSection.style.display = "block";
}

function closeNavBar() {
    navSection.style.display = "none";
}

actionMenuButton.onclick = mostrarNav;
actionExitButton.onclick = closeNavBar;