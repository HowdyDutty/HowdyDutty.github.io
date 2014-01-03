$(document).ready(function() {


	/*
	===========================================================================
		Code for dropdown color correction.
	*/

	$('.dropdownA, .A').hover(
		function() {$('.dropdownA').css(
			{'background-color': '#f2f2f2', 'color': '#000000'});},
		function() {$('.dropdownA').css(
			{'background-color': '#333', 'color': '#ffffff'});}
	);

	$('.dropdownB, .B').hover(
		function() {$('.dropdownB').css(
			{'background-color': '#f2f2f2', 'color': '#000000'});},
		function() {$('.dropdownB').css(
			{'background-color': '#333', 'color': '#ffffff'});}
	);


	/*
	===========================================================================
		Section slide animation handler.
	*/

	var webPage = $('html, body');

	$("#navigation-dropdown a").bind("click",function(event){ 
	 	// disables any animation from playing while active.
	 	event.preventDefault(); 

	 	//stores the id of the desired part of the page into target.
	 	var target = $(this).attr("href"); 

	 	//stops any sort of animation that was occuring, then animates the page
	 	//to scroll left and the the top of the section chosen. This animation
	 	//lasts for 1.2 seconds.
	 	webPage.stop().animate({ 
	 		scrollLeft: $(target).offset().left, 
	 		scrollTop: $(target).offset().bottom }, 
	 		1200); 
	});

	/*
	===========================================================================
		Screen resize handler.
	*/

	// Optimization, stores reference to window outside event handler.
	var $window = $(window);
	var $wrapper = $(".wrapper");
	var $segment = $(".segment");
	var numTabs = $(".segment").length;

	function checkWidth() {
		//gets the current screen width;
		var windowWidth = $window.width();
		var totalWidth = windowWidth * numTabs;

		var windowHeight = $window.height();

		$wrapper.height(windowHeight);

		// Algorithom for setting total wrapper width depending on window size.
		$wrapper.width(totalWidth);
		// Algorithom for setting each segments width depending on total window size.
		$segment.each(function() {
			$(this).height(windowHeight - 175);
			$(this).innerWidth(totalWidth/numTabs);
		});
	}

	// Executes on launch.
	checkWidth();
	// Event listener for changing screen size.
	$(window).resize(checkWidth);


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
	
	// $(window).resize(function() {
	// 	webPage.mousewheel(function(event,delta) {
	// 		this.scrollLeft === 0;
	// 		event.preventDefault();
	// 	});
	// });

});

