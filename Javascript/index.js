/* Snake game for the group by Tope*/

// Selecting the canvas element and its context
const gamelayer = document.querySelector("#gamelayer");
const ctx = gamelayer.getContext("2d");

// Selecting other necessary elements from the HTML
const scoretext = document.querySelector("#scoretext");
const resetbutton = document.querySelector("#resetbutton");

// Setting up game dimensions and properties
const gamewidth = gamelayer.width;  // game widht
const gameheight = gamelayer.height; // game height 
const boardbackground = "white"; // background of the game 
const snakecolor = "green"; // snake color to be green
const foodcolor = "red"; // food color to be red
const unitsize = 25; // size of the snake

// Initializing game state variables
let running = false;
let xVelocity = unitsize;
let yVelocity = 0;
let foodx;
let foodY;
let score = 0;
let snake = [
    {x: unitsize * 4, y: 0},
    {x: unitsize * 3, y: 0},
    {x: unitsize * 2, y: 0},
    {x: unitsize, y: 0},
    {x: 0, y: 0},
];

// Event listeners for key presses and reset button clicks
window.addEventListener("keydown", changeDirection);
resetbutton.addEventListener("click", resetGame);

// Start the game
gamestart();

// Function to start the game
function gamestart() {
    running = true;
    scoretext.textContent = score;
    createFood();
    drawfood();
    nextTick(); 
}

// Function to control the game loop
function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawfood();
            movesnake();
            drawsnake();
            checkGameover();
            nextTick();
        }, 150); // Game loop speed set to 150 milliseconds
    } else {
        displayGameover();
    }
}

// Function to clear the game board
function clearBoard() {
    ctx.fillStyle = boardbackground;
    ctx.fillRect(0, 0, gamewidth, gameheight);
}

// Function to create food at random positions
function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitsize) * unitsize;
        return randNum;
    }
    foodx = randomFood(0, gamewidth - unitsize);
    foodY = randomFood(0, gameheight - unitsize);
}

// Function to draw the food on the canvas
function drawfood() {
    ctx.fillStyle = foodcolor;
    ctx.fillRect(foodx, foodY, unitsize, unitsize);
}

// Function to move the snake
function movesnake() {
    const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};
    snake.unshift(head);
    // Check if food is eaten
    if (snake[0].x === foodx && snake[0].y === foodY) {
        score += 1;
        scoretext.textContent = score;
        createFood();
    } else {
        snake.pop();
    }
}

// Function to draw the snake on the canvas
function drawsnake() {
    ctx.fillStyle = snakecolor;
    snake.forEach(snakepart => {
        ctx.fillRect(snakepart.x, snakepart.y, unitsize, unitsize);
    });
}

// Function to change snake direction based on key presses
function changeDirection(event) {
    const keypressed = event.keyCode;
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    const goingup = (yVelocity === -unitsize);
    const goingdown = (yVelocity === unitsize);
    const goingright = (xVelocity === unitsize);
    const goingleft = (xVelocity === -unitsize);

    switch (true) {
        case (keypressed === left && !goingright):
            xVelocity = -unitsize;
            yVelocity = 0;
            break;
        case (keypressed === up && !goingdown):
            xVelocity = 0;
            yVelocity = -unitsize;
            break;
        case (keypressed === right && !goingleft):
            xVelocity = unitsize;
            yVelocity = 0;
            break;
        case (keypressed === down && !goingup):
            xVelocity = 0;
            yVelocity = unitsize;
            break;
    }
}

// Function to check if the game is over
function checkGameover() {
    switch (true) {
        case (snake[0].x < 0):
        case (snake[0].x >= gamewidth):
        case (snake[0].y < 0):
        case (snake[0].y >= gameheight):
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            running = false;
            break;
        }
    }
}

// Function to display game over message
function displayGameover() {
    ctx.font = "50px 'Franklin Gothic Medium', 'Arial Narrow'";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", gamewidth / 2, gameheight / 2);
}

// Function to reset the game
function resetGame() {
    score = 0;
    xVelocity = unitsize;
    yVelocity = 0;
    snake = [
        {x: unitsize * 4, y: 0},
        {x: unitsize * 3, y: 0},
        {x: unitsize * 2, y: 0},
        {x: unitsize, y: 0},
        {x: 0, y: 0},
    ];
    gamestart();
}

/*Work by Sylvia*/
/*Making the outdent icon on the media tag clickable to show the navigation bar*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
