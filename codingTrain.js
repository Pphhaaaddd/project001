
var img;

function setup() {
  createCanvas(720, 400);
  img = loadImage("./train.jpeg");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  loadPixels();

  for(var i=0;i<windowHeight;i++){
    for(var j=0;j<windowWidth;j++){
      var index = (i+j*windowHeight)*4;
      if(pixels[index] >255 ){
        pixels[index+0] = 255;
        pixels[index+1] = 255;
        pixels[index+2] = 255;
        pixels[index+3] = 255;
      }
    }
  }
  updatePixels();

}
