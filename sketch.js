

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,191,191)
}
function draw() {
}

function mouseClicked() {

  fill(random(5, 255),random(5, 255),random(5, 255) );
  rect(mouseX, mouseY, random(10,300), random(5, 200));
  ellipse(random(mouseX,mouseY), random(10,800), random(10,500),150);
  triangle(random(mouseX+300,mouseY), random(10,800),random(10,600),random(50,400),random(mouseX+200),random(mouseY+50))

}

function keypressed(){
  if(key=='s'){
    saveCanvas('my canvas', 'jpg');
  }else if(key=='r'){
    background('gold');
  }

}
