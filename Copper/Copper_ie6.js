window.attachEvent('onload', minmax);
window.attachEvent('onresize', minmax);

/* --------------------------------------- */
function minmax()
{
	var dew 		= document.documentElement.clientWidth-48;
	var bdw 		= document.body.clientWidth;
	var minw 	= 700-48;
	var minstr 	= minw + "px";
	var maxw 	= 1100-48;
	var maxstr 	= maxw + "px";
	
//	var setw 	= (dew < minw) ? minstr : (dew > maxw) ? maxstr : '100%';
	var setw 	= (dew < minw) ? minstr : (dew > maxw) ? maxstr : dew+'px';
	
	st('h100').width 	= setw;
}

/* --------------------------------------- */
function el(id) { return document.getElementById(id); }
function st(id) { return el(id).style; }