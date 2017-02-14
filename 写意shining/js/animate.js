function changewindow(){
	$show_h=$(".showvideo").width()/1.94;
	$(".showvideo").css("height",$show_h);
	$video_pic=$(".video_pic").width()/2;
	$(".video_pic").css("height",$video_pic);
}
changewindow();
$(window).resize(function() {
	changewindow();
});
$(".show_play").click(function(){
	$(".show_play").css("display","none");
	$(".show_img").css("display","none");
});
$(".strut").css("opacity","0");
$(".strut").hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(this).animate({opacity:0.5});
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(this).animate({opacity:0});
}); 
$(".video_pic:even").addClass('video_right');
$(".video_info:even").addClass('video_left');
$(".video_pic:odd").addClass('video_left');
$(".video_info:odd").addClass('video_right');