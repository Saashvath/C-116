moustache_x =0
moustache_y =0


function preload(){
moustache= loadImage("https://i.postimg.cc/25jSKsxC/mustache-15056.png")
}


function setup(){


    canvas = createCanvas(400,400)
    canvas.center();
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose' ,gotResult)

}

function draw(){
image(video,0,0,400,400)
//fill(255,255,255)
//stroke(255,255,255)
//circle(moustache_x,moustache_y,30)
image(moustache,moustache_x-25,moustache_y+10,60,30 )

}

function take_picture(){

    save("C-115.png")
}

function modelLoaded(){

    console.log("poseNet Is Working Sucessfuly!")
}
function gotResult(result){

    if(result.length>0){
        moustache_x=result[0].pose.nose.x
        moustache_y=result[0].pose.nose.y
        console.log(result)
        console.log("moustache x =", moustache_x)
        console.log("moustache y = ", moustache_y)
    }
    
}



