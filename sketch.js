/*

Author: Suhail Ahamed
Project: CodingFlames challenge, https://www.youtube.com/watch?v=X0kjv0MozuY
Date: 16/05/2018

*/

var buffer1 = [], buffer2 = [];
var rows, cols;


function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);

	rows = windowWidth; cols = windowHeight;
	for(var i=0;i<rows-1;i++){
		buffer1[i] = [];
		buffer2[i] = [];
			for(var j=0;j<cols-1;j++){
					buffer1[i][j] = 0.0;
					buffer2[i][j] = 0.0;
			}
	}
}


function bottomLine(noOfRows){

	for(var i=0;i<rows-1;i++){
		buffer1[i] = [];
		buffer2[i] = [];
			for(var j=rows-1;j>rows-noOfRows-1;j--){
					buffer1[i][j] = 255.0;
					buffer2[i][j] = 255.0;
			}
	}
}

function draw() {
	bottomLine(100);
	// background(24,49,68);
	loadPixels();
	for(var i=0;i<rows-1;i++){
			for(var j=0;j<cols-1;j++){
				index = (i+j*rows)*4;
				pixels[index+0] = buffer1[i][j];
				pixels[index+1] = buffer1[i][j];
				pixels[index+2] = buffer1[i][j];
				pixels[index+3] = 255;
			}
	}

	updatePixels();

}
