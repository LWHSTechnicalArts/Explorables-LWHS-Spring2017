var ball;
var player;
var ballx = 3400;
var bally = 9870;
var cloud;
var cloudx = 20
var cloudy = 20
var x = 2


function setup() {

  createCanvas(1000, 700);
  mySlider = createSlider(0, 1000, 0, 10); //moves the player
  mySlider2 = createSlider(0, 40, 0, .25); //changes y possition of ball
  mySlider2.style('width', '180px');
  mySlider3 = createSlider(20, 10, 20, .5); //changes speed of ball in x direction
  mySound.setVolume(0.1);
  mySound.play();
  myP = createP('Slider 1 moves player forward, Slider 2 controls balls y direction, Slider 3 controls balls x direction');
  myP2 = createP('press command R to restart!')
  
}

function draw() {
  background(66, 134, 244); //drawing blue sky background
  push();
  scale(.35, .35); //clouds
  image(cloud, cloudx + x, cloudy); //for cloud: https://commons.wikimedia.org/w/index.php?search=cloud+clip+art&title=Special:Search&fulltext=Search&searchToken=61wk0snxz1ttkp1lmeile2vzo#/media/File:Cloud01.svg
  translate(770, 320);
  image(cloud, cloudx + x, cloudy);
  translate(770, -120);
  image(cloud, cloudx + x, cloudy);
  translate(770, -120);
  image(cloud, cloudx + x, cloudy);

  pop();
  fill(46, 196, 35);
  noStroke();
  rect(0, 500, 1000, 200) //grass

  push(); //ball
  scale(.05, .05)
  image(ball, ballx, bally); //bally * .035, bally * .035);
  if (mySlider.value() > 950) {
    bally = bally - mySlider2.value() //changing y position of ball
    ballx = ballx + mySlider3.value() //change x position of ball
  }
  pop();
  push(); //player and the movement of the player
  scale(.12, .12);
  var val = mySlider.value();
  image(player, val, 3700);
  pop();
  //for ball:https://commons.wikimedia.org/w/index.php?search=soccerball+&title=Special:Search&go=Go&uselang=en&searchToken=9hcv873g4oi4m6tpyi54yizwv#/media/File:Soccerball.svg
  //for player: http://all-free-download.com/free-vector/download/soccer-player-silhouette_54598.html
  noStroke();
  fill(0, 255, 100);
  rect(970, 40, 10, 65);
  rect(980, 45, 30, 55);
  strokeWeight(10);
  stroke(0, 255, 200);
  line(980, 85, 1000, 85)

  translate(0, 150);

  noStroke();
  fill(66, 134, 244);
  rect(970, 40, 20, 75);
  fill(0, 255, 100);
  rect(970, 40, 10, 65);
  rect(980, 45, 30, 55);
  strokeWeight(10);
  stroke(0, 255, 200);
  line(980, 85, 1000, 85)

  translate(0, 150);

  noStroke();
  fill(0, 255, 100);
  rect(970, 40, 10, 65);
  rect(980, 45, 30, 55);
  strokeWeight(10);
  stroke(0, 255, 200);
  line(980, 85, 1000, 85)



}


function preload() {
  ball = loadImage("soccerball.png");
  player = loadImage("soccerplayer3.png");
  mySound = loadSound("339326__inspectorj__bird-whistling-a.wav");
  cloud = loadImage("300px-Cloud01.svg.png");
}