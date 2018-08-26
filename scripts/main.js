var text = '<h3><strong>Welcome!</strong></h3><br /> Nice to meet <strong>you</strong>. Let me show you what I do...'
var curText = '';
var letter = 0;
var full = 0;
$(document).ready(function(){
	hideMenu();
	$('#Character').animate({top:'0%'}, 1000);
	setTimeout(function(){
	full = setInterval(typeWrite, 40);
}, 2000)

	$('#hamburger').click(function(){
		navigation();
	});
	$('nav ul li').click(function(e){
		e.preventDefault();
		menuClick(this);
	})
	$('#Arrow').click(function(e){
		arrowScroll();
	})
	$(window).scroll(function(e){
		activeChange();
		menuFix();
	})
	$(".fancybox").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					'background' : 'rgba(0,0,0,0.85)'
				}
			});
});


function typeWrite(){
		if (curText.length !== text.length) {
			curText += text[letter];
			letter++;
			$('#Welcome').html(curText);
		}else {
			clearInterval(full);
			$('.shutter').fadeOut(1000);
			setTimeout(function(){
				$('.shutter').hide();
				$('#Welcome, #Home, section:first-child').css('z-index','1');
			}, 1005)
		}
}

function menuFix(){
	if ($(window).scrollTop() > $('nav').offset().top - 10) {
		$('nav ul').addClass('fixed');
	}else {
		$('nav ul').removeClass('fixed')
	}
}

function navigation(){
	$('#hamburger').toggleClass('open');
	$('nav ul li').each(function(){
		if(!($(this).hasClass('active'))){
			$(this).slideToggle('fast', function(){
				$(this).removeClass('navigation')
			});
		}
	})
}

function hideMenu(){
	$('nav ul li').each(function(){
		if(!($(this).hasClass('active'))){
			$(this).slideUp("fast");
		}else {
			$(this).slideDown("fast");
		}
	})
}

function menuClick(a){
	if($(a).text() === 'Home'){
		$('html, body').animate({
        scrollTop: 0},
				0);
      }
	if($(a).text() === 'About me'){
	$("html, body").animate({
			scrollTop: $('#AboutMe').offset().top - 100 },
		 	0);
	}
	if($(a).text() === 'Experience'){
	$("html, body").animate({
			scrollTop: $('#Experience').offset().top - 100 },
		 	0);
	}
	if($(a).text() === 'Projects'){
	$("html, body").animate({
			scrollTop: $('#Projects').offset().top - 100 },
			0);
	}
}

function arrowScroll(){
	if ($(window).scrollTop() <= $('#AboutMe').offset().top - 100 ) {
		$("html, body").animate({
				scrollTop: $('#AboutMe').offset().top - 99 },
			 	0);
	}
	else if ($(window).scrollTop() < $('#Experience').offset().top - 100 ){
		$("html, body").animate({
				scrollTop: $('#Experience').offset().top - 99 },
			 	0);
	}
	else if ($(window).scrollTop() < $('#Projects').offset().top - 100 ){
		$("html, body").animate({
				scrollTop: $('#Projects').offset().top - 100 },
			 	0);
	}
}

function activeChange(){
	if ($(window).scrollTop() < $('#AboutMe').offset().top * 0.8 ) {
		$('nav ul li').each(function(){
			if($(this).text() === 'Home'){
				$(this).addClass('active');
				if(!$('#hamburger').hasClass('open')){
				hideMenu();
				}
			}else $(this).removeClass('active');
		})
	}else if ($(window).scrollTop() < $('#Experience').offset().top * 0.8 ){
		$('nav ul li').each(function(){
			if($(this).text() === 'About me'){
				$(this).addClass('active');
				if(!$('#hamburger').hasClass('open')){
				hideMenu();
				}
			}else $(this).removeClass('active');
		});
	}else if ($(window).scrollTop() < $('#Projects').offset().top * 0.8 ){
		$('nav ul li').each(function(){
			if($(this).text() === 'Experience'){
				$(this).addClass('active');
				if ($('#Arrow').css('display') == 'none') {
					$('#Arrow').fadeIn();
				}
				if(!$('#hamburger').hasClass('open')){
				hideMenu();
				}
			}else $(this).removeClass('active');
		});
	}else {
		$('nav ul li').each(function(){
			if($(this).text() === 'Projects'){
				$(this).addClass('active');
				$('#Arrow').fadeOut();
				if(!$('#hamburger').hasClass('open')){
				hideMenu();
				}
			}else $(this).removeClass('active');
		});
	}
}
