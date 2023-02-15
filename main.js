pulsoDireitoX = 0;
pulsoEsquerdoX = 0;
olhoEsquerdoX = 0;
olhoEsquerdoY = 0;
difference = 0;

function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(450, 350);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses); // pose ele informa qual objeto vc vai pegar (se e skeleton ou pose)
}
function modelLoaded(){
    console.log("modelo carregado");
}
function gotPoses(result){
    console.log(result);
    if(result.length > 0){
        pulsoDireitoX = result[0].pose.leftWrist.x;
        pulsoEsquerdoX = result[0].pose.rightWrist.x;
        olhoEsquerdoX= result[0].pose.leftEar.x;
        olhoEsquerdoY= result[0].pose.leftEar.y;
        difference = floor((pulsoDireitoX - pulsoEsquerdoX)/2);
    }
}
function draw(){
    background("#fff");
    text("Texto Legal", olhoEsquerdoX, olhoEsquerdoY);
    textSize(difference);
}