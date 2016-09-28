	
mui.plusReady(function(){
	mui.init({
	});
	
	
	mui('body').on('tap', 'a', function(){
		var id = this.getAttribute('href');
		var href = this.getAttribute('href');
		var subpage_style = {
			top: '0px',
			bottom: '50px',
			popGesture: "close"
		};
		event.preventDefault();
		
		console.log(href);
		
		if( -1 === href.indexOf('javascript:;') && -1 === href.indexOf('#')){
			clicked(href, id, subpage_style);
		}
	});
	
	/**
	 * 处理点击事件
	 * @id webview 的ID
	 * @style
	 * @aniShow 窗口动画
	 * @s 是否允许重复新建页面(?不确定是否此作用)
	 */
	var preate={};
	var _openw=null;
	function clicked(url, id, style, aniShow, s){
		if(_openw){return;}
		aniShow ||(aniShow = "slide-in-bottom");
		_openw=preate[id];
		if(_openw){
			_openw.showded = true;
			_openw.show(aniShow, null, function(){
				_openw=null;//避免快速点击打开多个页面
			});
		}else{
			_openw=plus.webview.create(url,id, style,{preate:true});
			preate[id]=_openw;
			_openw.addEventListener('loaded',function(){//叶面加载完成后才显示
				_openw.showded=true;
				s||_openw.show(aniShow, null, function(){
					_openw=null;//避免快速点击打开多个页面
				});
				s&&(_openw=null);//避免s模式下变量无法重置
			},false);
			_openw.addEventListener('hide',function(){
				_openw&&(_openw.showded=true);
				_openw=null;
			},false);
			_openw.addEventListener('close',function(){//页面关闭后可再次打开
				_openw=null;
				preate[id]&&(preate[id]=null);//兼容窗口的关闭
			},false);
		}
	}
	
	plus.key.addEventListener('backbutton', function(){
		var thisV = plus.webview.currentWebview();
		console.log(thisV.getURL());
		console.log('bakdjiefjl------------')
	})
	
});

mui.ready(function(){
	
	
});