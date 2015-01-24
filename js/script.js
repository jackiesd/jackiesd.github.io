var main = function() {

	$(".web_nav ").click(function() {
		$(".grafics").addClass("hidden");
		$(".web").removeClass("hidden");
	});


	$(".grafics_nav").click(function() {
		$(".web").addClass("hidden");
		$(".grafics").removeClass("hidden");
	});


	$(".contact_nav").click(function() {
		$(".contact").toggleClass("hidden");
	});


	$(".projects").delay(1000).animate({
		opacity: '1',
		top: '340px',
		left: '400px'
	}, 1200);

	$(".projects_postit").delay(1000).animate({
		width: '340px'
	}, 800);


	$(".projects_text").hover(function(){
		$(this).css('transform','rotate(5deg)');
	}, function(){
			$(this).css('transform','rotate(0deg)')
	});

}


$(document).ready(main);
