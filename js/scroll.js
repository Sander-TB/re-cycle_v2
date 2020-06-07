const backToTop = document.querySelector("#backToTopBtn");

window.addEventListener("scroll", btnVisibility);

function btnVisibility() {
	if (window.pageYOffset > 1000) {
		backToTop.style.display = "block";
	} else {
		backToTop.style.display = "none";
	}
}

backToTop.addEventListener("click", scrollUp);

function scrollUp() {
	window.scrollTo(0, 0);
}
