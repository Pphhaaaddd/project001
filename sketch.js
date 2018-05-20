/*

Author: Suhail Ahamed
Project: CodingFlames challenge, https://www.youtube.com/watch?v=X0kjv0MozuY
Date: 16/05/2018

*/

var buffer1 = [], buffer2 = [], cooling =[];
var rows = 500, cols = 500;
var yStart = 0.0;
var iteration = 0;

function setup() {
	createCanvas(rows, cols);
	pixelDensity(1);

	for(var i=0;i<cols;i++){
		buffer1[i] = [];
		buffer2[i] = [];
		cooling[i] = [];
			for(var j=0;j<rows;j++){
					buffer1[i][j] = 0;
					buffer2[i][j] = 0;
					cooling[i][j] = 0;
			}
	}
}

function bottomLine(noOfRows){
	for(var i=0;i<cols;i++)
		for(var j=rows-1;j>rows-noOfRows-1;j--)
				buffer1[i][j] = 255;
}

function cool(){
	var xoff =0.0;

	for(var i=0;i<cols;i++){
		xoff+=0.05;
		yoff=yStart;
		for(var j=0;j<rows;j++){
			yoff+=0.05;
			cooling[i][j] = noise(xoff,yoff) * 2;
		}
	}

	yStart+=0.05;
	iteration+=0.01;
}

function draw() {
	bottomLine(10);
	cool();

	// background(24,49,68);
	loadPixels();

	for(var i=1;i<cols-1;i++){
			for(var j=1;j<rows-1;j++){
				buffer2[i][j-1] = floor( ( buffer1[i+1][j+0] +
																	buffer1[i-1][j+0] +
																	buffer1[i+0][j+1] +
																	buffer1[i+0][j-1] ) * 0.25 );
				buffer2[i][j-1] -= cooling[i][j];
			}
	}

	//Draw the pixels
	for(var i=0;i<cols;i++){
			for(var j=0;j<rows;j++){
				index = (i+j*cols)*4;
				var colors=getColor();
				pixels[index+0] = colors[0];
				pixels[index+1] = colors[1];
				pixels[index+2] = colors[2];
				pixels[index+3] = buffer2[i][j];
				// console.log(colors);
			}
	}
	updatePixels();
	buffer1 = buffer2;


	// fill(255);
	// noStroke();
	// rect(10,10,10,10);
	//
	// loadPixels();
	// for(var i=0;i<cols;i++){
	// 		for(var j=0;j<rows;j++){
	// 			index = (i+j*cols)*4;
	// 			if(pixels[index] > 250)
	// 				buffer1[i][j] = pixels[index+0];
	// 		}
	// }

	updatePixels();

}

function getColor()
{
  var center = 128;
  var width = 127;
  var frequency = 3.14159265*2;
	var red   = Math.sin(frequency*iteration+2) * width + center;
	var green = Math.sin(frequency*iteration+0) * width + center;
	var blue  = Math.sin(frequency*iteration+4) * width + center;

	iteration+=0.01;
	if(iteration>10000)
		iteration = 0;

	return [red,green,blue];


}
