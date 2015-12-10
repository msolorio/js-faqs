function slideToggleDiv() {	
	$('#faqs h2').click(function(){
		$(this).next().slideToggle(1000);
	});
}
$(function(){
	slideToggleDiv();
});

/*
$(function(){
	$('#faqs h2').click(function(){
		$(this).next().slideToggle(1000);
	});
});
*/

/*
$(function(){
	$('#faqs h2').toggle(
		function(){
			$(this).next().slideDown(1000, "easeOutBounce");
		},
		function(){
			$(this).next().SlideUp(1000, "easeInBounce")
		}
	) // end toggle	
});
*/
/*
$(function(){
	$('#faqs h1').click(function(){
		$(this).animate(
			{ fontSize: "650%", opacity: 1, left: "+=275" }, 2000, "easeInExpo")
		.animate(
			{ fontSize: "175%", left: "-=275" }, 1000, "easeOutExpo" );
	});  // end click
});  // end ready
*/