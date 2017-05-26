var person;

function setup() {
  createCanvas(1000, 1000);
  person = new Avatar(50, 50);

}

function draw() {
  background(255)
  person.display();
  if (person.x > 100 && person.angle < PI / 2) {
    person.trip();
  } else if (person.angle < PI/2) {
    person.move();
  }
}


function Avatar(x, y) {
  this.x = x;
  this.y = y;
  this.angle = 0

  this.trip = function() {
    this.angle += PI / 180
  }

  this.move = function() {
    this.x += 1
  }

  this.display = function() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    ellipse(-7, -35, 10, 10); //original (20, 20, 10, 10)
    line(-7, -30, -7, -10); //original (20, 25, 20, 45)
    line(-12, -25, -7, -20); //original (15, 30, 20, 35)
    line(-2, -25, -7, -20); //original (25, 30, 20, 35)
    line(-7, -10, -14, 0); //original (20, 45, 13, 55)
    line(-7, -10, 0, 0) //original (20, 45, 27, 55)
    pop();
  }
}