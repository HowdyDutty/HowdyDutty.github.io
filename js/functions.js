$(function() {

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


	/*
	===========================================================================
		Section slide animation handler.
	*/




	var webPage = $('html, body');

	$("#navigation-dropdown a, .navbar-brand").bind("click",function(event){ 
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
	var $panel = $('#contact .panel');

	function checkSize() {
		//gets the current screen width;
		var windowWidth = $window.width();
		var windowHeight = $window.height();
		var totalWidth = windowWidth * numTabs;
		var panelHeight = $panel.height();

		// document.write(panelHeight);
		// $('.panel-body').height(panelHeight);

		// Algorithom for setting total wrapper width depending on window size.
		$wrapper.width(totalWidth);
		$wrapper.height(windowHeight);

		// Algorithom for setting each segments width depending on total window size.
		$segment.each(function() {
			$(this).height(windowHeight - 150);
			$(this).innerWidth(totalWidth/numTabs);
		});
	}

	// Executes on launch.
	checkSize();
	// Event listener for changing screen size.
	$(window).resize(checkSize);


	/*
	===========================================================================
		Code for keeping the scroll bar at current position.
	*/

	// $(window).resize(function() {
	// 	webPage.mousewheel(function(event,delta) {
	// 		this.scrollLeft === 0;
	// 		event.preventDefault();
	// 	});
	// });


	/*
	===========================================================================
		Code for switching the vertical scroll of the mouse to go horizontally.
	*/

	webPage.mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 40);
		event.preventDefault();
	});
});

