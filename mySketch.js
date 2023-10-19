function setup() {
  let canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('canvas-container');
  background(255);
  let game = new Game(new Person("Victor"));
  game.play();
}

function draw() {

}