//code inspired by marshmallow game
//healthcare information taken from:
//https://www.vox.com/first-person/2017/3/14/14907348/health-insurance-uninsured-ahca-obamacare
//http://www.nytimes.com/2013/12/05/health/think-the-er-was-expensive-look-at-the-ambulance-bill.html?_r=0
//http://blog.bcbsnc.com/2014/04/5-emergency-room-myths-busted/
//https://www.internations.org/usa-expats/guide/16311-housing-accommodation/us-utilities-16315/amenities-and-utility-costs-2
//health insurance plan from ehealth: https://www.ehealthinsurance.com/
 
var gametext;
var startbutton;
var gamestate = "start";
var leftbutton;
var rightbutton;
var person;
 
 
function setup() {
  createCanvas(400, 400);
  background(200);
  gametext = createP('You will get to choose what sort of life you live, and depending on what healthcare options you have access to, you will be forced to make certain decisions'); //starting information
  gametext.position(0, 0); //positions the writing
  gametext.style("max-width", "400px");
  gametext.style("text-align", "center"); //centers the writing
 
  startbutton = createButton("start your journey"); //creates a button in the center allowing the game to start
  startbutton.position(width / 2.65, 100);
 
  leftbutton = createButton(); //creates a button on the left side which is hidden for the fist slide
  leftbutton.position((width / 6) + 10, 200);
  leftbutton.hide();
 
  rightbutton = createButton(); //creates a button on the right side which is hidden for the fist slide
  rightbutton.position(width / 2, 200);
  rightbutton.hide();
 
  startbutton.mousePressed(buttonAction); //calling function when specific button is pressed
  leftbutton.mousePressed(leftButtonAction);
  rightbutton.mousePressed(rightButtonAction);
 
  person = new Avatar(100, 200);
}
 
function preload() {
  myButtonPressedNoise = loadSound('assets/buttonpressednoise.wav')
  myButtonPressedNoise.setVolume(0.5);
}
 
function draw() {
  background(200);
  if (gamestate === 4.1 || gamestate === 4.2 || gamestate === 5.1 || gamestate === 5.2) {
    person.display(); //shows person
    if (person.x > 300 && person.angle < PI / 2) {
      person.trip(); //tells person to trip when x value reaches 100
    } else if (person.angle < PI / 2) {
      person.move(); //tells person to stop moving after it has rotated to 90 degrees
    } else {
      if (gamestate === 4.1) { //makes a continue button appear
        startbutton.show();
        startbutton.position(300, 350)
        startbutton.html("continue")
        gamestate = 5.1;
      }
      if (gamestate === 4.2) { //makes a continue button appear
        startbutton.show();
        startbutton.position(300, 350)
        startbutton.html("continue")
        gamestate = 5.2;
      }
    }
  }
}
 
function runStart() {
    gametext.html("The healthcare market has just opened up. <br> <br>\
    Your monthly income is $2288, but with the cost of basic amenities (not includng healthcare), you are left with approximately\
    $848 for spending. The cheapest healthcare plan available to you costs $258.53 per month. <br> <br>\
     You have to decide whether you want to live with healthcare or not."); //replaces previous text with new text
    gametext.position(0, 0);
    gametext.style("text-align", "center");
    startbutton.hide(); //hides 'start you journey' button
    leftbutton.show(); //shows left "with healthcare" button
    leftbutton.html("live with healthcare");
    rightbutton.show();//shows right "without healthcare" button
    rightbutton.html("live without healthcare");
    gamestate = 2;
}
 
