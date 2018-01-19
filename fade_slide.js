		$(document).ready(function(){

			var i = 0;
			function img_fade_In () {
				var img_length = $("#work_experience").children(".work_experience_slide");
				img_length.eq(i).prevAll().fadeOut(500);
				img_length.eq(i).nextUntil("#control_work_experience").fadeOut(500);

				img_length.eq(i).fadeIn(2000);
				i++;

				if ( img_length.length == i ) {
					i = 0;
				}
			}
					setInterval(function(){ img_fade_In() }, 5000);

					$("#one").click(function(){
						var img_length = $("#work_experience").children(".work_experience_slide");
						img_length.eq(0).prevAll().fadeOut(100);
						img_length.eq(0).nextUntil("#control_work_experience").fadeOut(100);
						img_length.eq(0).fadeIn(2000);

						$(this).css("background", "#fff");
						$("#two, #three").css("background", "none");					
					});

					$("#two").click(function(){
						var img_length = $("#work_experience").children(".work_experience_slide");
						img_length.eq(1).prevAll().fadeOut(100);
						img_length.eq(1).nextUntil("#control_work_experience").fadeOut(100);
						img_length.eq(1).fadeIn(2000);

						$(this).css("background", "#fff");
						$("#one, #three").css("background", "none")						
					});

					$("#three").click(function(){
						var img_length = $("#work_experience").children(".work_experience_slide");
						img_length.eq(2).prevAll().fadeOut(100);
						img_length.eq(2).nextUntil("#control_work_experience").fadeOut(100);
						img_length.eq(2).fadeIn(2000);

						$(this).css("background", "#fff");
						$("#two, #one").css("background", "none")						
					});
		});
