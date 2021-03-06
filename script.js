/* combined event listeners! */

/* ONE TO LISTEN FOR ALL CLICKS ON HTML ELEMENTS! */

document.addEventListener("click", function (event) {
	if (event.target.matches(".hello")) {
		document.querySelector(".post-it").textContent = "You clicked on: Hello!";
	}
	if (event.target.matches(".goodbye")) {
		document.querySelector(".post-it").textContent = "You clicked on: Goodbye!";
	}
});

/* ONE TO LISTEN FOR ALL MOUSEOVERS ON HTML ELEMENTS! */

document.addEventListener("mouseover", function (event) {
	if (event.target.matches(".hello")) {
		document.querySelector(".post-it").textContent =
			"Mouse HOVERS on Hello!";
	}
	if (event.target.matches(".goodbye")) {
		document.querySelector(".post-it").textContent =
			"Mouse HOVERS on Goodbye!";
	}
});
