const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var form
var engine, world;
var database

var gameState = 0
var candidateCount

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);

    database = firebase.database()

    form = new Form();
    candidate = new Candidate();
    game = new Game();

    candidate.getCount();
    game.getState();
}

function draw(){
    background(255);
    form.display()

    if(gameState === 1){

        form.questions()
    }
}