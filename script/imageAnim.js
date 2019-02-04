(() => {
	//variable always comes first
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		let dropZones = document.querySelectorAll('.drop-zone');

	//function goes in middle

	function createPuzzlePieces(pictureIndex)
	{
		// generate puzzle pieces for left hand side
		//debugger;
		pieces.forEach((piece, index) => {
		let newPuzzlePiece = `<img draggable id="pieces${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`

		piecesBoard.innerHTML += newPuzzlePiece;
	});

	puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`

	initDrag();

	}

	//drag and drop goes here
	
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {img.addEventListener("dragstart", function(e) {
			//e.preventDefault();
			console.log('draggin...')

			e.dataTransfer.setData("text/plain", this.id);
		});
	});
	}

	// handle dragover and drop
	// 
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("Drag me Baby");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("Ouch my ASS")

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});


	function resetPuzzlePieces() {
		//empty thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref)
	}
	//event handling at bottom
	
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener('click', resetPuzzlePieces));

	createPuzzlePieces(0);

})();
