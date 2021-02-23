$(function() {
	$('.js-cwprog-open-sub').click(function(){
		$(this).parent().toggleClass('cwprog-titem-name--active')
			.siblings('.cwprog-titem-sub').slideToggle(400)
	});
});