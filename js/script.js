var menu_vertical = function(){
	$('.menu-bar a').click( function () {
		$('nav').toggle('fast');
	});
}

var inicio = function() {

	menu_vertical();
}


$(document).on('ready', inicio);