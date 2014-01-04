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
		Segment slide animation handler.
	*/

	var webPage = $('html, body');

	// Works for both the brand & dropdown links.
	$("#navigation-dropdown a, .navbar-brand").bind("click",function(event) { 

	 	event.preventDefault(); 

	 	var target = $(this).attr("href"); 

	 	// Animations for navbar buttons.
	 	webPage.stop().animate({ 
	 		scrollLeft: $(target).offset().left, 
	 		scrollTop: $(target).offset().bottom }, 
	 		1200); 
	});

	/*
	===========================================================================
		Screen resize handler.
	*/

	var $window = $(window);
	var $wrapper = $(".wrapper");
	var $segment = $(".segment");
	var numTabs = $(".segment").length;

	function checkSize() {

		// Getting various sizes.
		var windowWidth = $window.width();
		var windowHeight = $window.height();
		var totalWidth = windowWidth * numTabs;

		// If the window is too small, change the size of the message box.
		$('.panel-body textarea').attr('rows', windowHeight/((1000/windowHeight)* 100));

		// If window is too small, hide the info well.
		if (windowHeight < 600) {
			$('#contact .container > .well-sm').hide();
		}

		// For resize, to show well again.
		else if (windowHeight >= 600) {
			$('#contact .container > .well-sm').show();
		}

		// Algorithom for setting total wrapper size depending on window size.
		$wrapper.width(totalWidth);
		$wrapper.height(windowHeight - 120);

		// Algorithom for setting each segments' width depending on total window size.
		$segment.each(function() {
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
		Code for switching the vertical scroll of the mouse to horizontal.
		!!!! Uses Mousewheel Library  /js/jquery.mousewheel.js !!!
	*/

	webPage.mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 40);
		event.preventDefault();
	});
});

