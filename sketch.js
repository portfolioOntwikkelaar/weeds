let speed = 18;


function setup() {
  createCanvas(1200, 800);
    // noLoop();
}


function draw() {
    background('rgba(0,255,0, 0.25)');



    let x = width/2;
    let y = height/2;


    noFill();
    stroke(10);
    beginShape(TRIANGLE_STRIP);
    vertex(30, 75);
vertex(40, 20);
vertex(50, 75);
vertex(60, 20);
vertex(70, 75);
vertex(80, 20);
vertex(90, 75);
vertex(30, 75);
vertex(70, 75);
    for (let i=0; i<1000; i++) {


      vertex(x, y);



      
      if (random(0, 200) < 80) {
      x += random(-speed,speed);
      }



    else {
      y += random(-speed,speed);
    }}
    endShape();
}
