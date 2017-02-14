var cw=document.documentElement.clientHeight || document.body.clientHeight;
$(window).resize(function() {
	/* Act on the event */
	$(".bim_con_part").css("height",cw);
});
$(".bim_con_part").css("height",cw);

document.onmousewheel = function (e) {
	var e = e || window.event;
	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
	// alert(scrolltop);
	if (e.wheelDelta<0) {
		//向下滚动
		if(scrolltop%cw!=0){
			var top=(Math.ceil(scrolltop/cw))*cw-scrolltop-66;
			// console.log(Math.ceil(scrolltop/cw));
			scrolltop+=top;
			// $("body").animate({scrollTop: scrolltop});
			// alert(top);
			if(top==0){
				scrolltop+=cw;		
			}
			$("body").stop().animate({scrollTop: scrolltop},800);
			return false;
		}
		else{
			scrolltop+=cw;
			$("body").stop().animate({scrollTop: scrolltop},800);
			return false;
			// alert(scrolltop);
		}
		// console.log(scrolltop);
	}else{
		//向上滚动	
		if(scrolltop%cw!=0){
				// console.log(scrolltop);
				// console.log(Math.floor(scrolltop/cw));
				// console.log(Math.floor(scrolltop/cw)*cw);
				// console.log(scrolltop-Math.floor(scrolltop/cw)*cw);
				var up=scrolltop-Math.floor(scrolltop/cw)*cw;
				scrolltop-=up;
				$("body").stop().animate({scrollTop: scrolltop},800);
				return false;
			}
		else{
			scrolltop-=cw;
		$("body").stop().animate({scrollTop: scrolltop},800);
		return false;
		}
	}
	if (e.preventDefault) {
		e.preventDefault;
	};
}

//向上滚动回到顶部
var top=document.getElementById("totop");
var timer = null;
top.onclick=function(){
	var start = document.documentElement.scrollTop || document.body.scrollTop;
	var change = -start
	TweenFn(start,change);
}
function TweenFn(start,change){
	var start = start;		//开始位置
	var change = change;	//移动距离（可正负，或者说向上向下）
	var t = 0;				//从0步开始
	var endT = 30;			//30步走到终点
	clearInterval(timer);
	timer = setInterval(function(){
		t++;
		if (t >= endT) {
			clearInterval(timer);
		}
		document.body.scrollTop = Tween.Sine.easeOut(t,start,change,endT);
		document.documentElement.scrollTop = Tween.Sine.easeOut(t,start,change,endT);
	}, 30);
}