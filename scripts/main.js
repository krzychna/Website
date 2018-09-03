var text = '<section class="article__text">'+
	'<h2 class="article__title">Welcome!</h2>'+
	'<p>Nice to meet you. Let me show you what I do...</p>'+
'</section>';
var curText = '';
var letter = 0;
var full = 0;
$(document).ready(function(){
	$('#Character').animate({top:'0%'}, 1000);
	setTimeout(function(){
	full = setInterval(typeWrite, 40);
}, 200)

	$('.hamburger').click(function(){
		navigation();
	});
	$('.navbar__element').click(function(e){
		e.preventDefault();
		menuClick(this);
	})
	$('.arrow').click(function(e){
		arrowScroll();
	})
	$(window).scroll(function(e){
		activeChange();
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
			$('#Home').html(curText);
		}else {
			clearInterval(full);
			$('.shutter').fadeOut(1000);
			setTimeout(function(){
				$('.shutter').hide();
				$('#Home').css('z-index','1');
			}, 1005)
		}
}

function navigation(){
	$('.hamburger__dash').toggleClass('hamburger__dash--open');
	$('.navbar__element').each(function(){
		if(!($(this).hasClass('navbar__element--active'))){
			$(this).slideToggle('fast', function(){
				$(this).removeClass('navbar__element--invisible')
			});
		}
	})
}

function hideMenu(){
	$('.navbar__element').each(function(){
		if(!($(this).hasClass('navbar__element--active'))){
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
			scrollTop: $('#AboutMe .article__text').offset().top - 52 },
		 	0);
	}
	if($(a).text() === 'Experience'){
	$("html, body").animate({
			scrollTop: $('#Experience .article__text').offset().top - 52 },
		 	0);
	}
	if($(a).text() === 'Projects'){
	$("html, body").animate({
			scrollTop: $('#Projects .article__text').offset().top - 52},
			0);
	}
}

function arrowScroll(){
	if ($(window).scrollTop() <= $('#AboutMe .article__text').offset().top - 100 ) {
		$("html, body").animate({
				scrollTop: $('#AboutMe .article__text').offset().top - 50 },
			 	0);
	}
	else if ($(window).scrollTop() < $('#Experience .article__text').offset().top - 100 ){
		$("html, body").animate({
				scrollTop: $('#Experience .article__text').offset().top - 50 },
			 	0);
	}
	else if ($(window).scrollTop() < $('#Projects .article__text').offset().top - 100 ){
		$("html, body").animate({
				scrollTop: $('#Projects .article__text').offset().top - 50 },
			 	0);
	}
}

function activeChange(e){
	if ($(window).scrollTop() < $('#AboutMe .article__text').offset().top - 100 ) {
		$('.navbar__element').each(function(){
			if($(this).text() === 'Home'){
				$(this).addClass('navbar__element--active');
				$(this).removeClass('navbar__element--invisible');
				if(!$('.hamburger__dash').hasClass('hamburger__dash--open')){
				hideMenu();
				}
			}else {
				$(this).removeClass('navbar__element--active');
			}
		})
	}else if ($(window).scrollTop() < $('#Experience .article__text').offset().top - 100 ){
		$('.navbar__element').each(function(){
			if($(this).text() === 'About me'){
				$(this).addClass('navbar__element--active');
				$(this).removeClass('navbar__element--invisible');
				if(!$('.hamburger__dash').hasClass('hamburger__dash--open')){
				hideMenu();
				}
			}else {
			$(this).removeClass('navbar__element--active');
			}
		});
	}else if ($(window).scrollTop() < $('#Projects .article__text').offset().top - 100 ){
		$('.navbar__element').each(function(){
			if($(this).text() === 'Experience'){
				$(this).addClass('navbar__element--active');
				$(this).removeClass('navbar__element--invisible');
				if ($('.arrow').css('display') == 'none') {
					$('.arrow').fadeIn();
				}
				if(!($('.hamburger__dash').hasClass('hamburger__dash--open'))){
				hideMenu();
				}
			}else {
				$(this).removeClass('navbar__element--active');
			}
		});
	}else {
		$('.navbar__element').each(function(){
			if($(this).text() === 'Projects'){
				$(this).addClass('navbar__element--active');
				$(this).removeClass('navbar__element--invisible');
				$('.arrow').fadeOut();
				if(!$('.hamburger__dash').hasClass('hamburger__dash--open')){
				hideMenu();
				}
			}else{
				$(this).removeClass('navbar__element--active');
			}
		});
	}
}
