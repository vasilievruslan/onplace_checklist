'use strict'
$(function () {
	$('#step2').hide();

	$('#tonextstep').attr('disabled', '');
	$('#submit').attr('disabled', '');

	$('input').click(function() {
		
		if($('.step1-input:checked').length == 1 && $('#agreement').is(':checked')){
			$('#tonextstep').removeAttr('disabled');
		}else{
			$('#tonextstep').attr('disabled', '');
		}


		if($('.step2-input:checked').length == $('.step2-input').length){
			$('#submit').removeAttr('disabled');
		}else{
			$('#submit').attr('disabled', '');
		}
	});
	

	$('#tonextstep').click(function(e) {
		e.preventDefault();
		if($('#statusChoice6').is(':checked')){
			$('.pop-up').fadeIn(400);
		}else{
			$('#step1').fadeOut(400, function() {
				$('#step2').fadeIn(400);
			});
		}
	});

	$('.close-btn').click(function(event) {
		event.preventDefault();
		$('.pop-up').fadeOut(400);
	});

	$('#submit').click(function(event) {
		event.preventDefault();
		window.location.replace('https://account.onplace.io/')
	});
})