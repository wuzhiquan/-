var $car=$(".car");
var $golf=$(".golf");
var $yu=$(".yu");
var $h1=$(".h1");
var $h2=$(".h2");
var $h3=$(".h3");
var $jian=$(".jian");
var $direction=$(".direction");
var $btn=$(".btn");
var $w1=$(".w1");
var $w2=$(".w2");
var $lun=$(".lun");
var $car2=$(".car2");
var $fa=$(".fa");
var $car_wrap = $("#car_wrap");
$car_wrap.css("transition",'1.5s');
$car_wrap.css("transform",'translate3d(-120%,0px,0px)');
$yu.css("left","-50%");
$jian.css("left","100%");
var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    direction: 'vertical',
		    onSlideChangeStart: function(swiper){
//		    	alert(swiper.activeIndex);
		    	  switch(swiper.activeIndex){
		    	  	case 0:
		    	  		page1();
						resetall(0);
		    	  		break;
		    	  	case 1:
		    	  		page2();
		    	  		resetall(1);
		    	  		break;
		    	  	case 2:
		    	  		page3();
		    	  		resetall(2);
		    	  		break;
		    	  	case 3:
		    	  		page4();
		    	  		resetall(3);
		    	  		break;
		    	  	case 4:
		    	  		page5();
		    	  		resetall(4);
		    	  		break;
		    	  }   
			    }
		});
function resetall(n){
	var arr = [];
	 arr[0] = resetpage1;
  	 arr[1] = resetpage2;
	 arr[2] = resetpage3;
	 arr[3] = resetpage4;
	 arr[4] = resetpage5;
	for (var i = 0; i<5;i++) {
		if(i!=n){
			arr[i]();
		}
	}
}
function page1(){
	$car_wrap.css("transform",'translate3d(0%,0px,0px)');
	$golf.addClass("animated fadeInUp block");
	$golf.removeClass("none");
	$lun.addClass("lun_ro");
	$yu.animate({
		left:5+"%"
	},1500,function(){
		$yu.addClass("animated rubberBand");
	});
	$jian.animate({
		left:25+"%"
	},1500);
}
function page2(){
	$car2.addClass("animated bounceInRight block");
	$car2.removeClass("none");
}
function page3(){
	$fa.addClass("animated bounceInLeft block");
	$fa.removeClass("none");
}
function page4(){
	$direction.addClass("animated pulse");
	setTimeout(function(){
		$h1.addClass("animated fadeInUp block");
		$h1.removeClass("none");
	},1);
	setTimeout(function(){
		$h2.addClass("animated fadeInUp block");
		$h2.removeClass("none");
	},600);
	setTimeout(function(){
		$h3.addClass("animated fadeInUp block");
		$h3.removeClass("none");
	},1200);	
}
function page5(){
	$btn.addClass("animated jello block");
	$btn.removeClass("none");
	$w1.addClass("animated zoomInLeft block");
	$w1.removeClass("none");
	$w2.addClass("animated zoomInRight block");
	$w2.removeClass("none");
}
function resetpage1(){
	//page1
	$car_wrap.css("transform",'translate3d(-120%,0px,0px)');
  	$lun.removeClass("lun_ro");
  	$yu.css("left","-50%");
	$jian.css("left","100%");
	$golf.removeClass("animated fadeInUp");
	$golf.addClass("none");
	$yu.removeClass("animated rubberBand");	
}
function resetpage2(){
	//page2
	$car2.removeClass("animated bounceInRight block");
	$car2.addClass("none");
}
function resetpage3(){
	//page3
	$fa.removeClass("animated bounceInLeft block");
	$fa.addClass("none");
}
function resetpage4(){
	//page4
	$h1.removeClass("animated fadeInUp block");
	$h1.addClass("none");
	$h2.removeClass("animated fadeInUp block");
	$h2.addClass("none");
	$h3.removeClass("animated fadeInUp block");
	$h3.addClass("none");
	$direction.removeClass("animated pulse");
}
function resetpage5(){
	//page5
	$w1.removeClass("animated zoomInLeft block");
	$w1.addClass("none");
	$w2.removeClass("animated zoomInRight block");
	$w2.addClass("none");
	$btn.removeClass("animated jello block");
	$btn.addClass("none");
}
//loading
var loading=document.getElementById("loading");
var loading_word=document.getElementById("loading_word");
var arrImg=["img/1/bg_1.jpg","img/1/car.png","img/1/golf.png","img/1/jian.png","img/1/yu.png","img/1/lun.png",
			"img/4/direction.png","img/4/h1.png","img/4/h2.png","img/4/h3.png","img/4/logo.png",
			"img/5/big.jpg","img/5/button.png","img/5/w1.png","img/5/w2.png",
			"img/2/bg2.jpg","img/2/car2.png","img/3/bg3.jpg","img/3/fa.png","img/logo.png"];
var index = 0;
for (var i = 0; i < arrImg.length; i++) {
	var img1 = new Image();
	img1.src = arrImg[i];
	img1.onload = function  () {
		index++;
		var str=String(index/arrImg.length);
		loading_word.innerHTML=Math.floor(Number(str.substring(0,4))*100)+"%";
		if (index==arrImg.length) {
			loading.style.display = "none";
			page1();
		};
	}
};