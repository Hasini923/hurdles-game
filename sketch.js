var canvas , backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form , player , game;

var players , player1 , player2 , player3 , player4 ;

var track , p1img , p2img , p3img , p4img;

function preload(){
    track = loadImage("track image.jpg");
    p1img = loadImage("player1.png");
    p2img = loadImage("player2.png");
    p3img = loadImage("player3.png");
    p4img = loadImage("player4.png");

}

function setup(){
    canvas = createCanvas(displayWidth - 20 , displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}