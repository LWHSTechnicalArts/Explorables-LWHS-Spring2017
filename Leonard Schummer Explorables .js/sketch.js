var prompt;
var x = 180;
var img;
var song;
var greeting;
var problem;
var redBook;
var greenBook;
var blueBook;
var gameState = 0;

function preload() {
  song = loadSound('libraries/assets/219015__michaelkoehler__button-click-microswitch.wav.m4a');
  song.setVolume(0.3);

}


function mouseClicked() {
  song.play();
}


function setup() {
  createCanvas(800, 800);


  blueBook = new Book(440, color(66, 66, 244));
  redBook = new Book(430, color(214, 36, 36));
  greenBook = new Book(420, color(47, 211, 35));

  function greet() {
    var answer = input.value(); //this code is taken from p5.js reference
    greeting.html('Correct!');
    input.value('');
  }

}




//constructor function
function Book(startY, color) {
  this.y = startY
  this.color = color;
  this.display = function() {
    fill(color);
    rect(100, startY, 50, 10);
  }
}

setTimeout(function() {
  alert('Sleep is a vital indicator of overall health and well-being. We spend up to one-third of our lives asleep, and the overall state of our "sleep health" remains an essential question throughout our lifespan, but how much sleep do we really need? Studys show that School age children (6-13) need 9-11 hours ,Teenagers(14-17) need 8-10 hours, Younger adults (18-25) 7-9 hours and Adults (26-64) need 7-9 hours.Using this new information, try and get the stick figure to bed in time assuming that they need to wake up at 7 am. Click the right arrow on your keyboard to move the figure to sleep! Do this as fast as you can to get to sleep before time runs out!'), _onblur();
}, 1000);




function draw() {


  if (gameState == 1) {
  createCanvas(710, 400);

input = createInput();
input.position(20, 65);

button = createButton('submit');
button.position(input.x + input.width, 65);
button.mousePressed(greet);

greeting = createElement('h2', 'what is your name?');
greeting.position(20, 5);

textAlign(CENTER);
textSize(50);
}

function greet() {
var name = input.value();
greeting.html('hello '+name+'!');
input.value('');
gameState = 2;
}



  if (gameState == 2) {
    // making person
    background

    strokeWeight(3);
    fill(0);
    ellipse(x, 375, 50, 50);
    strokeWeight(3);
    line(x, 400, x, 500);
    line(x, 500, x - 25, 550);
    line(x, 500, x + 25, 550);
    line(x - 50, 435, x + 50, 435);
    background(255);

    //making window
    fill(79, 186, 239);
    rect(600, 200, 150, 150);
    fill(239, 242, 92);
    ellipse(675, 275, 40, 40);

    if (x > 500) {
      fill(0);
      rect(600, 200, 150, 150);
      fill(244, 241, 66);
      ellipse(675, 275, 40, 40);
      fill(0);
    }

    //making desk
    strokeWeight(1);
    fill(124, 88, 21);
    rect(75, 450, 10, 120);
    rect(75, 450, 200, 10);
    rect(275, 450, 10, 120);
    rect(140, 510, 10, 60);
    rect(210, 510, 10, 60);
    rect(140, 510, 70, 10);
    blueBook.display();
    redBook.display();
    greenBook.display();


    //making bed
    fill(124, 88, 21);
    rect(500, 500, 10, 70);
    rect(700, 500, 10, 70);
    rect(500, 500, 200, 10);
    rect(700, 400, 10, 100);
    fill(206, 12, 12);
    rect(500, 470, 200, 30);
    fill(255);
    rect(650, 440, 50, 30);


    //making person
    strokeWeight(3);
    fill(0);
    ellipse(x, 375, 50, 50);
    strokeWeight(3);
    line(x, 400, x, 500);
    line(x, 500, x - 25, 550);
    line(x, 500, x + 25, 550);
    line(x - 50, 435, x + 50, 435);

  }
}

  setInterval(function() {
    gameState = 1;
  }, 5500);


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    x = x + 10
    gameState = 2;
  
      
    }

  }
