song="";
leftwristX=0;
leftwristY=0;
righttwristX=0;
rightwristY=0;

function preload()
{song=loadSound("music.mp3");}

function setup()
{canvas=createCanvas(600,500);
canvas.position(445,245)
video= createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);}

function modelLoaded()
{console.log("posenet is initialised")}

function draw()
{image(video,0,0,600,500);}

function play()
{song.play();
song.setVolume(0.5)
song.rate(1)}

function pause()
{song.pause();}
 
function gotPoses(results)
{if (results.length>0);
{console.log(results);
leftwristX=results[0].pose.leftWrist.x;
leftwristY=results[0].pose.leftWrist.y;
console.log("leftwristx="+leftwristX+"leftwristY="+leftwristY);

rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0].pose.rightWrist.y;
console.log("rightwristx="+rightwristX+"rightwristY="+rightwristY);}}

