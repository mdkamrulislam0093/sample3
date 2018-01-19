	var x;
$(function(){

			// Automative Slide 


	var start = setInterval(function() { start_slider (); }, 4000);


	function start_slider () {
		var slide_width = $(window).width();
		$("#slider_bar").animate({marginLeft : '-='+ slide_width +'px'}, 1000, function(){
			currentPosition++;	
			if ( currentPosition == $("#slider_bar").children().length-1 ) {
			currentPosition = 1;
			$("#slider_bar").css({'margin-left': 0});
			}
		});
	}




// Finish Automative Slide //

	var currentPosition = 1;
	var numberOfChild = $("#slider_bar").children().length;
	var slide_width = $(window).width();
	var control_height = $("#slide_item").height() / 2;
	// var document_height = $(window).height() / 2 + 200;

	$("#slider_bar").children("#slide_item").eq(0).clone().appendTo("#slider_bar");
	x = $("#slider_bar").children("#slide_item").eq(2).clone().prependTo("#slider_bar").css("marginLeft" , '-' + slide_width + 'px');
	// x.css("marginLeft" , '-' + slide_width + 'px')
	$("#slider_bar").children("#slide_item").css({ width: slide_width})
	$("#control_slide").css({ 'top' : control_height })




	$(".next").click(function(){
		$("#slider_bar").animate({ marginLeft : '-=' + slide_width + 'px' }, 1000, function(){
			if( currentPosition == numberOfChild ){
				currentPosition = 0;
				$("#slider_bar").css({'marginLeft': 0});
			}
			currentPosition++;
		});

	});



	$(".prev").click(function(){

		if( currentPosition == 1 ){
			var position = "-" + ( numberOfChild - 1 ) * slide_width + "px";

			$("#slider_bar").animate({ 'marginLeft' : slide_width + 'px'}, 1000, function(){
				$("#slider_bar").css({'margin-left' : position});

				currentPosition = numberOfChild;
			});
		} else {
			$("#slider_bar").animate({marginLeft : '+=' + slide_width + 'px'}, 1000, function(){
				currentPosition--;
			});
		}
	});


});
