(() => {
	//variable always comes first
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");
		dropZones = document.querySelectorAll('.drop-zone');

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
	dropZones.forEach(zone => {

		 //drop counter fucntion to elimanite multiple drops in one quadrient
        var dropCounter = 0;
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("Drag me");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("Drop me")

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));

			//counter increases by 1 for every drop
            dropCounter += 1;
            console.log('Counter = ' + dropCounter);
            
            //if the drop counter is less than 1, the puzzle piece goes back to pieces board.
            if (dropCounter > 1) {
                piecesBoard.appendChild(document.querySelector(`#${piece}`));
            }
		});

	//Clicking on puzzle piece in quadrient sends it back to pieces board
        zone.addEventListener("click", function(e) {
            console.log('clicked me');
            
            //removes image and puts it back into pieces board
            let images = e.target;
            zone.removeChild(images);
            piecesBoard.appendChild(images);
            dropCounter = 0;
            }); 
        
        //resets counter to 0 to allow another puzzle piece into that quadrient
        zone.addEventListener('dragstart', function(e) {
            console.log('drag');
            dropCounter = 0;
        });
        
        //counter reset when puzzle piece is clicked
        puzzleSelectors.forEach(puzzle => puzzle.addEventListener('click', function(e) {
            dropCounter = 0;
        }));
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
