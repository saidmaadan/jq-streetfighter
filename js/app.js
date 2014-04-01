$(document).ready(function(){
	$('.ryu').on('mouseenter', function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
	})
	.mouseup(function(){
		$('.ryu.throwing').hide();
		$('.hadouken').show();
		$('.ryu-ready').show();
	});

});