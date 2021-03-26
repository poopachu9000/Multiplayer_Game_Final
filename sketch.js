var database;
var back_img;
var gameState =0;
var playerCount = 0;
var image1 = 1;
var image2 = 2;
var allPlayers;
var health =0;
var player, form,game;
var main,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

var ground;

var dir = 1;

var image1ref = 1;
var image2ref = 1;


var part1,part2,part3,part4,part5,part6,part7,part8,part9,part10;
var GO = 0;
var ast1,ast2,ast3,ast4;

var down;

var bug,bugIMG;
var bugXref = 200;
var bugYref =200;

//main_animations
var main_run,main_jump,main_fall,main_hurt,main_run2,main_jump2,main_fall2,main_hurt2;
var alien_run,alien_roll,alien_idle,alien_bite,alien_run2,alien_roll2,alien_idle2,alien_bite2;
var randCount = 1;
var randCount2 = 1;
var moveRand = 1;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");

  main_run = loadAnimation("Main/chibi-robot1 copy.png","Main/chibi-robot2 copy.png","Main/chibi-robot3 copy.png","Main/chibi-robot4 copy.png","Main/chibi-robot5 copy.png","Main/chibi-robot6 copy.png")
  main_jump = loadAnimation("Main/jump1.png","Main/jump2.png")
  main_fall = loadAnimation("Main/fall1.png","Main/fall2.png");
  main_idle = loadAnimation("Main/chibi-robot copy.png","Main/chibi-robot copy 2.png");
  main_hurt = loadAnimation("Main/hurt1 copy.png","Main/hurt2 copy.png");

  main_run2 = loadAnimation("Main2/image 7.png","Main2/image 8.png","Main2/image 9.png","Main2/image 10.png","Main2/image 11.png","Main2/image 12.png");
  //main_jump2 = loadAnimation("Main2/image 15.png","Main2/image 16.png");
  //main_fall2 = loadAnimation("Main2/image 13.png","Main2/image 14.png");
  //main_idle2 = loadAnimation("Main2/image 5.png","Main2/image 6.png");
  //main_hurt2 = loadAnimation("Main2/image 2.png","Main2/image 3.png");
  main_jump2 = loadAnimation("Main2/image 15.png","Main2/image 16.png","Main2/image 15.png","Main2/image 16.png","Main2/image 15.png","Main2/image 16.png");
  main_fall2 = loadAnimation("Main2/image 13.png","Main2/image 14.png","Main2/image 13.png","Main2/image 14.png","Main2/image 13.png","Main2/image 14.png");
  main_idle2 = loadAnimation("Main2/image 5.png","Main2/image 6.png","Main2/image 5.png");
  main_hurt2 = loadAnimation("Main2/image 7.png","Main2/image 8.png","Main2/image 9.png","Main2/image 10.png","Main2/image 11.png","Main2/image 12.png");
  back1 = loadImage("Backgrounds/background1.png")

  alien_run = loadAnimation("Alien/rino-fish1 copy.png","Alien/rino-fish2 copy.png","Alien/rino-fish3 copy.png","Alien/rino-fish4 copy.png");
  alien_roll = loadAnimation("Alien/rino-fish-rolling1 copy.png","Alien/rino-fish-rolling2 copy.png","Alien/rino-fish-rolling3 copy.png","Alien/rino-fish-rolling4 copy.png","Alien/rino-fish-rolling5 copy.png","Alien/rino-fish-rolling6 copy.png","Alien/rino-fish-rolling7 copy.png","Alien/rino-fish-rolling8 copy.png");
  alien_bite = loadAnimation("Alien/rino-fish-bite1 copy.png","Alien/rino-fish-bite2 copy.png","Alien/rino-fish-bite3 copy.png","Alien/rino-fish-bite4 copy.png","Alien/rino-fish-bite5 copy.png","Alien/rino-fish-bite6 copy.png","Alien/rino-fish-bite7 copy.png");
  alien_idle = loadAnimation("Alien/idle.png","Alien/idle2.png","Alien/idle3.png","Alien/idle4.png");
  
  alien_run2 = loadAnimation("Alien2/image 21.png","Alien2/image 22.png","Alien2/image 23.png","Alien2/image 24.png");
  alien_roll2 = loadAnimation("Alien2/image 13.png","Alien2/image 14.png","Alien2/image 15.png","Alien2/image 16.png","Alien2/image 17.png","Alien2/image 18.png","Alien2/image 19.png","Alien2/image 20.png");
  alien_bite2 = loadAnimation("Alien2/image 2.png","Alien2/image 3.png","Alien2/image 4.png","Alien2/image 5.png","Alien2/image 6.png","Alien2/image 7.png","Alien2/image 8.png");
  alien_idle2 = loadAnimation("Alien2/image 9.png","Alien2/image 10.png","Alien2/image 11.png","Alien2/image 12.png",);

  ast1 = loadImage("Asteroid/asteroid-1 copy 2.png")
  ast2 = loadImage("Asteroid/asteroid-1 copy.png")
  ast3 = loadImage("Asteroid/asteroid-2 copy 2.png")
  ast4 = loadImage("Asteroid/asteroid-2 copy.png")

  part1 = loadImage("Robot Parts/arm-back-part.png")
  part2 = loadImage("Robot Parts/arm-part.png")
  part3 = loadImage("Robot Parts/forearm-back.png")
  part4 = loadImage("Robot Parts/forearm-front.png")
  part5 = loadImage("Robot Parts/lower-torso-1.png")
  part6 = loadImage("Robot Parts/lower-torso-2.png")
  part7 = loadImage("Robot Parts/lower-torso-3.png")
  part8 = loadImage("Robot Parts/torso1.png")
  part9 = loadImage("Robot Parts/torso2.png")
  part10 = loadImage("Robot Parts/torso3.png")

  bugIMG = loadAnimation("Bugs/bug1 copy.png","Bugs/bug2 copy.png","Bugs/bug3 copy.png","Bugs/bug4 copy.png","Bugs/bug5 copy.png","Bugs/bug6 copy.png");


  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back1);

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     //PLAYER 1 GET HURT, PLAYER 2 BITE
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    textSize(30);
       text("GAME OVER",200,200);
     game.end();
   }
}