function buttonAction() {
   myButtonPressedNoise.play();
  if (gamestate === "start") {
    runStart();
  } else if (gamestate === 3.1) {
    gametext.html("You are on your way to work, when you trip over something on the sidewalk");
    gametext.position(0, 0);
    gametext.style("text-align", "center");
    startbutton.hide();
    gamestate = 4.1;
  } else if (gamestate === 3.2) {
    gametext.html("You are on your way to work, when you trip over something on the sidewalk");
    gametext.position(0, 0);
    gametext.style("text-align", "center");
    startbutton.hide();
    gamestate = 4.2;
  } else if (gamestate === 5.1) {
    gametext.html('After tripping on your way to work, your ankle begins to throb and swell up, and you\
    immediately know you won’t be able to make it to work today. On your way home, you ponder whether or \
    not this is worth a visit to the doctor. <br> <br> Because you have coverage for this sort of injury,\
    going to the doctor to check it out seems like the obvious choice. In any scenario, most treatments are covered by your plan anyway.')
    startbutton.hide();
    leftbutton.show();
    leftbutton.position((width / 6.5), 250)
    leftbutton.html('Go to the doctors office');
    rightbutton.show();
    rightbutton.position((width / 2), 250)
    rightbutton.html('Stay home and ignore it');
    gamestate = 6.1;
  } else if (gamestate === 5.2) {
    gametext.html('After tripping on your way to work, your ankle begins to throb and swell up,\
    and you immediately know you won’t be able to make it to work today. On your way home, you ponder\
    whether or not this is worth a visit to the doctor. <br> <br> You have no coverage for this injury,\
    not even for the first doctor’s appointment. You only have so much money, and your ankle might\
    end up being fine in a couple of days, meaning a doctor’s appointment will be a waste of your time \
    and the little money you have. However, there is always the risk that you are seriously injured, and\
    waiting to go to the doctor will make it worse, and treatments will end up costing more. You should think about this decision before you make it.')
    startbutton.hide();
    leftbutton.show();
    leftbutton.position((width / 6.5), 300)
    leftbutton.html('Go to the doctors office');
    rightbutton.show();
    rightbutton.position((width / 2), 300)
    rightbutton.html('Stay home and ignore it');
    gamestate = 6.2;
  } else if (gamestate > 8 && gamestate < 8.2) {
    startbutton.html('Return to start');
    startbutton.position(width / 2.43, 350);
    gametext.html('According to abc news, almost <span style="color:blue">20% of Americans</span>, over <span style="color:blue">40 million</span> adults can\'t afford or access needed healthcare.<br> <br> \
    In 2005, almost <span style="color:blue">one in ten</span> people aged 18 to 64 years old reported not being able to afford prescription drugs and almost <span style="color:blue">10 percent</span> said they \
    postponed getting the medical care they needed.<br><br>\
    Emergency room visits cost an average of <span style="color:blue">$1233</span> for an uninsured person.<br><br>\
    According to the New York Times, an ambulance ride can cost <span style="color:blue">over $1700</span>.<br><br>\
    The story of someone who was taken off of healthcare: https://www.vox.com/first-person/2017/3/14/14907348/health-insurance-uninsured-ahca-obamacare')
    gamestate = 9;
  } else if (gamestate === 9) {
    runStart();
  }
}
 
function leftButtonAction() {
  // myButtonPressedNoise.play();
  if (gamestate === 2) {
    gametext.html("You have chosen to live life with healthcare. Click the button to continue."); //changes text after the left button is pressed
    gametext.position(0, 0);
    gametext.style("text-align", "center");
    leftbutton.hide(); //hides left button
    rightbutton.hide(); //hides right button
    startbutton.show(); //single button reappears
    startbutton.position((width / 2.5) + 10, 100);
    startbutton.html("Continue"); //changes single button text to "continue"
    gamestate = 3.1;
  } else if (gamestate === 6.1) {
    leftbutton.hide();
    rightbutton.hide();
    var randomval = random(0, 100)
    console.log(randomval);
    if (randomval > 50) { //randomizes the result that comes from making a decision
      gamestate = 7.11;
      gametext.html('You chose to visit the doctor! You ended up fracturing your ankle,\
      but the doctor is able to provide you with extensive treatment, most of which is covered by your health insurance.')
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.11;
    } else {
      gamestate = 7.12;
      gametext.html('The doctor told you that you just have a sprained ankle, so you probably would have been fine just\
      staying at home and resting. The doctor was able to wrap your ankle and give you a brace, which will help towards a speedy recovery.')
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.12;
    }
  } else if (gamestate === 6.2) {
    leftbutton.hide();
    rightbutton.hide();
    var randomval2 = random(0, 100)
    console.log(randomval2)
    if (randomval2 > 60) {
      gamestate = 7.15;
      gametext.html('You chose to visit the doctor. After a $200 x-ray, the doctor tells\
      you that you’ve fractured a bone in your ankle. Fortunately you won’t need surgery, but you will need to go to \
      physical therapy twice a week for the next 8 weeks, taking away from your job, and costing at least $2400 (likely more)\
      out of pocket, along with the $1000 from the emergency room procedures.')
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.15;
    } else {
      gamestate = 7.16;
      gametext.html('You visited the emergency room, and after $1000 worth of tests and procedures, the\
      doctor told you that your ankle is just sprained, and that it should heal within the next week or so.\
      The doctor wrapped up your ankle, something you could’ve done yourself for $5 at Walgreens.')
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.16;
    }
  }
}
 
