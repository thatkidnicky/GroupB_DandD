(() => {
	//select elements that you want to work with
	let theButton = document.querySelector('#buttonHolder img');
	//window.addEventListener("load",changeHeaderText);

	function changeHeaderText() {
		document.querySelector('h1').textContent = "Tiny Meat Gang"
	}

	//event handling goes at bottom
	theButton.addEventListener("cick", changeHeaderText);
	
	// set up the puzzle pieces and boards

})();
