song1="";
song2="";
scoreleftWrist=0;
scorerigthWrist=0;
leftWristx=0;
rightWristx=0;
leftWristy=0;
rightWristy=0;
song1_status="";
song2_status="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
     canvas=createCanvas(600, 500);
     canvas.center();
     video=createCapture(VIDEO);
     video.hide();
     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);

        fill("#FF0000");
        stroke("#FF0000");

        song1_status=song1.isPlaying();
        song2_status=song2.isPlaying();
    if (scoreleftWrist>0.2){
        circle(leftWristx,leftWristy,20);
        song1.stop();
        if(song2_status==false){
            song2.play();
            document.getElementById("song").innerHTML= "playing - peter pan song"
        }
    }
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    scoreLeftWrist =  results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
    
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        
  }
}

