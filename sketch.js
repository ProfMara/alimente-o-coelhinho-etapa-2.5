const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var fruta, corda;
var con_fruta;

var cenario;
var frutaIMG;
var coelhoIMG;
var coelho;
var botao;
var som;



function preload() {
    cenario = loadImage("planodefundo.png");
    coelhoIMG = loadImage("coelho.png")

}

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;


    solo = new Ground(200, 700, 600, 20);
    corda = new Rope(8, { x: 245, y: 30 });

    
    

    mais_leve = {
        density:0.0001
    }
    fruta = Bodies.circle(300, 300, 30, mais_leve);

    Composite.add(corda.body, fruta);
    con = new Link(corda, fruta);


    botao = createImg("botão_cortar.png");
    botao.size(50,50);
    botao.position(215,30);


    rectMode(CENTER);
    
    ellipseMode(RADIUS);
    textSize(50);


    


}

function draw() {
    background("cyan");


    corda.show();
   
    ellipse(fruta.position.x, fruta.position.y,60);
    
    solo.show();
    Engine.update(engine);

    drawSprites();

}
