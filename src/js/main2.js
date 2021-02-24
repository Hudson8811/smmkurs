$(function() {
	$('.js-cwprog-open-sub').click(function(){
		$(this).parent().toggleClass('cwprog-titem-name--active')
			.siblings('.cwprog-titem-sub').slideToggle(400)
	});

	$('.js-cwfeedback-slider').slick({
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
	});
});