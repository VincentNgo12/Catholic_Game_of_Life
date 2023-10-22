let early_morning_color;
let morning_blue;
let sunset;
let night;
let sunX, sunY;
let sunRising = true;
let sunRadius = 80;
let numRays = 12;
let minRayLength = 20;
let maxRayLength = 40;
let rayLength = minRayLength;
let rayLengthChange = 0.4; // Change in ray length per frame
let main_player;
let game;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvas-container');
	background(255);
	main_player = new Person("Victor");
	game = new Game(main_player);
	game.play();
	
	sunX = width / 2;
  sunY = height/2-10;
	angleMode(DEGREES);
	early_morning_color = color(247, 178, 209);
	morning_blue = color(45, 193, 235);
	sunset = color(238, 93, 108);
	night = color(19, 24, 98);
}

function draw() {
	// Age ranges from 0 to 80, mapping it to time from 0 to 24 hours
  let day_time = map(game.stage, 1, 80, 0, 24, true);
	// Sky background
  background(get_sky_color(day_time));
	
	// Calculate the position of the sun and moon
  sunY = map(day_time, 0, 18, height/2-10, -maxRayLength-sunRadius);
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
	if(main_player.traits.married) draw_person(width/2+180, height / 2+190, main_player); //if married
	
	// Display current age in the top-right corner
  displayCurrentAge(game.stage);
	
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
	let age = game.stage;
	let headSize = 80;
	let bodyLength = 180;
	let armLength = 90;
	let legLength = 110;
	// Calculate stickman proportions based on age
	if(age <= 7){
		headSize = age*5.5;
		bodyLength = age*14.2;
		armLength = age*6.5;
		legLength = age*8;
	}else if(age <=25){
		headSize = lerp(7*5.5, 80, (age-8)/17);
		bodyLength = lerp(7*14.2, 180, (age-8)/17);
		armLength = lerp(7*6.5, 90, (age-8)/17);
		legLength = lerp(7*8, 110, (age-8)/17);
	}
	

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


function displayCurrentAge(age) {
  // Display the current age as text in the top-right corner
  fill(0);
  textSize(50);
  textAlign(RIGHT, TOP);
  text(`Age : `, width - 90, 50);
	text(`${age}`, width - 130, 120);
}


function get_sky_color(time){
	if(time<=6){
		return lerpColor(early_morning_color,morning_blue,time-1/5);
	}else if(time <= 12){
		return morning_blue;
	}else if(time <= 15){
		return lerpColor(morning_blue,sunset,time-13/2);
	}else if(time <= 24){
		return lerpColor(sunset,night,time-16/8);
	}
}
