//CONTACT FORM
const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(e) {
	event.preventDefault();

	const firstName = document.querySelector("#firstName");
	const firstNameError = document.querySelector("#firstNameError");
	const firstNameValue = firstName.value;

	const lastName = document.querySelector("#lastName");
	const lastNameError = document.querySelector("#lastNameError");
	const lastNameValue = lastName.value;

	const email = document.querySelector("#email");
	const emailError = document.querySelector("#emailError");
	const invalidEmailError = document.querySelector("#invalidEmailError");
	const emailValue = email.value;

	const message = document.querySelector("#message");
	const messageError = document.querySelector("#messageError");
	const messageValue = message.value;

	if (checkInputLength(firstNameValue)) {
		firstNameError.style.display = "none";
	} else {
		firstNameError.style.display = "block";
	}

	if (checkInputLength(lastNameValue)) {
		lastNameError.style.display = "none";
	} else {
		lastNameError.style.display = "block";
	}

	if (checkInputLength(emailValue)) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	if (validateEmail(emailValue)) {
		invalidEmailError.style.display = "none";
	} else {
		invalidEmailError.style.display = "block";
	}

	if (checkInputLength(messageValue) && messageValue.length > 10) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
}

checkInputLength = (value) => value.trim().length > 0;

validateEmail = (email) => regEx.test(email);
const regEx = /\S+@\S+\.\S+/;

//MAP
function initMap() {
	let options = {
		zoom: 8,
		center: {
			lat: 59.913868,
			lng: 10.752245,
		},
	};
	const map = new google.maps.Map(document.getElementById("map"), options);

	addMarker({ lat: 59.911491, lng: 10.757933 });

	function addMarker(coords) {
		let marker = new google.maps.Marker({
			position: coords,
			map: map,
		});
	}
}
