status = "";


function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectname = document.getElementById("input").value;
}

function modelloaded()
{
    console.log("Model Loaded!");
    status = true;
}