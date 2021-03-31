var canvas;
var music;
var box
var g 
var r
var o
var b

function preload(){
    
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    g = createSprite(300,600,200,40)
    g.shapeColor = "green"
    r = createSprite(500,600,200,40)
    r.shapeColor = "red"
    o = createSprite (100,600,200,40)
    o.shapeColor = "orange"
    b = createSprite(700,600,200,40)
    b.shapeColor = "blue"
  

    //create box sprite and give velocity
    box = createSprite(random(20,750),20,20,20)
    box.shapeColor = "white"
    //box.collide(0,1,2,3)
    box.velocityX = 2
    box.velocityY = 2
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(box.x > width - 20 || box.x < 20){
        box.velocityX = box.velocityX *=-1
    }

    //add condition to check if box touching surface and make it box
    if(box.isTouching(b)){
        box.shapeColor = "blue"
        box.bounceOff()
    }else if(box.isTouching(o)){
        box.shapeColor = "orange"
        box.bounceOff()
    }else if(box.isTouching(r)){
        box.shapeColor = "red"
        box.velocityX = 0
        box.velocityY = 0
        music.play()
    }else if(box.isTouching(g)){
        box.shapeColor = "green"
        box.bounceOff()
    }
    drawSprites()
}
