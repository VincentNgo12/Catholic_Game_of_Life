let sunX, sunY;
let sunRising = true;
let sunRadius = 80;
let numRays = 12;
let minRayLength = 20;
let maxRayLength = 40;
let rayLength = minRayLength;
let rayLengthChange = 0.2; // Change in ray length per frame
let main_player;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  background(255);
  main_player = new Person("Victor");
  let game = new Game(main_player);
  game.play();

  sunX = width / 2;
  sunY = height/2-10;
  angleMode(DEGREES);
}

function draw() {
  // Sky background
  background(247, 178, 209);

  stroke(0);
  strokeWeight(3);
  // Draw the sun
  fill(255, 204, 0); // Yellow
  ellipse(sunX, sunY, sunRadius * 2);

  // Draw sun rays
  drawSunRays(sunX, sunY, numRays, rayLength, sunRadius+10);

  // Draw the ground
  fill(34, 139, 34); // Green
  rect(0, height / 2, width, height / 2);

  // draw player
  draw_person(width/2, height / 2+190, main_player);

   // Update ray length and direction
  rayLength += rayLengthChange;
  if (rayLength > maxRayLength || rayLength < minRayLength) {
    rayLengthChange *= -1; // Reverse the direction of ray length change
  }
}

function drawSunRays(x, y, numRays, length, radius) {
  for (let i = 0; i < numRays; i++) {
    let angle = map(i, 0, numRays, 0, 360);
    let x1 = x + cos(angle) * radius;
    let y1 = y + sin(angle) * radius;
    let x2 = x + cos(angle) * (radius + length);
    let y2 = y + sin(angle) * (radius + length);
    line(x1, y1, x2, y2);
  }
}


function draw_person(x, y, person) {
  let race = (person.race=="ginger") ? "orange" : person.race;
  let size = constrain(person.traits.strength/50, 2, 20);
  let age = 30;
  // Calculate stickman proportions based on age
  let headSize = age * 2;
  let bodyLength = age * 5;
  let armLength = age * 2.5;
  let legLength = age * 3;

  // Draw the head
  fill(race);
  stroke(race);
  strokeWeight(size);
  ellipse(x, y - (headSize/2 + bodyLength), headSize, headSize);

  // Draw the body
  line(x, y, x, y - bodyLength);

  // Draw the arms
  line(x, y - (bodyLength / 1.4), x - armLength, y - (bodyLength / 3));
  line(x, y - (bodyLength / 1.4), x + armLength, y - (bodyLength / 3));

  // Draw the legs
  line(x, y, x - legLength, y + legLength);
  line(x, y, x + legLength, y + legLength);
}