function rightButtonAction() {
  // myButtonPressedNoise.play();
  if (gamestate === 2) {
    gametext.html("You have chosen to live life without healthcare. Click the button to continue."); //changes text after the left button is pressed
    gametext.position(0, 0);
    gametext.style("text-align", "center");
    leftbutton.hide(); //hides left button
    rightbutton.hide(); //hides right button
    startbutton.show(); //single button reappears
    startbutton.position((width / 2.5) + 10, 100);
    startbutton.html("Continue"); //changes single button text to "continue"
    gamestate = 3.2;
  } else if (gamestate === 6.1) {
    leftbutton.hide();
    rightbutton.hide();
    var randomval = random(0, 100)
    console.log(randomval)
    if (randomval > 50) {
      gamestate = 7.13;
      gametext.html('You probably should have chosen to visit the doctor. Your ankle starts to hurt a lot,so you decide\
      it’s probably time to head to the hospital. You’re ankle ends up being fractured, but because you have insurance, you only\
      have to pay $20 for what would have usually been a $200 x-ray. Most of your other treatments are covered by your insurance as well.')
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.13;
    } else {
      gamestate = 7.14;
      gametext.html("You realize that your ankle begins feeling better after resting for a couple days, and you avoided a visit \
      to the doctor because you chose to wait it out. However, you’re still happy that you had the option of visiting the hospital.")
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.14;
    }
  } else if (gamestate === 6.2) {
    leftbutton.hide();
    rightbutton.hide();
    var randomval2 = random(0, 100);
    console.log(randomval2);
    if (randomval2 > 60) {
      gamestate = 7.17;
      gametext.html('You chose not to visit the doctor, hoping your ankle would feel better within the next few days, but it feels\
      much worse than when you first hurt it. You decide it’s time to visit the doctor, and because you didn’t go to the doctor\
      immediately, you ended up fracturing another bone in your ankle along with the first one that was broken. You have to\
      pay 1.5 times the cost physical therapy would have been originally. With the combination of the doctor’s appointment and \
      physical therapy twice a week for 12 weeks, you end up paying over $3700 out of pocket. ')
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.17;
    } else {
      gamestate = 7.18;
      gametext.html('You’re lucky! Your decision to skip visiting the doctor ended up being beneficial, because you just ended up spraining your ankle,\
      and it began to feel better in a week. For $5, you bought an ace bandage and kept it wrapped and stable. Next time, you might not be as lucky.')
      startbutton.show();
      startbutton.html('Continue to healthcare statistics');
      startbutton.position(200, 350);
      gamestate = 8.18;
    }
  }
}
 
 
function Avatar(x, y) { //constructor function for the person tripping animation
  this.x = x;
  this.y = y;
  this.angle = 0; //person starts upright
 
  this.trip = function() {
    this.angle += PI / 180; //the angle will change by 1 degree
  }
 
  this.move = function() {
    this.x += 2; //the person will move by one pixel
  }
 
  this.display = function() {
    fill(0)
    rect(300, 190, 10, 10);
    line(0, 200, 400, 200);
    fill(255);
    push();
    translate(this.x, this.y); //tells the parts of the person to move according to the person would be
    rotate(this.angle);
    ellipse(-14, -70, 20, 20); //original (20, 20, 10, 10)
    line(-14, -60, -14, -20); //original (20, 25, 20, 45)
    line(-24, -50, -14, -40); //original (15, 30, 20, 35)
    line(-4, -50, -14, -40); //original (25, 30, 20, 35)
    line(-14, -20, -28, 0); //original (20, 45, 13, 55)
    line(-14, -20, 0, 0); //original (20, 45, 27, 55)
    pop();
  }
}
 
 
 
 
