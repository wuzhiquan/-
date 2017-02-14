function service(){
	var $img_h=$(".list_img img").width()/2.77;
	// $(".service_list").css("height",$img_h);
	$(".service_list li").css("height",$img_h);
	$(".list_img img").css("height",$img_h);
}
service();
$(window).resize(function() {
	service();
});
$(".list1").hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(".list1 .after_pic").animate({opacity:"1"});
	$(".list1 .list_padding").animate({backgroundColor:'#CFDB00'});
	$(".list1 .list_text").animate({color:'#000'});
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(".list1 .after_pic").animate({opacity:"0"});
	$(".list1 .list_padding").animate({backgroundColor:'#B0B0B0'});
	$(".list1 .list_text").animate({color:'#B0B0B0'});
});
$(".list2").hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(".list2 .after_pic").animate({opacity:"1"});
	$(".list2 .list_padding").animate({backgroundColor:'#CFDB00'});
	$(".list2 .list_text").animate({color:'#000'});
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(".list2 .after_pic").animate({opacity:"0"});
	$(".list2 .list_padding").animate({backgroundColor:'#B0B0B0'});
	$(".list2 .list_text").animate({color:'#B0B0B0'});
});
$(".list3").hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(".list3 .after_pic").animate({opacity:"1"});
	$(".list3 .list_padding").animate({backgroundColor:'#CFDB00'});
	$(".list3 .list_text").animate({color:'#000'});
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(".list3 .after_pic").animate({opacity:"0"});
	$(".list3 .list_padding").animate({backgroundColor:'#B0B0B0'});
	$(".list3 .list_text").animate({color:'#B0B0B0'});
});