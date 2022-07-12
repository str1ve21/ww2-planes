$(document).ready(function() {

	$('a[class="link-animate"]').click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('body, html').animate( { scrollTop: destination }, 750 );
	});

	
	$(document).ready(function() {
		function animw() {
			$('#anim-fade').fadeIn(750);
		};

		setTimeout(animw, 500);
	});


	let docHeight = $(document).height(),
	windowHeight = $(window).height(),
	docWidth = $(window).width(),
	scrollPercent,
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

		scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;

		sc = scrollPercent;

	});


	$(window).scroll(function() {
		if (sc > 0 && sc < 15) {
	
			$('#lsvg-1').css('fill', 'rgb(12, 12, 12)');
	
			$('#lsvg-2').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-3').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-4').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-5').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-6').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-7').css('fill', 'rgb(150, 150, 150)');
    	}
	});
	
	$(window).scroll(function() {
		if (sc > 16 && sc < 31) {

			$('#lsvg-2').css('fill', 'rgb(12, 12, 12)');
	
			$('#lsvg-1').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-3').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-4').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-5').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-6').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-7').css('fill', 'rgb(150, 150, 150)');
    	}
	});
	
	$(window).scroll(function() {
		if (sc > 27 && sc < 45) {
	
			$('#lsvg-3').css('fill', 'rgb(12, 12, 12)');
	
			$('#lsvg-1').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-2').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-4').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-5').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-6').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-7').css('fill', 'rgb(150, 150, 150)');
    	}
	});
	
	$(window).scroll(function() {
		if (sc > 46 && sc < 64) {
	
			$('#lsvg-4').css('fill', 'rgb(12, 12, 12)');
	
			$('#lsvg-1').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-2').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-3').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-5').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-6').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-7').css('fill', 'rgb(150, 150, 150)');
    	}
	});

	$(window).scroll(function() {
		if (sc > 65 && sc < 84) {
	
		$('#lsvg-5').css('fill', 'rgb(12, 12, 12)');
	
			$('#lsvg-1').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-2').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-3').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-4').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-6').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-7').css('fill', 'rgb(150, 150, 150)');
    	}
	});

	$(window).scroll(function() {
		if (sc > 84 && sc < 91) {
	
			$('#lsvg-6').css('fill', 'rgb(12, 12, 12)');
	
			$('#lsvg-1').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-2').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-3').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-4').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-5').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-7').css('fill', 'rgb(150, 150, 150)');
    	}
	});

	$(window).scroll(function() {
		if (sc > 91 && sc < 100) {
	
			$('#lsvg-7').css('fill', 'rgb(12, 12, 12)');
	
			$('#lsvg-1').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-2').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-3').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-4').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-5').css('fill', 'rgb(150, 150, 150)');
			$('#lsvg-6').css('fill', 'rgb(150, 150, 150)');
    	}
	});


	let logo = document.getElementById('anim-fade-div');
	let whyText = document.getElementById('why-theme');
	let pl1H1 = document.getElementById('plane-div1-h1');
	let pl1P = document.getElementById('plane-div1-p');

	let pl2H1 = document.getElementById('plane-div2-h1');
	let pl2P = document.getElementById('plane-div2-p');

	if (docWidth > 768) {

		$(window).scroll(function() {
			if (sc > -2 && sc < 12) {
				var winScrollY = window.scrollY;
				logo.style.top = winScrollY * 0.5 + 'px';
			}
		});

		$(window).scroll(function() {
			if (sc > 1 && sc < 8) {
				var winScrollY = window.scrollY;
				var x1 = winScrollY * 0.2 + 'px';
				whyText.style.marginTop = x1;
				whyText.style.marginBottom = x1;
				whyText.style.marginRight = '7.5%';
				whyText.style.marginLeft = '7.5%';
			}
		});
		

		$('#plane-div1').tilt({
			perspective: 10000,
			glare: true,
			maxGlare: .25,
			transition: 1000
		});

		$('#plane-div2').tilt({
			perspective: 10000,
			glare: true,
			maxGlare: .25,
			transition: 1000
		});

		$('#plane-div3').tilt({
			perspective: 10000,
			glare: true,
			maxGlare: .25,
			transition: 1000
		});

		$('#plane-div4').tilt({
			perspective: 10000,
			glare: true,
			maxGlare: .25,
			transition: 1000
		});

		$('#plane-div5').tilt({
			perspective: 10000,
			glare: true,
			maxGlare: .25,
			transition: 1000
		});

	} else {

		$(window).scroll(function() {
			if (sc > -2 && sc < 12) {
				var winScrollY = window.scrollY;
				logo.style.top = winScrollY * 0.5 + 'px';
			}
		});
	}


});