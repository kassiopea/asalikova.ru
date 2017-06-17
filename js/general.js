$(function(){
	

	

 	$(window).scroll(function(){
 		if (  $(window).width() > 1024 ) {			
			$('nav ul').removeAttr('style');
		}

		//скролл меню
		var menuItem = $('nav');
 		if ($(this).scrollTop()>120) {
 			menuItem.addClass('fixed');
 		}else if ($(this).scrollTop()<120) {
 			menuItem.removeClass('fixed');
 		}


 	});


	$(document).ready(function(){

		$('.menu-trigger').click(function() {
    		$('nav ul').slideToggle(700);
  		});//end slide toggle

		$(".qa-content").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top -40;
		
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
			});

		new ScrollFlow({
			durationOnScroll: "1000"
		});

		if ($('div').hasClass('wrap-gallery')){
			$('.img-list a').simpleLightbox({
				captions: false,
				close: false,
				showCounter: false,
				speed: 350
			});

			$('.img-list1 a').simpleLightbox({
				captions: false,
				close: false,
				showCounter: false,
				speed: 350
			});

			$('.img-list2 a').simpleLightbox({
				captions: false,
				close: false,
				showCounter: false,
				speed: 350
			});

			$('.img-list3 a').simpleLightbox({
				captions: false,
				close: false,
				showCounter: false,
				speed: 350
			});
		}


		$(".before-after-toggle").click(function(){
        	$(".photo-before-after").toggleClass("active");
        });

        $(".before-after-toggle1").click(function(){
        	$(".photo-before-after1").toggleClass("active1");
        });

        $(".before-after-toggle2").click(function(){
        	$(".photo-before-after2").toggleClass("active2");
        });

        $(".before-after-toggle3").click(function(){
        	$(".photo-before-after3").toggleClass("active3");
        });
        $(".before-after-toggle4").click(function(){
        	$(".photo-before-after4").toggleClass("active4");
        });
        $(".before-after-toggle5").click(function(){
        	$(".photo-before-after5").toggleClass("active5");
        });			



        if ($('div').hasClass('wrap-cont')) {
        	$(".wrap-cont").wrecker({

  			itemSelector : ".wrap-item",

  			maxColumns : 3,

  			responsiveColumns : [

		    // windowMaxWidth : columns
    		// windowMaxWidth order and values should match those in your responsive CSS
    			{1200 : 3},
    			{1024  : 2},
    			{800  : 1}
				
				]

			});
        };

        if ($('a').hasClass('demo')) {
        	jQuery("a.demo").YouTubePopUp({ autoplay: 0 });        	
        }

        function close_accordion_sec() {
        	$('.blog-art .btn-view').removeClass('active');
        	$('.blog-art .content-view').slideUp(300).removeClass('open');
        }

         $('.btn-view').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_sec();
        }else {
            close_accordion_sec();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.blog-art ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });

	});


});



