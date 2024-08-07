var noseX=0;
var noseY=0;
function preload() {
siu = loadImage("20801.webp")
video = loadImage("20801.webp")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();

video= createCapture(VIDEO)
video.hide()
poseNet = ml5.poseNet(video,modeloCarregado)
poseNet.on("pose",resultados)
}

function modeloCarregado(){
    
}

function draw() {
 image(video,0,0,300,300)
}

function resultados(r){
if(r.length>0){
  console.log(r)
noseX = r[0].pose.nose.x
noseY = r[0].pose.nose.y
console.log(noseX+","+noseY)


}
}
function takeSnapshot(){    
  save('myFilterImage.png');
}
function draw() {
image(video,0,0,650,500)
fill("red")
circle(noseX,noseY,50)
image(siu,noseX-50,noseY-10,100,100)
}





