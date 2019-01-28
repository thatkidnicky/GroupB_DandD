(() => {
	//variable always comes first
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	//function goes in middle

	function createPuzzlePieces(pictureIndex)
	{
		// generate puzzle pieces for left hand side
		//debugger;
		pieces.forEach((piece, index) => {
		let newPuzzlePiece = `<img id="pieces${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`

		piecesBoard.innerHTML += newPuzzlePiece;
	});

	puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`

	}

	function resetPuzzlePieces() {
		//empty thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref)
	}
	//event handling at bottom
	
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener('click', resetPuzzlePieces));

	createPuzzlePieces(0);

})();
