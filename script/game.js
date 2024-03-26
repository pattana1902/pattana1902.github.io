// Get the canvas element and its 2d context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define the scale for the snake and the number of rows and columns
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// Variables to store the snake, fruit, and score display
let snake;
let fruit;
let scoreDisplay = document.querySelector('.score');

// Get the control buttons for the snake movement
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

// Add event listeners to the control buttons for snake movement
upButton.addEventListener('click', () => moveSnake('Up'));
downButton.addEventListener('click', () => moveSnake('Down'));
leftButton.addEventListener('click', () => moveSnake('Left'));
rightButton.addEventListener('click', () => moveSnake('Right'));

// Function to initialize the game
(function setup() {
    // Initialize the snake and fruit objects
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation(); // Pick a random location for the fruit

    // Set interval to update the game state and redraw the canvas
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        fruit.draw(); // Draw the fruit
        snake.update(); // Update the snake's position and state
        snake.draw(); // Draw the snake

        // Check if the snake eats the fruit
        if (snake.eat(fruit)) {
            fruit.pickLocation(); // Pick a new location for the fruit
            updateScore(); // Update the score display
        }

        snake.checkCollision(); // Check for collision with itself
    }, 250); // Update every 250 milliseconds
}());

// Event listener for keyboard input to control the snake
window.addEventListener('keydown', (event) => {
    const direction = event.key.replace('Arrow', ''); // Get the direction from arrow key input
    snake.changeDirection(direction); // Change the snake's direction
});

// Function to update the score display
function updateScore() {
    scoreDisplay.innerText = 'Score: ' + snake.total;
}

// Function to move the snake in a specified direction
function moveSnake(direction) {
    snake.changeDirection(direction);
}

// Constructor function for the Snake object
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    // Method to draw the snake on the canvas
    this.draw = function () {
        ctx.fillStyle = "#FFFFFF"; // Set snake color to white

        // Draw each segment of the snake's tail
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale); // Draw the snake's head
    };

    // Method to update the snake's position and state
    this.update = function () {
        // Shift the tail segments to follow the head
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        // Add a new segment at the head's position
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        // Move the snake's head
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Wrap around the canvas if the snake reaches the edge
        if (this.x >= canvas.width) {
            this.x = 0;
        }
        if (this.y >= canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width - scale;
        }
        if (this.y < 0) {
            this.y = canvas.height - scale;
        }
    };

    // Method to change the snake's direction based on user input
    this.changeDirection = function (direction) {
        // Prevent the snake from reversing its direction
        switch (direction) {
            case 'Up':
                if (this.ySpeed === 0) {
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                }
                break;
            case 'Down':
                if (this.ySpeed === 0) {
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                }
                break;
            case 'Left':
                if (this.xSpeed === 0) {
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                }
                break;
            case 'Right':
                if (this.xSpeed === 0) {
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                }
                break;
        }
    };

    // Method to check if the snake eats the fruit
    this.eat = function (fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++; // Increase the snake's length
            return true;
        }
        return false;
    };

    // Method to check for collision with itself
    this.checkCollision = function () {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.total = 0; // Reset the snake's length
                this.tail = []; // Clear the tail
            }
        }
    };
}

// Constructor function for the Fruit object
function Fruit() {
    this.x;
    this.y;

    // Method to pick a random location for the fruit
    this.pickLocation = function () {
        this.x = (Math.floor(Math.random() * columns)) * scale;
        this.y = (Math.floor(Math.random() * rows)) * scale;
    };

    // Method to draw the fruit on the canvas
    this.draw = function () {
        ctx.fillStyle = "#FF0000"; // Set fruit color to red
        ctx.fillRect(this.x, this.y, scale, scale); // Draw the fruit
    };
}
