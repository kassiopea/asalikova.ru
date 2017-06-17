$(function(){

	

	var checkPosition = function(item){
		var elem_pos = $(item).offset(),
			elem_top = elem_pos.top,
			elem_left = elem_pos.left;
			elem_width = $(item).width();
			elem_heigth = $(item).height();

		var top_scroll = $(document).scrollTop(),
			left_scroll = $(document).scrollLeft(),
			screen_width = $(window).width(),
			screen_height = $(window).height();

		var see_x1 = left_scroll,
			see_x2 = screen_width + left_scroll,
			see_y1 = top_scroll,
			see_y2 = screen_height + top_scroll;

		var elem_x1 = elem_left,
			elem_x2 = elem_left + elem_heigth,
			elem_y1 = elem_top,
			elem_y2 = elem_top + elem_width;

		if (elem_x1 >= see_x1 && elem_x2 <= see_x2 && elem_y1 >= see_y1 && elem_y2 <= see_y2) {
			$(item).fadeIn().addClass('move-top');
		}
		else{

			$(item).fadeOut().removeClass('move-top');
		}

	}

	var menuScroll = function(){
		var sections = $('section');
		var h_hght = $('#main-page').outerHeight();
	    var h_nav = $('.sec-menu').outerHeight();
	    var topNav;

	    $(window).scroll(function(){


			//for fixed menu top bottom
			topNav = $(this).scrollTop();
			if(topNav > h_hght) {
				$('.sec-menu').addClass('sec-menu-fixed');
			}
			else {
				$('.sec-menu').removeClass('sec-menu-fixed');

			}
			//for scrolling menu
			sections.each(function(i,el){
				var top = $(el).offset().top-20;
				var bottom = top + $(el).height();
				var scroll = $(window).scrollTop();
				var id = $(el).attr('id');
				if(scroll > top && scroll < bottom){
					$('.menu a.active').removeClass('active');
					$('a[href="#'+id+'"]').addClass('active');
				}
			});
		});


	}

	$(document).ready(function(){
		
	    

	    menuScroll();


		

		$('.nav').on('click', 'a', function(elem){
			elem.preventDefault();
			var id = $(this).attr('href');
			var top = $(id).offset().top;

			$('body,html').animate({scrollTop: top}, 1000);
		});

		$('.menu-trigger').click(function() {
    		$('.menu ul').slideToggle(500);
  		});//end slide toggle
  
  		$(window).resize(function() {

  				menuScroll();

			if (  $(window).width() >= 1024 ) {			
				$('.menu ul').removeAttr('style');

		 		$('.header-text').paroller();
		 		$('.birds').paroller();
		 		$('.moon').paroller();
		 		$('.slider-wrap').paroller();
		 		$('.parallax-init').sparallax();

		 	}else {
		 		$('.birds').paroller();
		 		$('.moon').paroller();
		 	}
		 	
		});

		if($(window).width() >= 1024){
		 	$('.header-text').paroller();
		 	$('.birds').paroller();
		 	$('.moon').paroller();
		 	$('.slider-wrap').paroller();
		 	$('.parallax-init').sparallax();

		}else {
		 	$('.birds').paroller();
		 	$('.moon').paroller();
		}

		new ScrollFlow({
			durationOnScroll: "800"
		});


	});

});