//loading
var canvas=document.getElementById("mycanvas");
var context=canvas.getContext("2d");
var cover=document.getElementById("cover");
var arrImg=["img/1/bg_1.jpg","img/2/bg_2.jpg","img/3/bg_3.jpg",
            "img/4/bg_4.jpg","img/5/bg_5.jpg","img/6/bg_6.jpg",
            "img/7/bg_7.jpg","img/8/bg_8.jpg","img/9/bg_9.jpg",
            "img/2/car2.png","img/4/car4.png","img/10/car10.png",
            "img/3/jifa.png","img/1/budeng.png","img/logo.png",
            "img/4/huanxing.png","img/music_off.png",
            "img/5/huisa.png","img/6/zhiling.png","img/music.png",
            "img/8/fenxiang.png","img/2/chudong.png",
            "img/9/ganai.png","img/1/tansuo.png",
            "img/10/h1.png","img/10/sq.png","img/11/share.png",
            "img/11/video.jpg","img/11/btn.png"];
var index=0;
for(var i=0;i<arrImg.length;i++){
	var img1=new Image();
	img1.src=arrImg[i];
	img1.onload=function(){
		index++;
		var pro1=index/arrImg.length;
		var pro2=parseInt(pro1*100);
		//测试
		// alert(pro1);
		// alert(pro2);
		//绘制背景灰色圆
		context.beginPath();
		context.moveTo(100, 100);
		context.arc(100, 100, 100, 0, Math.PI * 2, false);
		context.closePath();
		context.fillStyle = "#ccc";  
        context.fill();
        //绘制进度条
        context.beginPath(); 
        context.moveTo(100, 100);
        context.arc(100, 100, 100,Math.PI * 1.5,Math.PI * 1.5-Math.PI * 2 * pro1,true);
        context.closePath();  
        context.fillStyle = "#3094d2";  
        context.fill();
        //绘制内部空白
        context.beginPath();  
        context.moveTo(100,100);  
        context.arc(100, 100, 100*0.76, 0, Math.PI * 2, true);  
        context.closePath();  
        context.fillStyle = 'rgba(255,255,255,1)';  
        context.fill();
        // 画一条线  
        context.beginPath();  
        context.arc(100, 100, 100*0.72, 0, Math.PI * 2, true);  
        context.closePath(); 
        context.strokeStyle = "#ccc";  
        context.stroke();
        //在中间写字  
        context.font = "bold 30pt Arial";  
        context.fillStyle = "#3094d2";  
        context.textAlign = 'center';  
        context.textBaseline = 'middle';  
        context.moveTo(100, 100);  
        context.fillText(pro2+"%", 100, 100); 
		if (index==arrImg.length) {
			setTimeout(function(){
				cover.style.display="none";
                $audio.play();
			}, 1000);
		};
	}
}

//绘制背景灰色圆
context.beginPath();
context.moveTo(100, 100);
context.arc(100, 100, 100, 0, Math.PI * 2, false);
context.closePath();
context.fillStyle = "#ccc";  
context.fill();
//绘制进度条
context.beginPath(); 
context.moveTo(100, 100);
context.arc(100, 100, 100,Math.PI * 1.5,Math.PI * 1.5 ,false);
context.closePath();  
context.fillStyle = "#3094d2";  
context.fill();
//绘制内部空白
context.beginPath();  
context.moveTo(100,100);  
context.arc(100, 100, 100*0.76, 0, Math.PI * 2, true);  
context.closePath();  
context.fillStyle = 'rgba(255,255,255,1)';  
context.fill();
// 画一条线  
context.beginPath();  
context.arc(100, 100, 100*0.72, 0, Math.PI * 2, true);  
context.closePath(); 
context.strokeStyle = "#ccc";  
context.stroke();
//在中间写字  
context.font = "bold 30pt Arial";  
context.fillStyle = "#3094d2";  
context.textAlign = 'center';  
context.textBaseline = 'middle';  
context.moveTo(100, 100);  
context.fillText("0%", 100, 100); 