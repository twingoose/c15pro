Webcam.set({
    width:350
    ,height:300
    ,image_format : "png",
    png_quality:90
});

function take_snapshot(){
    save("my_Filter_Image.png")}
    
function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
canvas.center();
video = createCapure(VIDEO);
video.size(300,300);
video.hide();   

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
console.log('poseNet is Initalized');
}


    function draw() {
image(video,0,0,300,300);
    }




function gotPoses(result)
{
if (result.length > 0)
{
console.log(results)
console.log("nose x=" + results[0].pose.nose.x);
console.log("nose y=" + results[0].pose.nose.y )
}
}




    


















    