noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/R0bfQDjm/lips.png');
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLaoded);
    poseNet.on('pose',gotPoses);
}

function modelLaoded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+20;
    }
}

function draw(){
    image(video,0,0,400,300);
    image(clown_nose,noseX,noseY,40,20);
}

function take_snapshot(){
    save('myPicture.png'); 
}