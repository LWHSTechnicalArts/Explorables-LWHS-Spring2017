//where to get colors--> http://html-color-codes.info/colors-from-image/
//where to get climate info --> https://www.epa.gov/climate-impacts/climate-change-impacts-state
//https://www.netl.doe.gov/research/coal/carbon-storage/carbon-storage-faqs/what-are-the-primary-sources-of-co2
//correct answer sound --> https://www.youtube.com/watch?v=oQnrWzrh2Qs


var img;
var button;
var slider;


function preload() {
  img = loadImage('assets/loadmap.png'); //loads image of the map
  mySound = loadSound('assets/correct.mp3');

}


function reload() {
  clear();
  image(img, 450, 100);
  textSize(26);
  text("How does Climate Change Effect California?", 500, 50);
}

function reload2() { //to prevent the progress that counts how many are right/wrong from getting erased, we use a different reload function that doesn't delete the counter on top once the game startes
  fill(0);
  noStroke();
  fill(255, 255, 255);
  rect(0, 50, 400, 300);
}

function setup() {
  createCanvas(1500, 2000);
  textSize(26);
  text("How does Climate Change Effect California?", 500, 50); //creates label on top
  textSize(20);
  text("Click on California to Begin", 650, 100);
  img.resize(1000, 0); //makes image largers
  image(img, 450, 100); //loads image
  ca = color(215, 223, 35); //is the color in the image of the abbrevated state it equals
}

function colorsAreEqual(color1, color2) { //detects to see if the color on the mouse matches the color that is called
  if (red(color1) === red(color2) &&
    green(color1) === green(color2) &&
    blue(color1) === blue(color2)) {
    return true;
  } else return false;
}

function calText(abbrevation, state) { //constructor function of changing text when clicking on the caliornia
  if (colorsAreEqual(get(mouseX, mouseY), ca)) {
    reload();
    textSize(40);
    text("CALIFORNIA", 80, 100); //recalls the label because it gets deleted when reload is called
    today = createButton('TEMPERATURE CHANGE');
    today.position(100, 150);
    textSize(16);
    today.mousePressed(function() {
      textSize(18);
      text("How many degrees do you think temperature has increased in the past 100 years?", 75, 150, 300, 400);
      answers("3", 370);
      today.hide();
    });
  }
}


