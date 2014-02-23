$(function() {

	/*
	===========================================================================
		Code for correcting domain name.
	*/

	window.location = "http://romanlarionov.com";

	/*
	===========================================================================
		Code for dropdown color correction.
	*/

	$('.dropdown, .dropdown-menu').hover(
		function() {$('.dropdown').css(
			{'background-color': '#f2f2f2', 'color': '#000000'});},
		function() {$('.dropdown').css(
			{'background-color': '#333', 'color': '#ffffff'});}
	);


	/*
	===========================================================================
		Segment slide animation handler.
	*/

	var webPage = $('html, body');

	// Works for both the brand & dropdown links.
	$("#navigation-dropdown a, .navbar-brand, .home-bottom a").bind("click",

		function(event) { 
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
	var $selfy = $('.self-img');

	function checkSize() {

		// Getting various sizes.
		var windowWidth = $window.width();
		var windowHeight = $window.height();
		var totalWidth = windowWidth * numTabs;

		// If the window is too small, change the size of the message box.
		$('.panel-body textarea').attr('rows', windowHeight/((1000/windowHeight)* 100));

		var newFontSize = windowHeight/((380/windowHeight) * 80);

		if (newFontSize < 16) {
			$('.home-body').css('font-size', newFontSize);
		}

		// If window is too small, hide the info well.
		if (windowHeight < 600) {
			$selfy.css({
				height: '100px',
				width: '100px'
			});
			$('.title').css('margin-bottom', '0');
			$('.title h3').css('fontSize', '16px');
		}

		// For resize, to show well again.
		else if (windowHeight >= 600) {
			$selfy.css({
				height: '150',
				width: '150'
			});
			$('.title').css('margin-bottom', '40');
			$('.title h3').css('fontSize', '26px');
		}

		// Algorithom for setting total wrapper size depending on window size.
		$wrapper.width(totalWidth);
		$wrapper.height(windowHeight - 115);

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
		Code for switching the vertical scroll of the mouse to horizontal.
		!!!! Uses Mousewheel Library  /js/jquery.mousewheel.js !!!
	*/

	webPage.mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 40);
		event.preventDefault();
	});

	/*
	===========================================================================
		Code for annimating portfolio project images.
	*/

	$(window).load(function() { //start after HTML, images have loaded
 
	    var InfiniteRotator =
	    {
	        init: function()
	        {
	            //initial fade-in time (in milliseconds)
	            var initialFadeIn = 1000;
	 
	            //interval between items (in milliseconds)
	            var itemInterval = 5000;
	 
	            //cross-fade time (in milliseconds)
	            var fadeTime = 2500;
	 
	            //count number of items
	            var numberOfItems = $('.rotating-item').length;
	 
	            //set current item
	            var currentItem = 0;
	 
	            //show first item
	            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
	 
	            //loop through the items
	            var infiniteLoop = setInterval(function(){
	                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
	 
	                if(currentItem == numberOfItems -1){
	                    currentItem = 0;
	                }else{
	                    currentItem++;
	                }
	                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
	 
	            }, itemInterval);
	        }
	    };
	 
	    InfiniteRotator.init();
	 
	});

});

