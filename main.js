// Create a reference for the canvas
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
window.addEventListener("keydown", my_keydown);




img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if(keyPressed >=48 && keyPressed<=57) {
	
		numberkey();
		document.getElementById("d1").innerHTML="123, you can count! An amazing feat, the number-y thing!"
		console.log("numberkey");
	}	
		else if(keyPressed ==17 && keyPressed==57){
	
			numberkey();
			document.getElementById("d1").innerHTML="123, you can count! An amazing feat, the number-y thing!";
			console.log("numberkey");
		}	
	else if(keyPressed >=37 && keyPressed<=40) {
	
		arrowkey();
		document.getElementById("d1").innerHTML="up,down,left,right, these are the arrow keys~ this doesn't ryhme";
		console.log("arrowkey");
	}
	else if (keyPressed == 17){
		specialkey();
		document.getElementById("d1").innerHTML="special special so special ";
		console.log("specialkey");
	}
	
	else if (keyPressed == 18){
		specialkey();
		document.getElementById("d1").innerHTML="special special so special ";
		console.log("specialkey");
	}
	
	else if (keyPressed == 27){
		specialkey();
		document.getElementById("d1").innerHTML="special special so special ";
	console.log("specialkey");
	}
	 else if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){ 
	
	aplhabetkey();
	document.getElementById("d1").innerHTML="Abc you can see, you have clicked the mighty alphabet key!";
	console.log("alphabetkey");
	 }
	else{
		otherkey();
		document.getElementById("d1").innerHTML="Symbolsymbol or perhapsy other? i dont know .";
		console.log("other/symbolkey");
	}
}


function numberkey()

{
	img_image="numkey.png";
	add();	
}
function arrowkey()
{img_image="Arrkey.png";
add();
}
function specialkey()
{img_image="spkey.png";
add();
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	

function aplhabetkey() {
	img_image="Alpkey.png";
	add();
	}