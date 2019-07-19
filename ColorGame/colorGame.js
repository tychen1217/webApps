var numSquares = 6;
var colors = [];
var pickedColor;
var nightmare = false;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", clickMode);
    }
    for(var i = 0; i < squares.length; i++) {
        // add click listeners
        squares[i].addEventListener("click", compareColor);
    }
    resetGame();
    resetButton.addEventListener("click", resetGame);
}

function clickMode() {
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    modeButton[2].classList.remove("selected");
    this.classList.add("selected");
    if (this.textContent === "Easy") {
        numSquares = 3;
    }
    else if (this.textContent === "Normal") {
        numSquares = 6;
        nightmare = false;
    }
    else {
        numSquares = 6;
        nightmare = true;
    }
    resetGame();
}

function resetGame() {
    messageDisplay.textContent = "";

    if (nightmare) {
        colors = generateNightmareColors(numSquares);
    }
    else {
        colors = generateRandomColors(numSquares);
    }
    pickedColor = pickColor();
    for(var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
            squares[i].addEventListener("click", compareColor);
        }
        else {
            squares[i].style.display = "none";
        }
    }
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New";
    h1.style.backgroundColor = "steelblue";
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function generateNightmareColors(num) {
    var arr = [];
    var RGB = [];

    for(var i = 0; i < 3; i++){
        RGB.push(Math.floor(Math.random() * 256));
    }

    var pickOneRGB = Math.floor(Math.random() * 3);

    for(var i = 0; i < num; i++){
        var tuneColor = Math.floor(Math.random() * 101);
        RGB[pickOneRGB] = RGB[pickOneRGB] - 50 + tuneColor;            

        var colorString = "rgb(" + RGB[0] + ", " + RGB[1] + ", " + RGB[2] + ")"
        arr.push(colorString);
    }   
    return arr;
}


function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + blue + ", " + green + ")";
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function compareColor() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "You are RIGHT!";
        resetButton.textContent = "Play again?"
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
    }
    else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
    }
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}







