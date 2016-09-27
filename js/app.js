	
mui.plusReady(function(){
	mui.init({
	});
	
	mui('body').on('tap', 'a', function(){
		var id = this.getAttribute('href');
		var href = this.getAttribute('href');
		var subpage_style = {
			top: '46px',
			bottom: '50px',
			popGesture: "close"
		};
		
	var thisV = plus.webview.currentWebview();
	console.log(thisV.getURL());
//		event.preventDefault();
		
		console.log(href);
		
		mui.openWindow({
			id: id,
			url: href,
			styles: subpage_style
		})
	});
	
	plus.key.addEventListener('backbutton', function(){
		var thisV = plus.webview.currentWebview();
		console.log(thisV.getURL());
		console.log('bakdjiefjl------------')
	})
	
});