var text = '<strong>Welcome!</strong><br /> Nice to meet <strong>you</strong>. Let me show you what I do...'
var curText = '';
var letter = 0;
var full = 0;
$(document).ready(function(){
	hideMenu();
 	full = setInterval(typeWrite, 40);
	$('#hamburger').click(function(){
		navigation();
	});
	$('nav ul li').click(function(e){
		e.preventDefault();
		menuClick(this);
	})
	$('#arrow').click(function(e){
		arrowScroll();
	})
	$(window).scroll(function(e){
		activeChange();
		menuFix();
	})
	$('#gallery a').fancybox({
		overlayColor: '#060',
		overlayOpacity: .5,
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		easingIn: 'easeInSine',
		easingOut: 'easeOutSine',
		titlePosition: 'outside' ,
		cyclic: true
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
		$('ul').addClass('fixed');
	}else {
		$('ul').removeClass('fixed')
	}
}

function navigation(){
	$('#hamburger').toggleClass('open');
	$('li').each(function(){
		if(!($(this).hasClass('active'))){
			$(this).slideToggle('fast', function(){
				$(this).removeClass('navigation')
			});
		}
	})
}

function hideMenu(){
	$('li').each(function(){
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
	if ($(window).scrollTop() < $('#AboutMe').offset().top - 101 ) {
		$('nav ul li').each(function(){
			if($(this).text() === 'Home'){
				$(this).addClass('active');
				if(!$('#hamburger').hasClass('open')){
				hideMenu();
				}
			}else $(this).removeClass('active');
		})
	}else if ($(window).scrollTop() < $('#Experience').offset().top - 101 ){
		$('nav ul li').each(function(){
			if($(this).text() === 'About me'){
				$(this).addClass('active');
				if(!$('#hamburger').hasClass('open')){
				hideMenu();
				}
			}else $(this).removeClass('active');
		});
	}else if ($(window).scrollTop() < $('#Projects').offset().top - 300 ){
		$('nav ul li').each(function(){
			if($(this).text() === 'Experience'){
				$(this).addClass('active');
				if ($('#arrow').css('display') == 'none') {
					$('#arrow').fadeIn();
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
				$('#arrow').fadeOut();
				if(!$('#hamburger').hasClass('open')){
				hideMenu();
				}
			}else $(this).removeClass('active');
		});
	}
}
