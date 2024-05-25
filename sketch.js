function draw() {
    background(220);
    
    stroke("white");
    fill("purple");
    
    console.log(mouseIsPressed);
    rect(mouseX, mouseY, 100, 150);
  }
  function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    stroke("cyan");
    fill("purple");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }