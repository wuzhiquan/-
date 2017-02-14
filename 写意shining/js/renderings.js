var mySwiper = new Swiper('.swiper-container',{
	    pagination: '.pagination',
	    paginationClickable: true,
	    loop: true,
	    autoplay:3000,
	    autoplayDisableOnInteraction: false,
	    moveStartThreshold: 100
	  })
	  $swiperH=$(".swiper-slide").width()/1.94;
	  $(".swiper-container").css("height",$swiperH);
	  $(window).resize(function(){
	  		$swiperH=$(".swiper-slide").width()/1.94;
	 	 	$(".swiper-container").css("height",$swiperH);
	  });

//瀑布流
var fall=document.getElementById("waterfall_ul");

var arrImgs=[];
for(var j=0;j<40;j++){
	var arrImg=["img/"+j+".jpg"];	
	arrImgs.push(arrImg);
	
}
// alert(arrImgs);

// var index=-1;
for(var a=0;a<arrImgs.length;a++){
	var imgs = new Image();
	// imgs.index=a;
	imgs.onload=function(){
		// index++;
		//alert(index);
		// createLi(this.index);
		createLi(this.src);
		// alert(this.src);
	}
	imgs.src=arrImgs[a];
	check();
}

// createLi();
function createLi(a){	
    var li = document.createElement('li');
    var img=document.createElement('img');
    var div=document.createElement('div');
    var span=document.createElement('span');
    // li.style.width="210px";
    fall.appendChild(li);  
    li.appendChild(img); 
    li.appendChild(div);
    div.appendChild(span);
    span.innerHTML="我是文字";
    div.setAttribute('class',"cover");
    // img.setAttribute("src", "img/"+a+".jpg");
    img.setAttribute("src", a);
    change();
}

// check();
function change(){
	var lis=fall.getElementsByTagName("li");
	var lis_W=lis[0].offsetWidth;
	// alert(lis_W);
	var imgs=fall.getElementsByTagName('img');
	// alert(imgs.length);
	var windowCW = document.documentElement.offsetWidth;
	var n = Math.floor(windowCW/lis_W); 

	var center = (windowCW - n*lis_W-(n-1)*10)/2;
	var arrH = []; 
	for(var i=0;i<lis.length;i++){
		var j=i%n;
		// alert(arrH);
		if (arrH.length==n) {                   
                var min = findMin(arrH);              
                lis[i].style.left =center + min*(lis_W+10) +"px";  
                lis[i].style.top = arrH[min]+10 + "px";
                arrH[min] += lis[i].offsetHeight + 10; 

				var k=0;
                for(var b=0;b<n;b++){
                	k=Math.max(arrH[k],arrH[b])==arrH[k] ? k : b;
                } 
                fall.style.height= arrH[k]+'px';
                // alert(min);
            }else{
                arrH[j] = imgs[i].offsetHeight;        
                lis[i].style.left =center + lis_W*j+10*j + "px";
                lis[i].style.top = 0;
            }
	}

	function findMin(arr) {
	    var m = 0;
	    for (var i = 0; i < arr.length; i++) {
	        m = Math.min(arr[m], arr[i]) == arr[m] ? m : i;
	    }
	    return m;
	}
}
window.onload=function(){
    check();
    $("#fall_top").click(function(){
		$("html,body").animate({scrollTop: 0});
	});
}
window.onresize=function(){
	change();
}

// $(document).ready(function(){
// 	$(".cover").click(function(){

// 		// console.log(this.previousSibling.src);
// 		var cover_img=document.getElementById("cover_img");
// 		var big_cover=document.getElementById('big_cover');
// 		cover_img.setAttribute("src", this.previousSibling.src);
// 		big_cover.style.display="block";
// 	});
// 	$("#x").click(function(){
// 		big_cover.style.display="none";
// 	});
// 	$(".cover").hover(function() {
// 		/* Stuff to do when the mouse enters the element */
// 		$(this).animate({opacity:.5});
// 	}, function() {
// 		/* Stuff to do when the mouse leaves the element */
// 		$(this).animate({opacity:0});
// 	});
// });
function check(){
	//点击缩略图查看大图
	$(".cover").click(function(){
		var wh=document.documentElement.clientHeight||document.body.clientHeight;
		var wW=document.documentElement.clientWidth||document.body.clientWidth;
		// console.log(this.previousSibling.src);
		var cover_img=document.getElementById("cover_img");
		var big_cover=document.getElementById('big_cover');
		cover_img.setAttribute("src", this.previousSibling.src);
		big_cover.style.display="block";

		//调整大图宽高和X的left、top值
		// alert(cover_img.offsetWidth/cover_img.offsetHeight);
		if(cover_img.offsetWidth>wW*0.8){
			$("#cover_img").css("width",wW*0.8);

		}
		if(cover_img.offsetHeight>wh*0.8){
			$("#cover_img").css("height",wh*0.8);
		}
		// alert($("#cover_img").width());
		// alert($("#cover_img").offset().left);
		// alert($("#cover_img").height());
		var $xT=(wh-$("#cover_img").height()-20)/2;
		var $xL=$("#cover_img").offset().left+$("#cover_img").width()+20;
		// alert($xL);
		$("#x").css("left",$xL);
		$("#x").css("top",$xT);
	});

	//浏览大图
	$("#x").click(function(){
		big_cover.style.display="none";
	});
	$(".cover").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).animate({opacity:.5});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).animate({opacity:0});

	});
}



