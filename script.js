const topButton = document.getElementById("topButton");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li");
const mbworks = document.querySelector(".logoContainer");
const welcome = document.querySelector(".welcome");
const dropButton = document.querySelector(".drop-button");
const dropMenu = document.querySelector(".drop-menu");

//Scroll to top when Home is clicked
topButton.addEventListener("click", () => {
	document.body.scrollTop = 0; //Added for safari scroll to top
	document.documentElement.scrollTop = 0; //Added for funcitonality for other browsers
});

//Toggle slide of mobile navigation menu
const navSlide = () => {
	burger.addEventListener("click", () => {
		navUl.classList.toggle("nav-active");
	//Animate Links
	navLinks.forEach((link, i) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinksFade 0.5s ease forwards ${i / 5 + 0.2}s`;
		}
	});
	//Burger animation
	burger.classList.toggle("toggle")
	});
}

navSlide();

// adding 2 onscroll events with 2 different timings
window.addEventListener("scroll", () => {
	//adding event for nav background and mbworks position
	if (window.pageYOffset > 400) {
		nav.classList.add("nav-background");
		mbworks.classList.add("logoContainer-moved");
	} else {
		nav.classList.remove("nav-background");
		mbworks.classList.remove("logoContainer-moved");
	};
	//adding event for the welcome text to leave/enter
	if (window.pageYOffset > 200) {
		welcome.classList.add("welcomeLeave");
	} else {
		welcome.classList.remove("welcomeLeave")
	};
});

//Dropdown list on mouse over
const dropDownList = () => {
	dropButton.addEventListener("mouseenter", (e) => {
		dropMenu.classList.add("drop-menu-active");
	});
	dropMenu.addEventListener("mouseleave", (e) => {
		dropMenu.classList.remove("drop-menu-active");
	});
};

dropDownList();