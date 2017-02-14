var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    direction: 'vertical',
		    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		    }, 
		    onSlideChangeStart: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    } 
});
var $audio=$("audio")[0];
var $music=$(".music");
$audio.pause();
//音乐控制
$(function(){
	var $bol=false;
	$music.click(function(){
		if($bol==false){
			$music.removeClass("music_move");
			$music.attr("src","img/music_off.png");
//			$audio.attr("src","");
			$audio.pause();
			$bol=true;
		}
		else{
			$music.addClass("music_move");
			$music.attr("src","img/music.png");
//			$audio.attr("src","sound/music.mp3");
			$audio.play();
			$bol=false;
		}
	});
});
//视频控制
var $cover_video=$(".cover_video");
var $btn=$(".btn");
$btn.click(function(){
	$cover_video.css("display","none");
	$audio.pause();
	$music.removeClass("music_move");
	$music.attr("src","img/music_off.png");
});