function answers(a, location1, location2) {
  var correctanswer = createButton(a);
  correctanswer.position(100, location1);
  correctanswer.size(30, 30);
  correctanswer.mousePressed(function() {
    correctanswer.hide();
    wronganswer1.hide();
    wronganswer2.hide();
    wronganswer3.hide();
    today.hide();
    reload();
    matter = createButton("BUT WHY DOES THIS MATTER?");
    matter.position(120, 320);
    textSize(60);
    correct = text("Correct!", 100, 150);
    mySound.setVolume(0.3);
    mySound.play();
    textSize(15)
    text("The temperature in California has changed about 3 degrees Fahrenheit in the past century. This may not seem like a big idea, but click to the box below to discover what this means for California.", 100, 190, 250, 1000);
    matter.mousePressed(function() {
      matter.hide();
      reload();
      text("EFFECTS IN CALIFORNIA", 60, 100);
      textSize(15);
      text("-Warming temperatures and declines in snowpack and streamflow have been observed in the Northwest in recent decades.", 100, 110, 300, 200);
      text("-Climate change will likely result in continued reductions in snowpack and lower summer streamflows, worsening the existing competition for water.", 100, 200, 300, 200);
      text("-Higher temperatures, changing streamflows, and an increase in pests, disease, and wildfire will threaten forests, agriculture, and salmon populations.", 100, 300, 300, 1000);
      countine = createButton("CONTINUE");
      countine.position(180, 380);
      countine.mousePressed(function() {
        clear();
        image(img, 450, 100);
        textSize(26);
        text("How does Climate Change Effect California?", 500, 50);
        countine.hide();
        text("Let's Play a Game", 100, 100, 300, 300);
        textSize(20);
        text("The objective to the game is to make the most efficent choices to save the enviroment in order to prevent future climate change. Click below to start", 60, 150, 300, 300);
        help = createButton("LET'S PLAY");
        help.position(150, 300);
        help.mousePressed(function() {
          help.hide();
          reload();
          circlecount();
          textSize(17);
          text("You have an option; to either Stop purchasing energy-inefficient lightblubs or to countine using those products. You choose to: ", 20, 60, 300, 1000);
          textSize(15);
          text("-Purchase flouresent lightblubs", 50, 170);
          text("-Purchase incandescent lightbulbs", 50, 190, 300, 300);
          firstbox = createButton("1"); //is the correct answer for the first game question
          firstbox.position(20, 160);
          firstbox.mousePressed(function() {
            clear();
            reload();
            textSize(17);
            text("You have an option; to either Stop purchasing energy-inefficient lightblubs or to countine using those products. You choose to: ", 20, 60, 300, 1000);
            textSize(15);
            text("Your choice to replace a 150-watt bulb with a 28-watt compact fluorescent bulb results in 1,020 pounds less carbon dioxide released from power plants over the lifetime of using fluorescent bulb.", 50, 150, 300, 1000);
            firstbox.hide();
            secondbox.hide();
            circlecount();
            green1 = new Count(690, color(70, 255, 51));
            green1.display();
            mySound.setVolume(0.3);
            mySound.play();
          });
          secondbox = createButton("2"); //is the wrong answer for the first game question
          secondbox.position(20, 190);
          secondbox.mousePressed(function() {
            clear();
            textSize(17);
            text("You have an option; to either Stop purchasing energy-inefficient lightblubs or to countine using those products. You choose to: ", 20, 60, 300, 1000);
            textSize(15);
            image(img, 450, 100);
            textSize(26);
            text("How does Climate Change Effect California?", 500, 50);
            textSize(15);
            text("Your choice use a 150-watt bulb rather than a 28-watt compact fluorescent bulb can result in 1,020 pounds more carbon dioxide released from power plants over the lifetime of using  inclandesent bulbs.", 50, 150, 300, 1000);
            firstbox.hide();
            secondbox.hide();
            circlecount();
            red1 = new Count(690, color(255, 0, 0));
            red1.display();
          });
          nextquestion = createButton("NEXT QUESTION"); //loads second question
          nextquestion.position(80, 250);
          nextquestion.mousePressed(function() {
            reload2();
            textSize(17);
            fill(0, 0, 0);
            text("You are given the option to eat more meat/animal products or less. You choose to: ", 20, 60, 300, 1000);
            textSize(15);
            firstbox.hide();
            secondbox.hide();
            nextquestion.hide();
            thirdbox = createButton("1");
            thirdbox.position(20, 130);
            text("-Eat less meat", 50, 140);
            thirdbox.mousePressed(function() {
              reload2();
              mySound.setVolume(0.3);
              mySound.play();
              textSize(17);
              fill(0);
              text("You are given the option to eat more meat/animal products or less. You choose to: ", 20, 60, 300, 1000);
              fourthbox.hide();
              thirdbox.hide();
              textSize(15);
              fill(0);
              text("Your choice to eat less meat can help reduce global green house gas emmissions because according to a report published by the Worldwatch Institute, 51 percent or more of global greenhouse-gas emissions are caused by animal agriculture.", 50, 130, 300, 300);
              green2 = new Count(730, color(70, 255, 51));
              green2.display();
              mySound.setVolume(0.3);
              mySound.play();
            });
            fourthbox = createButton("2");
            fourthbox.position(20, 150);
            text("-Eat more meat", 50, 165);
            fourthbox.mousePressed(function() {
              reload2();
              textSize(17);
              fill(0);
              text("You are given the option to eat more meat/animal products or less. You choose to: ", 20, 60, 300, 1000);
              fourthbox.hide();
              thirdbox.hide();
              textSize(15);
              fill(0);
              text("Your choice to eat more meat can help contribute global green house gas emmissions because according to a report published by the Worldwatch Institute, 51 percent or more of global greenhouse-gas emissions are caused by animal agriculture.", 50, 130, 300, 300);
              red2 = new Count(730, color(255, 0, 0));
              red2.display();
            });
            nextquestion1 = createButton("NEXT QUESTION"); //loads third question
            nextquestion1.position(80, 250);
            nextquestion1.mousePressed(function() {
              reload2();
              fill(0);
              textSize(17);
              text("You are doing the dishes at home. You choose to use: ", 20, 60, 300, 1000);
              nextquestion1.hide();
              fourthbox.hide();
              thirdbox.hide();
              fifthbox = createButton("5");
              fifthbox.position(20, 120);
              textSize(15);
              text("-Hot water", 50, 120, 300, 300);
              fifthbox.mousePressed(function() {
                reload2();
                fifthbox.hide();
                sixthbox.hide();
                fill(0);
                textSize(17);
                text("You are doing the dishes at home. You choose to use: ", 20, 60, 300, 1000);
                textSize(15);
                text("Your choice to use hot water uses more engry to generate the heat", 50, 130, 300, 300);
                red3 = new Count(770, color(255, 0, 0));
                red3.display();
              });
              sixthbox = createButton("6");
              sixthbox.position(20, 140);
              text("-Cold water", 50, 140, 300, 300);
              sixthbox.mousePressed(function() {
                reload2();
                mySound.setVolume(0.3);
                mySound.play();
                fifthbox.hide();
                sixthbox.hide();
                fill(0);
                textSize(17);
                text("You are doing the dishes at home. You choose to use: ", 20, 60, 300, 1000);
                textSize(15);
                text("Your choice to use cold water perserves engry because you do not have to generate the heat", 50, 130, 300, 300);
                green3 = new Count(770, color(70, 255, 51));
                green3.display();
              });
              nextquestion2 = createButton("PLAY AGAIN");
              nextquestion2.position(80, 250);
              nextquestion2.mousePressed(function() {
                reload2();
                fill(0);
                textSize(17);
                text("You are doing the dishes at home. You choose to use: ", 20, 60, 300, 1000);
                nextquestion2.hide();
                sixthbox.hide();
                fifthbox.hide();
                reload();
                textSize(20);
                text("Click on California to Begin", 650, 100);
                calText(ca, "CALIFORNIA");
              });
            });
          });
        });
      });
    });
  });
  var wronganswer1 = createButton("2"); //these are the wrong answers for the tempature change question
  wronganswer1.position(230, 290);
  wronganswer1.size(30, 30);
  wronganswer1.mousePressed(function() {
    wronganswer1.hide();
    text("Incorrect. Try Again", 230, 290);
  });
  var wronganswer2 = createButton("1");
  wronganswer2.position(100, 290);
  wronganswer2.size(30, 30);
  wronganswer2.mousePressed(function() {
    wronganswer2.hide();
    text("Incorrect. Try Again", 60, 290);
  });
  var wronganswer3 = createButton("4")
  wronganswer3.position(230, 370);
  wronganswer3.size(30, 30);
  wronganswer3.mousePressed(function() {
    wronganswer3.hide();
    text("Incorrect. Try Again", 230, 370);
  });

}

function mousePressed() { //When a state is clicked, the text label loads
  calText(ca, "CALIFORNIA", "EFFECTS IN CALIFORNIA");
}

function wronganswer(x, y, label) {
  var wronganswer1 = createButton(label); //these are the wrong answers for the tempature change question
  wronganswer1.position(x, y);
  wronganswer1.size(30, 30);
  wronganswer1.mousePressed(function() {
    wronganswer1.hide();
    text("Incorrect. Try Again", x, y);
  });
}


function Count(startX, color) { //shows how many problems are left/how many right and wrong
  this.x = startX
  this.color = color;
  this.display = function() {
    fill(color);
    stroke(color);
    ellipse(startX, 90, 20, 20);
  }
}

function circlecount() { //creates the five blank circles above the map when the game begins
  ellipse(690, 90, 20, 20);
  ellipse(730, 90, 20, 20);
  ellipse(770, 90, 20, 20);
}


function draw() {}