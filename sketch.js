var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    object1 = createSprite(100, 550, 180, 40);
    object1.shapeColor="green";

    object2 = createSprite(300, 550, 180, 40);
    object2.shapeColor="orange";

    object3 = createSprite(500, 550, 180, 40);
    object3.shapeColor="red";

    object4 = createSprite(700, 550, 180, 40);
    object4.shapeColor="purple";


    //create box sprite and give velocity

    box = createSprite(random(20, 780), 100, 40, 40);
    box.velocityY=7;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
music.play();


    //add condition to check if box touching surface and make it box

if(box.isTouching(object1)){
    box.shapeColor="green";
    box.velocityY=0;
    music.stop();
}

if(box.isTouching(object2)){
    box.shapeColor="orange";
    box.velocityY=0;
    music.stop();
}


if(box.isTouching(object3)){
    box.shapeColor="red";
    box.velocityY=0;
    music.stop();
}


if(box.isTouching(object4)){
    box.shapeColor="purple";
    box.velocityY=0;
    music.stop();
}

    drawSprites();
}
