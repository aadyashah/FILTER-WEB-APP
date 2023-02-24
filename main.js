lipX=0;
lipY=0;

function preload(){
    lipstick=loadImage("lips.png");
} 
function setup(){
 c=createCanvas(300,300);
 c.center();
 w= createCapture(VIDEO);
 w.size(300,300);
 w.hide();

 posenet= ml5.poseNet(w , modelloaded);
posenet.on('pose',gotposes);

}
function modelloaded(){
    console.log("poseNet is intialized");
}
function draw(){
image(w ,0,0,300,300);

image(lipstick,lipX-15,lipY+15,30,30);
}
function gotposes(results){
if(results.length> 0 ){
console.log(results);
lipX=results[0].pose.nose.x;
lipY=results[0].pose.nose.y;
}
}
function take_snap(){
    save("lipstick_filter.png");
}

