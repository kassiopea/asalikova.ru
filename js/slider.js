(function ($) {
	var SlideSpeed = 800;
	var TimeOut = 5000;
	var NeedLinks = true;

	var Slides = $('.slide');

$(document).ready(function(e) {
	Slides.css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $(".slider .slide").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		Slides.eq(slideNum).fadeOut(SlideSpeed).find('.object').removeClass('move-top');
		Slides.eq(slideNum).find('.object-bugs').removeClass('move-right');
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		Slides.eq(slideNum).fadeIn(SlideSpeed, rotator).find('.object').addClass('move-top')
		Slides.eq(slideNum).find('.object-bugs').addClass('move-right');
		$(".control-slide.active").removeClass('active');
		$('.control-slide').eq(slideNum).addClass('active');
		}
if(NeedLinks){
var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
	.prependTo('.slider');		
	$('#nextbutton').click(function(){
		animSlide("next");
		return false;
		})
	$('#prewbutton').click(function(){
		animSlide("prew");
		return false;
		})
}
	var $adderSpan = '';
	Slides.each(function(index) {
			$adderSpan += '<span class = "control-slide">' + index + '</span>';
		});
	$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('.slider-wrap');
	$(".control-slide:first").addClass("active");
	$('.control-slide').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
			}
	$('.slider-wrap').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
});
})(jQuery);

