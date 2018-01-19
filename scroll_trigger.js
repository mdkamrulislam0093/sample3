		$(document).ready(function(){
			$(document).scroll(function(){
				var text_top = $("#about").offset().top;
				var text_outerheight = $("#about").outerHeight();
				var window_height = $(window).height() + 150;
				var Scroll_top = $(this).scrollTop();
				var total_text_height = (text_top + text_outerheight) - window_height;
				console.log(Scroll_top + '+' + window_height )
				if ( Scroll_top > total_text_height ) {
					$("#img_div").animate({marginLeft: 0}, 1000);
				}
			});	

			$(document).scroll(function(){
				var text_top = $("#about").offset().top;
				var text_outerheight = $("#about").outerHeight();
				var window_height = $(window).height() + 500;
				var Scroll_top = $(this).scrollTop();
				var total_text_height = (text_top + text_outerheight) - window_height;
				console.log(Scroll_top + '+' + window_height )
				if ( Scroll_top > total_text_height ) {
					$("#about").animate({marginTop: "56px"}, 1000);
				}
			});	

			$(document).scroll(function(){
				var text_top = $("#skill").offset().top;
				var text_outerheight = $("#skill").outerHeight();
				var window_height = $(window).height() + 300;
				var Scroll_top = $(this).scrollTop();
				var total_text_height = (text_top + text_outerheight) - window_height;
				console.log(Scroll_top + '+' + window_height )
				if ( Scroll_top > total_text_height ) {
					$("#skill").animate({marginTop: "22px"}, 1000);
				}
			});	






			$(document).scroll(function(){
				var text_top = $("#skill").offset().top;
				var text_outerheight = $("#skill").outerHeight();
				var window_height = $(window).height() + 150;
				var Scroll_top = $(this).scrollTop();
				var total_text_height = (text_top + text_outerheight) - window_height;
				console.log(Scroll_top + '+' + window_height )
				if ( Scroll_top > total_text_height ) {
					$(".photoshop").animate({width: '79%'}, 1000);
					$(".javascript").animate({width: '90%'}, 1000);
					$(".wordpress").animate({width: '85%'}, 1000);
					$(".html").animate({width: '95%'}, 1000);
					$(".php").animate({width: '80%'}, 1000);
					$(".drupal").animate({width: '50%'}, 1000);
				}
			});	



		});
