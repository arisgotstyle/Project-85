canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

Image_Array=[
    'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364',
    'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
    'https://media1.s-nbcnews.com/j/newscms/2019_46/3101906/191114-volkswagen-id-space-vizzion-concept-ew-818p_668c65c0dd8ab0befbec99aac57f280f.fit-760w.jpg'
];

random_number=Math.floor(Math.random()*3);

console.log(random_number);

rover_height=90;
rover_width=100;

background_Image=Image_Array[random_number];
rover_Image="https://i.postimg.cc/YqdnnNX1/car1.png";

rover_x=10;
rover_y=10;

function add(){

    background_Imagetag=new Image();
    background_Imagetag.onload=upload_background;
    background_Imagetag.src=background_Image;

    rover_Imagetag= new Image();
    rover_Imagetag.onload=upload_rover;
    rover_Imagetag.src=rover_Image;
}

function upload_background(){

    ctx.drawImage(background_Imagetag,0,0,canvas.width,canvas.height);
}

function upload_rover(){

    ctx.drawImage(rover_Imagetag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){

keypressed = e.keyCode;
console.log(keypressed);
if (keypressed == '40'){
    down();
    console.log("down");
}

if (keypressed == '39'){
    right();
    console.log("right");
}

if (keypressed == '38'){
    up();
    console.log("up");
}

if (keypressed == '37'){
    left();
    console.log("left");
}

}


function up() {
    if (rover_y>=10) {

        rover_y=rover_y-10;

        console.log("when up arrow is pressed, x="+ rover_x + '| y=' + rover_y);
        upload_background();
        upload_rover();
    }

}

function down() {
    if (rover_y<=500) {

        rover_y=rover_y+10;

        console.log("when down arrow is pressed, x="+ rover_x + '| y=' + rover_y);
        upload_background();
        upload_rover();
    }

}

function right() {
    if (rover_x<=700) {

        rover_x=rover_x+10;

        console.log("when right arrow is pressed, x="+ rover_x + '| y=' + rover_y);
        upload_background();
        upload_rover();
    }

}

function left() {
    if (rover_x>=10) {

        rover_x=rover_x-10;

        console.log("when left arrow is pressed, x="+ rover_x + '| y=' + rover_y);
        upload_background();
        upload_rover();
    }

}