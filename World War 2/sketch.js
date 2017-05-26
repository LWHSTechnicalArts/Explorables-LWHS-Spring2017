var input;
var button;
var greeting;
var img;
var song;

function preload() {
  song = loadSound('Assets/Mouse click Sound Effect.mp3');//sound effect
  img = loadImage('Assets/map.png');//background img

}

function setup() {
  createCanvas(1500, 2000);
  image(img, 100, 100);
  noStroke();
  rect(0, 0, 75, 20);
  fill(252, 111, 145);
  text("(" + mouseX + ", " + mouseY + ")", 100, 150);

  input = createInput();//allows for user to create an answer
  input.position(20, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Do you want to learn about WW2?');//question
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);

}

function greet() {
  var name = input.value();
  greeting.html('Great!');//answer to user's input
  input.value('');

}

// cunstructor function for dots
function CountryName(x, y) {
  this.x = x;
  this.y = y;
  ellipse(this.x, this.y, 10, 10)
}

function draw() {
  fill(252, 111, 145);
  ellipse(260, 290, 10, 10) //US
  ellipse(1050, 325, 10, 10) //China
  ellipse(1130, 450, 10, 10) //Dutch East Indies
  ellipse(660, 260, 10, 10) // France
  ellipse(690, 230, 10, 10) //Germany
  ellipse(975, 375, 10, 10) //India
  ellipse(720, 280, 10, 10) //Italy
  ellipse(1155, 400, 10, 10) //Japan
  ellipse(975, 200, 10, 10) //Russia
  count1 = new CountryName(260, 290); //new country US
  count2 = new CountryName(1050, 325) //new Country China
  count3 = new CountryName(1130, 450) //new country Dutch East Indies
  count4 = new CountryName(660, 260) //new country France
  count5 = new CountryName(690, 230) //new country Germany
  count6 = new CountryName(975, 375) // new country India
  count7 = new CountryName(720, 280) // new Country Italy
  count8 = new CountryName(1155, 400) // new country Japan
  count9 = new CountryName(975, 200) // new country Russia
  textSize(25)
  fill(0)
  text("Here are some", 120, 500)//description
  text("examples of majorly", 120, 540)
  text("affected countries", 120, 580)
}


