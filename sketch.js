//Suhail's First p5 Project

var myWidth = 600, myHeight = 400;
let c1=[];

class circle{
	constructor(_x,_y,_r){
		this.radius=_r;
		this.x=_x,this.y=_y;
		this.speedX=random(1,6),this.speedY=random(1,8);
	}
	draw(){
		ellipse(this.x,this.y,this.radius);
	}
	updateLoc(){
		this.x+=this.speedX;
		this.y+=this.speedY;
		if(this.x>myWidth-this.radius/2 || this.x<this.radius/2){
			this.speedX*=-1;
		}
		if(this.y>myHeight-this.radius/2 || this.y<this.radius/2){
			this.speedY*=-1;
		}
	}
};


function setup() {
	//createCanvas(windowWidth, windowHeight);
	createCanvas(myWidth, myHeight);
	for(let i=0;i<10;i++)
		c1[i] = new circle(random(30,500),random(30,300),random(15,30));
}

function draw() {

	background(24,49,68);
	for(let i=0;i<10;i++){
		c1[i].draw();
		c1[i].updateLoc();
	}
}
