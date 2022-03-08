noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/nhkC4cNn/nose-removebg-preview.png");
}
function setup(){
    Canvas=createCanvas(360,350);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(360,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y-10;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video,0,0,350,350);
    image(clown_nose,noseX,noseY,30,30);
}
function takePic(){
    save('funnyNose.png');
}
