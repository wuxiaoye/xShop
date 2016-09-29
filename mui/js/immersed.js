(function(w){
/**
 * 沉浸式状态栏
 */
document.addEventListener('plusready',function(){
	var immersed = 0;
	var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
	if(ms&&ms.length >= 3){
		immersed=parseFloat(ms[2]);
	}
//	if(!immersed){
//		immersed = 30;
//	}
	
	w.immersed=immersed;
	
	if(!immersed){
		return;
	}
	
	immersed = immersed * 2;
	var t=document.getElementById('header');
	t&&(t.style.paddingTop = immersed+'px');
	
//	t=document.getElementById('content');
//	t&&(t.style.marginTop=immersed+'px');
//	t=document.getElementById('dcontent');
//	t&&(t.style.marginTop=immersed+'px');
//	t=document.getElementById('map');
//	t&&(t.style.marginTop=immersed+'px');
},false);


})(window);