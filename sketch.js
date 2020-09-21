var ball,db,movingBall,positionok;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db = firebase.database();
    movingBall = db.ref("ball/position")
    movingBall.on("value",readPosition,showerror)
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    db.ref("ball/position").set({
        "x" : position.x+x,
        "y" : position.y+y
    })
}

function readPosition(data){
    position = data.val();
    movingBall.x = position.x
    movingBall.y = position.y
    console.log(movingBall.x)

}

function showerror(){
    console.log("error")
}