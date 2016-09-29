(function(w){
/**
 * 沉浸式状态栏
 */
document.addEventListener('plusready',function(){
	console.log("Immersed-UserAgent: "+navigator.userAgent);
	var immersed = 0;
	var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
	if(ms&&ms.length>=3){
		immersed=parseFloat(ms[2]);
	}
	if(!immersed){
		immersed = 30;
	}
	
	w.immersed=immersed;
	
		var t=document.getElementById('header');
		t&&(t.style.paddingTop=45+'px',t.style.background='-webkit-linear-gradient(top,rgba(255,107,0,1),rgba(255,107,0,0.8))',t.style.color='#FFF');
		var t = t.querySelector('#search');
		t && (t.style.background = '#ec5b00', t.style.color = '#f2f2f2');
	
	console.log(ms);
	console.log(immersed);
	
	if(!immersed){
		
		return;
	}
	
	var t=document.getElementById('header');
	t&&(t.style.paddingTop=immersed+'px',t.style.background='-webkit-linear-gradient(top,rgba(255,107,0,1),rgba(255,107,0,0.8))',t.style.color='#FFF');
	var t = t.querySelector('#search');
	t && (t.style.background = '#ec5b00', t.style.color = '#f2f2f2');
	
	t=document.getElementById('content');
	t&&(t.style.marginTop=immersed+'px');
	t=document.getElementById('dcontent');
	t&&(t.style.marginTop=immersed+'px');
	t=document.getElementById('map');
	t&&(t.style.marginTop=immersed+'px');
},false);


})(window);