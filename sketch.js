var ball;
var database;
var storage;
var form;
var car1;
var car2;
var track;
var car1s;
var car2s;
var gamestate = 0;
var playercount = 0;
var game;
var player;
var form;
var allplayers;
var array = [];
var cars = 0;
function preload() {
  car1 = loadImage("car1.png");
  car2 = loadImage("car4.png");
  track = loadImage("track.jpeg");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  car1s = createSprite(100, 100, 50, 50);
  car1s.addImage(car1);
  array.push(car1s);
  car2s = createSprite(200, 100, 50, 50);
  car2s.addImage(car2);
  array.push(car2s);
  game = new Game();
  game.readGameState();
  if (gamestate == 0) {
    player = new Player();
    player.readPlayerCount();
    form = new Form();
    form.displayForm();
  }
}

function draw() {
  background("white");
  if (playercount == 2) {
    game.writeGameState(1);
  }
  if (gamestate == 1) {
    game.playGame();
  }
 if(gamestate==2){
   game.showRank()
 }
}
