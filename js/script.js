document.getElementById('slider-left').onclick = 
sliderLeft;
var left = 0;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 256;

	if (left<-1024) {
		left = 0;
	}
	polosa.style.left = left + 'px';
}

function sliderRight(){
	var	polosa = document.getElementById('polosa');
	left += 256;

	if (left>0) {
		left =-1024;
	}
	polosa.style.left = left + 'px';
}
