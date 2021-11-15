status= "";

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(500,300); 

    capture = createCapture(VIDEO);
    capture.hide();

    object_detector = ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("Status").innerHTML="Status: Detecting Object";
}

function modelLoded(){
    console.log("model is loded!!!");
    status= true;
}

function draw(){
    image(capture,0,0,500,400);
}