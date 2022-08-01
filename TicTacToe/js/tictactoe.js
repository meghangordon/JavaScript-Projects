//KEEPS TRACK OF WHOS TURN IT IS
let activePlayer = 'X';
//STORES AN ARRAY OF MOVES
let selectedSquares = [];

//TO PLACE X OR O IN A SQUARE
function placeXOrO(squareNumber) {



    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        let select = document.getElementById(squareNumber);
//CHECKS ON WHOS TURN IT IS
        if (activePlayer === 'X') {

            select.style.backgroundImage = 'url("images/x.png")';

        } else {

            select.style.backgroundImage = 'url("images/o.png")';
        }
// SQUARE NUMBER AND ACTIVE PLAYER ARRAY
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

//CHANGING THE ACTIVE PLAYER
        if (activePlayer === 'X') {

            activePlayer = 'O';

        } else {

            activePlayer = 'X';
        }
//PLACEMENT SOUND
        audio('./media/place.mp3');
//CHECKS TO SEE IF IT IS COMPUTERS TURN
        if (activePlayer === 'O') {

            disableClick();

            setTimeout(function () { computersTurn(); }, 1000);
        }
// RETURNING TRUE NEEDED FOR THE COMPUTERS TURN FUNCTION TO WORK
        return true;
    }
//RESULTS WITH COMPUTER SELECTING RANDOM SQUARE
    function computersTurn() {

        let success = false;

        let pickASquare;

        while (!success) {

            pickASquare = String(Math.floor(Math.random() * 9));

            if (placeXOrO(pickASquare)) {

                placeXOrO(pickASquare);

                success = true;
            };
        }
    }
}

//PARSES THE SELECTED SQUARES ARRAY TO SEARCH FOR WIN CONDITIONS
//DRAWLINE() CALLED TO DRAW A LINE ON THE SCREEN IF THE CONDITION IS MET.
function checkWinConditions() {

    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }

    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
        
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
        
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
        
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
        
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
        
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
        
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
        
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
        
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
        
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
        
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
        
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
        
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
        
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
        
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
        
    //CHECKS FOR A TIE. IF NO CONDITIONS ARE MET ABOVE AND 9 SUARES ARE SELECTED THE CODE EXECUTES. 
    else if (selectedSquares.length >= 9) {

        audio('./media/tie.mp3');

        setTimeout(function () { resetGame(); }, 500);
    }

    //TO CHECK FOR 3 IN A ROW
    function arrayIncludes(squareA, squareB, squareC) {

        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);


        if (a === true && b === true && c === true) { return true; }
    }
}

//MAKES THE BODY ELEMENT TEMP UNCLICKABLE
function disableClick() {
    //makes body unclickable
    body.style.pointerEvents = 'none';
    //makes body clickable after 1sec.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//TAKES A STRING PARMETER OF THE PATH SET EARILER FOR PLACEMENT SOUND PLACE.MP3
function audio(audioURL) {

    let audio = new Audio(audioURL);

    audio.play();
}


//HTML CANVAS TO DRAW WIN LINES
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line access our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //this line give acces to methods/properties to use on our canvas
    const c = canvas.getContext('2d');

    let x1 = coordX1,
        
        y1 = coordY1,

        x2 = coordX2,

        y2 = coordY2,

        x = x1,

        y = y1;
    //Interacts with the canvas
    function animateLineDrawing() {

        const animationLoop = requestAnimationFrame(animateLineDrawing);

        c.clearRect(0, 0, 608, 608);

        c.beginPath();

        c.moveTo(x1, y1);

        c.lineTo(x, y);

        c.lineWidth = 10;

        c.strokeStyle = 'rgba(12, 100, 100, .91)';

        c.stroke();
        //checks if we've reached the endpoints
        if (x1 <= x2 && y1 <= y2) {

            if (x < x2) { x += 10; }

            if (y < y2) { y += 10; }


            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        } 

    //CONDITION FOR 6, 4, 2 WIN CONDITION.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //FUNCTION TO CLEAR CANVAS AFTER WIN LINE IS DRAWN
    function clear() {

        const animationLoop = requestAnimationFrame(clear);

        c.clearRect(0, 0, 608, 608);

        cancelAnimationFrame(animationLoop);
    }
    //Disallows clicking while win sound is playing
    disableClick();

    audio('./media/winGame.mp3');

    animateLineDrawing();

    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//this will reset the game in the event of a tie/win
function resetGame() {

    for (let i = 0; i < 9; i++) {

        let square = document.getElementById(String(i));

        square.style.backgroundImage = '';
    }
    
    selectedSquares = [];
}