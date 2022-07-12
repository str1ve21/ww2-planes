$(document).ready(function() {

	$('a[class="link-animate"]').click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('body, html').animate( { scrollTop: destination }, 750 );
	});

	$('.img-preview').tilt({
		perspective: 30000,
		transition: 1000
	});


	let docHeight = $(document).height(),
	windowHeight = $(window).height(),
	docWidth = $(window).width(),
	sc;

	$(window).resize(function(){
		windowHeight = $(window).height();
		docHeight = $(document).height();
		docWidth = $(window).width();
	});

	$(window).scroll(function() {

		windowHeight = $(window).height();
		docHeight = $(document).height();
		docWidth = $(window).width();

		sc = $(window).scrollTop() / (docHeight - windowHeight) * 100;

		$('.second-color').css('width', sc + '%');

	});



});