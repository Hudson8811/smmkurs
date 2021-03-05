//= libs/jquery.mCustomScrollbar.concat.min.js
//= libs/gs.js
//= libs/ScrollMagic.min.js
//= libs/animation.gsap.min.js
// libs/debug.addIndicators.min.js
//= libs/custom-slider.js
//= libs/easytimer.min.js


$(function () {
	$('.js-cwprog-open-sub').click(function () {
		$(this).parent().toggleClass('cwprog-titem-name--active')
			.siblings('.cwprog-titem-sub').slideToggle(400)
	});

	/*$('.js-cwfeedback-slider').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		arrows: true,
		dots: false,
		focusOnSelect: true,
		waitForAnimate: true,
		prevArrow: '<div class="cwfeedback-arrow cwfeedback-arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52"><path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z"/></svg></div>',
		nextArrow: '<div class="cwfeedback-arrow cwfeedback-arrow--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52"><path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z"/></svg></div>'
	});*/


	$('.js-callFancyVideo').click(function (e) {
		e.preventDefault();
		$('#popup-video-player').attr('poster', $(this).attr('data-preview'));
		$('#popup-video-player source').attr('src', $(this).attr('data-src'));
		//$('#popup-video video')[0].load();
		setTimeout(function () {
			$.fancybox.open({
				src: '#popup-video',
				type: 'inline',
				touch: false,
			});
		}, 200)

	});






	/*
		if ($(".js-ylearn-hor-scroll").length > 0) {
			$(".js-ylearn-hor-scroll").mCustomScrollbar({
				axis: "x",
				theme: "ylearn ",
				mouseWheel: {
					enable: false
				}
			});
		}
	*/

	if ($(".js-custom-slider").length > 0) {
		const csCarousel = new CardCarousel(cardsContainer)
		$('.js-custom-slider-prev').click(function () {
			csCarousel.changeSlide('prev');
		});
		$('.js-custom-slider-next').click(function () {
			csCarousel.changeSlide('next');
		});

		$('.js-custom-slider').on('click', '[data-x="-1"]', function () {
			csCarousel.changeSlide('prev');
		});
		$('.js-custom-slider').on('click', '[data-x="1"]', function () {
			csCarousel.changeSlide('next');
		});


	}

	/*
		// init
		var controller = new ScrollMagic.Controller();

		var ylearnW = $("#ylearn-row").width();

		var leftpin = ylearnW;
		var leftpinpx = '-' + leftpin + 'px';
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#ylearn-pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.addTo(controller)
			.setPin("#ylearn-pinContainer").setTween(moveleft);
		var moveleft = TweenMax.to("#ylearn-scroll", 1, {
			left: leftpinpx,
			ease: Sine.easeInOut
		});
	*/
	/*.setTween(wipeAnimation)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller)*/

	// init
	if (window.matchMedia("(min-width: 1025px)").matches) {
		var controller = new ScrollMagic.Controller();
		if ($('#ylearn-scroll').length > 0) {
			var ylearnWL = -($("#ylearn-scroll").width() - $("#ylearn-pinContainer").width()) + 'px';
			var ylearnOffsetTop = -(document.documentElement.clientHeight - $("#ylearn-scroll").height()) / 2 + 'px';
			// define movement of panels
			var wipeAnimation = new TimelineMax()
				.to("#ylearn-scroll", 1, {
					x: ylearnWL
				})

			// create scene to pin and link animation
			new ScrollMagic.Scene({
					triggerElement: "#ylearn-pinContainer",
					triggerHook: "onLeave",
					duration: "250%",
					offset: ylearnOffsetTop
				})
				.setPin("#ylearn-pinContainer")
				.setTween(wipeAnimation)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
	}

	if (window.matchMedia("(min-width: 1025px)").matches) {
		var controller = new ScrollMagic.Controller();
		if ($('#moexam-scroll').length > 0) {
			var ylearnWL = -($("#moexam-scroll").width() - $("#moexam-pinContainer").width()) + 'px';
			var ylearnOffsetTop = -(document.documentElement.clientHeight - $("#moexam-scroll").height()) / 2 + 'px';
			// define movement of panels
			var wipeAnimation = new TimelineMax()
				.to("#moexam-scroll", 1, {
					x: ylearnWL
				})

			// create scene to pin and link animation
			new ScrollMagic.Scene({
					triggerElement: "#moexam-pinContainer",
					triggerHook: "onLeave",
					duration: "350%",
					offset: ylearnOffsetTop
				})
				.setPin("#moexam-pinContainer")
				.setTween(wipeAnimation)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
	}
	if (window.matchMedia("(min-width: 1025px)").matches) {
		var controller = new ScrollMagic.Controller();
		if ($('#motylearn-scroll').length > 0) {
			var ylearnWL = -($("#motylearn-scroll").width() - $("#motylearn-pinContainer").width()) + 'px';
			var ylearnOffsetTop = -(document.documentElement.clientHeight - $("#motylearn-scroll").height()) / 2 + 'px';
			// define movement of panels
			var wipeAnimation = new TimelineMax()
				.to("#motylearn-scroll", 1, {
					x: ylearnWL
				})

			// create scene to pin and link animation
			new ScrollMagic.Scene({
					triggerElement: "#motylearn-pinContainer",
					triggerHook: "onLeave",
					duration: "350%",
					offset: ylearnOffsetTop
				})
				.setPin("#motylearn-pinContainer")
				.setTween(wipeAnimation)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
	}






	var cCountdons = [];
	if ($('.js-countdown').length > 0) {

		$('.js-countdown').each(function (idx, element) {
			cCountdons.push(new easytimer.Timer());
			var $elem=$(element);
			console.log($elem.length);
			var currentTimer=cCountdons[idx];
			currentTimer.start({
				countdown: true,
				startValues: {
					seconds: parseInt($elem.attr('data-seconds'))
				}
			});

			var vals=currentTimer.getTimeValues();
			$elem.html(vals.hours.toString().padStart(2,0)+" : "+vals.minutes.toString().padStart(2,0)+" : "+vals.seconds.toString().padStart(2,0));

			currentTimer.addEventListener('secondsUpdated', function (e) {
				var vals=currentTimer.getTimeValues();
				$elem.html(vals.hours.toString().padStart(2,0)+" : "+vals.minutes.toString().padStart(2,0)+" : "+vals.seconds.toString().padStart(2,0));
			});




			currentTimer.addEventListener('targetAchieved', function (e) {
				$elem.html('KABOOM!!');
			});

		});
	}

	function copyText(copyTxt) {
		var copyBlock = document.createElement("textarea");
		copyBlock.style.position = 'absolute';
		copyBlock.style.left = -9999;
		copyBlock.style.display = 'block';
		copyBlock.value = copyTxt;
		//$('body').append('<div id="copyText" style="display:block;position:absolute;left:-9999px;">'++'</div>')
		document.body.appendChild(copyBlock);
		copyBlock.select();
		document.execCommand("copy");
		copyBlock.remove();

	}
	$('[data-copy]').click(function(){
		copyText($(this).attr('data-copy'));
	});

});