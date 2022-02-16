// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const numberOfRows = 10;
const width = canvas.width;
const height = canvas.height;
const size = 500 / numberOfRows;

const img = new Image();   // Create new img element
img.src = './images/character-up.png'; // Set source path

const imgTreas = new Image();
imgTreas.src = './images/treasure.png';

// Iteration 2
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.orientation = '';
    
  }
  moveUp() {
    this.row--;
    this.orientation = 'up';
  }
  moveDown() {
    this.row++;
    this.orientation = 'down';
  }
  moveLeft() {
    this.col--;
    this.orientation = 'left';
  }
  moveRight() {
    this.col++;
    this.orientation = 'right';
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) + 1;
    this.row = Math.floor(Math.random() * 10) + 1;
  }
}

// Iteration 1
function drawGrid() {
   for (x=0; x<numberOfRows;x++) {
    for (y=0 ; y<numberOfRows;y++) {
     if ((x + y) % 2 === 0) {
      context.fillStyle = 'white';
     } else {
      context.fillStyle = 'black';
     } context.strokeRect( x*size, y*size, size, size)
    } 
}
}

// Iteration 3: Drawing the PLayer
function drawPlayer(){
  let x = 0;
  let y = 0;

  x = player.col * 50;
  y = player.row * 50;

  context.drawImage(img, x, y);
  setTimeout('drawPlayer()', 50);
    
};

// Iteration 4: The Treasure Class
function drawTreasure() {
  let x = 0;
  let y = 0;

  x = treasure.col * 50;
  y = treasure.row * 50;

  context.drawImage(imgTreas, x, y, 50, 50);
  setTimeout('drawTreasure()', 50);
};

// Iteration 5: React to player input
window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
event.preventDefault();
  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 38:
      player.moveUp();
      break;
    case 39:
      player.moveRight();
      break;
    case 40:
      player.moveDown();
      break;
  } 
  context.clearRect(0, 0, 500, 500);
  drawEverything();
});
 
const player = new Character(0, 0); // (0,0) = Initial position
const treasure = new Treasure(0, 0);

//player.moveDown(); // Increase by 1 the value of player.row
//player.moveDown(); // Increase by 1 the value of player.row
//player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2
console.log(player.orientation)

treasure.setRandomPosition();


function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
} 

drawEverything();