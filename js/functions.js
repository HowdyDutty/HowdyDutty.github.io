$(document).ready(function() {

	/*
	=========================================================================
		Section slide animation handler.
	*/

	$("#navigation-dropdown a").bind("click",function(event){ 
	 	// disables any animation from playing while active.
	 	event.preventDefault(); 

	 	//stores the id of the desired part of the page into target.
	 	var target = $(this).attr("href"); 

	 	//stops any sort of animation that was occuring, then animates the page
	 	//to scroll left and the the top of the section chosen. This animation
	 	//lasts for 1.2 seconds.
	 	$("html, body").stop().animate({ 
	 		scrollLeft: $(target).offset().left, 
	 		scrollTop: $(target).offset().bottom }, 
	 		1200); 
	});

	/*
	==================================================================
		Screen resize handler.
	*/

	// Optimization, stores reference to window outside event handler.
	var $window = $(window);
	var $wrapper = $(".wrapper");
	var $segment = $(".segment");
	var numTabs = $(".segment").length;


	function checkWidth() {
		//gets the current screen width;
		var windowSize = $window.width();
		var totalWidth = windowSize * numTabs;

		// Algorithom for setting total wrapper width depending on window size.
		$wrapper.width(totalWidth);
		// Algorithom for setting each segments width depending on total window size.
		$segment.each(function() {
			$(this).innerWidth(totalWidth/numTabs);
		});
	}

	// Executes on launch.
	checkWidth();
	// Event listener for changing screen size.
	$(window).resize(checkWidth);
<<<<<<< HEAD
=======

	/*
	===========================================================================
		Code for keeping the scroll bar at current position.
	*/




	/*
	===========================================================================
		Code for switching the vertical scroll of the mouse to go horizontally.
	*/

	webPage.mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 40);
		event.preventDefault();
	});
	

>>>>>>> parent of 5af3597... added support for smaller window sizes.
});

