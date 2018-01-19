$(document).ready(function(){
	// Start sub menu
	$("#menu li").on({
		mouseenter: function(){
		$(this).children("ul").fadeIn(200);
		$(this).children("ul").animate({left: 0}, 500);
	},
		mouseleave: function(){
		$(this).children("ul").fadeOut(200);
	}
	});


	// End Sub menu

	// Start project_Img_slide
	$("#project #project_view").on({
		mouseenter: function(){
		var project_div_view = $(this).find("#viewer_project_view").height();
		var height_img = $(this).find("img").height() - project_div_view;
		$(this).find("img").animate({marginTop: -height_img}, 3000);
	},
	mouseleave: function(){
		$(this).find("img").stop();
		$(this).find("img").animate({marginTop: 0}, 1000);
	}

});
	// End project_Img_slide



// Mobile_menu
$("#mobile_menu").click(function(){
	$("#menu").show(2000);
});

});