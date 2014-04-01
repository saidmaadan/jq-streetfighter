$(document).ready(function(){
	var isMouseDown = false;
	var isMouseEnter = false;
	var isKeyDown = false;

	$('.ryu').on('mouseenter', function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();	
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){ 
		playHadouken();  
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show();
	$('.hadouken').animate({'left': '600px'},500,
		function() {
		$(this).hide();
		$(this).css('left', '-212px');
	});
	
	})
	
	.mouseup(function(){
		$('.hadouken').show();
		$('.ryu-ready').show();
		$('.ryu.throwing').hide();
	});
$(this).keydown(function(key){
		if (isMouseDown === false) {
		if (key.which === 88 && isMouseEnter === true){
			isKeyDown = true;
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
		else if (key.which === 88 && isMouseEnter === false) {
			isKeyDown = true;
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	}

	})
	.keyup(function(key){
		if (isMouseDown === false) {
			if (key.which === 88) {
				isKeyDown = false;
				$('.ryu-cool').hide();
				if (isMouseEnter === true) {
					$('.ryu-ready').show();
				}
				else {
					$('.ryu-still').show();
				}
			}
		}
	});
});



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}





