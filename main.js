rightwristX = 0;
leftwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(550,400);
    canvas.position (560,150);
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    background("#200cf7");
    textSize(difference);
    fill("#c3ff00");
    text("Aarush",50,300);
    document.getElementById("font_size").innerHTML = "Font Size Of The Text = " + difference + " px";
}
function modelLoaded() {
    console.log("PoseNet is Loaded")
}
function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log ("leftWristX = " + leftwristX + " rightWristX" + rightwristX + " Difference" + difference);        
    }
}