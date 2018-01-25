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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcjc3RlcDInKS5oaWRlKCk7XHJcblxyXG5cdCQoJyN0b25leHRzdGVwJykuYXR0cignZGlzYWJsZWQnLCAnJyk7XHJcblx0JCgnI3N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJywgJycpO1xyXG5cclxuXHQkKCdpbnB1dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRpZigkKCcuc3RlcDEtaW5wdXQ6Y2hlY2tlZCcpLmxlbmd0aCA9PSAxICYmICQoJyNhZ3JlZW1lbnQnKS5pcygnOmNoZWNrZWQnKSl7XHJcblx0XHRcdCQoJyN0b25leHRzdGVwJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcjdG9uZXh0c3RlcCcpLmF0dHIoJ2Rpc2FibGVkJywgJycpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRpZigkKCcuc3RlcDItaW5wdXQ6Y2hlY2tlZCcpLmxlbmd0aCA9PSAkKCcuc3RlcDItaW5wdXQnKS5sZW5ndGgpe1xyXG5cdFx0XHQkKCcjc3VibWl0JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcjc3VibWl0JykuYXR0cignZGlzYWJsZWQnLCAnJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblxyXG5cdCQoJyN0b25leHRzdGVwJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYoJCgnI3N0YXR1c0Nob2ljZTYnKS5pcygnOmNoZWNrZWQnKSl7XHJcblx0XHRcdCQoJy5wb3AtdXAnKS5mYWRlSW4oNDAwKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcjc3RlcDEnKS5mYWRlT3V0KDQwMCwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnI3N0ZXAyJykuZmFkZUluKDQwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKCcuY2xvc2UtYnRuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcucG9wLXVwJykuZmFkZU91dCg0MDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcjc3VibWl0JykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaHR0cHM6Ly9hY2NvdW50Lm9ucGxhY2UuaW8vJylcclxuXHR9KTtcclxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