function mousePressed() { //creates a button that displays the information for the country
  var us = dist(260, 290, mouseX, mouseY);
  var china = dist(1050, 325, mouseX, mouseY);
  var dutcheastindies = dist(1130, 450, mouseX, mouseY);
  var france = dist(660, 260, mouseX, mouseY);
  var germany = dist(690, 230, mouseX, mouseY);
  var india = dist(975, 375, mouseX, mouseY);
  var italy = dist(720, 280, mouseX, mouseY);
  var japan = dist(1155, 400, mouseX, mouseY);
  var russia = dist(975, 200, mouseX, mouseY)
  if (us < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40)
    text("United States", 700, 100)
    textSize(15)
    fill(191, 241, 255)
    rect(240, 475, 1160, 150)
    fill(0)
    text("The United States when coming into the war due to the attack on Pearl Harbor on December 1, 1941 and joined in 1942. They joined the Allied Power against the Axis Power,", 820, 500)
    text("becoming a major deciding factor to the result of the war.", 435, 530)
    text("Total Amount Spent: $341,000,000,000", 435, 560)
    text("Civilian and Military Death Count: 418,500", 480, 590)
  }
  if (china < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40)
    text("China", 700, 100)
    textSize(15)
    fill(191, 241, 255)
    rect(240, 475, 1160, 150)
    fill(0)
    text("War Broke out between Japan and China in July 1937 due to China’s desire for national Sovereignty and Japan’s opposing growing imperialism. China was a large support for", 820, 500)
    text(" the US and Britain supplying thousands of troops, but suffered greatly from brutal Japanese Attacks such as the Rape of Nanjing.", 670, 530)
    text("Civilian and Military Death Count: 20,000,000", 480, 590)
  }
  if (dutcheastindies < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40);
    text("Dutch East Indies", 700, 100);
    textSize(15);
    fill(191, 241, 255);
    rect(240, 475, 1160, 150);
    fill(0);
    text("The Dutch East Indies was formed as a colony of the Netherlands in 1800 when the Dutch East Company was nationalized. The Netherlands declared war on Japan on", 820, 500)
    text("December 8,1941. Due to the loss of control over the islands, thousands of Military and civilian Dutch were placed in prison camps and the local population", 780, 530)
    text("were forced as laborers", 345, 560)
    text("Civilin and Military Death Count: 3-4,000,000", 410, 590)
  }

  if (france < 10) {
    song.setVolume(0.3);
    song.play();
    background(255);
    image(img, 100, 100);
    textSize(40);
    text("France", 700, 100);
    textSize(15);
    fill(191, 241, 255);
    rect(240, 475, 1160, 150);
    fill(0);
    text("3 September 1939 France and Great Britain declare war against Germany, after the invasion of Poland. France plunged into a dark age, occupied by the Nazis with the", 800, 500)
    text("terrible implications bombing raids, executions, deportation, murders and famine. Slowly the resistance took shape and began to react, but against such a foe little", 780, 530)
    text("changed. The population waited for liberation, living day by day under a control of an iron fist imposed by the collaboration of the Vichy government, the SS and Gestapo.", 805, 560)
    text("Civilian and Millitary Death Count: 567,600", 480, 590)
  }
  if (germany < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40)
    text("Germany", 700, 100)
    textSize(15);
    fill(191, 241, 255);
    rect(240, 475, 1160, 150);
    fill(0);
    text("Germany with their Nazi leader, Adolf Hitler,  was the country most responsible for starting the war.  After five years of war, Germany had paid the price for starting the", 800, 500)
    text("conflict as they lay virtually destroyed.  They had won early battles but, in the end, World War II had been a disaster for Germany.  The war was a fight to the finish and", 800, 530)
    text("Germany came up short.", 330, 560)
    text("Total Amount Spent: $272,000,000,000", 375, 590)
    text("Civilian and Military Death Count: 6,600,000-8,800,000", 430, 620)
  }
  if (india < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40)
    text("India", 700, 100)
    textSize(15);
    fill(191, 241, 255);
    rect(240, 475, 1160, 150);
    fill(0);
    text("Over 2.6 million Indian troops played a decisive role in the greatest conflict of the 20th century and helped Britain stay in the fight. Indian forces were dispatcher to", 800, 500)
    text("major war zones across the globe. They terrorized German tank divisions in Africa, fought the Japanese in Burma, took part in the invasion of Italy, and played a significant", 830, 530)
    text("part in battles in the Middle East. Equally critical was Indian material help. Weapons, ammunition, timber, steel and especially food, were transported—you could argue", 820, 560);
    text("siphoned off—in vast quantities to Europe.", 410, 590)
    text("Civilian and Military Death Count:3-4,000,000", 410, 620)

  }
  if (italy < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40);
    text("Italy", 700, 100);
    textSize(15);
    fill(191, 241, 255);
    rect(240, 475, 1160, 150);
    fill(0);
    text("In June 1940, Benito Mussolini chose to ally Italy's forces with those of Adolf Hitler. Soon German and Italian armies were battling Allied troops on several fronts. After", 800, 500);
    text("defeating German and Italian forces in North Africa, Allied troops crossed over to Sicily in July 1943 and took the island in thirty-nine days.", 710, 530);
    text("Total Amount Spent: $94,000,000,000", 380, 560);
    text("Civilian and Military Death Count: 457,000", 400, 590);

  }
  if (japan < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40)
    text("Japan", 700, 100)
    textSize(15);
    fill(191, 241, 255);
    rect(240, 475, 1160, 150);
    fill(0);
    text("Japan, an imperial power,During World War II (1939-45), Japan attacked nearly all of its Asian neighbors, allied itself with Nazi Germany and launched a surprise assault", 810, 500)
    text("on the U.S. naval base at Pearl Harbor. Japan became an extremely large impact on the course of the war and left long term effects on other countries.", 750, 530)
    text("Total Amount Spent: $56,000,000,000", 380, 560)
    text("Civilian and Military Death Count: 2,600,000-3,100,000", 430, 590)
  }
  if (russia < 10) {
    song.setVolume(0.3);
    song.play();
    background(255)
    image(img, 100, 100);
    textSize(40)
    text("Russia", 700, 100)
    textSize(15);
    fill(191, 241, 255);
    rect(240, 475, 1160, 150);
    fill(0);
    text("Russia (also known as the Soviet Union, or USSR) played a major part in WW2. With a population of over 190 million in 1939 and an army of approximately 3 million soldiers,", 830, 500)
    text(" Russia entered the war as one of the major powers in a supporting role. The non-aggression pact between Russia and Germany allowed the Soviets to expand their military", 822, 530)
    text(" sphere of influence without repercussions from the Deutschen Reich", 480, 560)
    text("Total Amount Spent: $192,000,000,000", 380, 590)
    text("Civilian and Military Death Count: 24,000,000", 400, 620)

  }
}
/*
Title:World War 2
Imagined, Designed, and Programmed by: Griffin Tsang
Date:5/26/17
Description: This exhibit design allows users to learn about some of the many countries involved during World War 2
Sources of ideas and inspiration (title, author, URL):
 * The Fallen of World War 2, Neil Halloran, https://www.youtube.com/watch?v=DwKPFT-RioU&t=785s
 *
 *
 
Includes media from (title, author, URL)
 * Mouse click Sound Effect, Kiki YT,https://www.youtube.com/watch?v=vDmOwBTUVFY
 * File:BlankMap-World-noborders.png, Wikipedia, https://en.wikipedia.org/wiki/File:BlankMap-World-noborders.png
 *
Includes code from (title, author, URL):
 * 
 * 
 *
 
<Reminders, you can delete:>
<Use command + T to auto-indent your code for cleaner formatting>
<Check that variable and function names are easy to read and understand. eg. "squareButton" vs.
"shapeButton2">
<If you can't remember where you found some code, Google the text to find it.>
<Put your name in the name of this file!>
*/