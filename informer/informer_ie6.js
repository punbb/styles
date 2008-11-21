window.attachEvent('onload', minmax);
window.attachEvent('onresize', minmax);

/* --------------------------------------- */
function minmax()
{
	var dew 		= document.documentElement.clientWidth;
	var bdw 		= document.body.clientWidth;
	var minw 	= 700;
	var minstr 	= minw + "px";
	var maxw 	= 1100;
	var maxstr 	= maxw + "px";
	
	var setw 	= (dew < minw) ? minstr : (dew > maxw) ? maxstr : '100%';
	
	st('mm1').width 	= setw;
	st('mm2').width 	= setw;
	st('mm3').width 	= setw;
};

/* --------------------------------------- */
function el(id) { return document.getElementById(id); }
function st(id) { return el(id).style; }