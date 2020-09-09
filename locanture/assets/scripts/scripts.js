$( document ).ready(function(){

	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('select').material_select();
	$('.modal').modal();
	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: false,
		hover: true,
		gutter: 0,
		belowOrigin: false,
		alignment: 'left'
	});
	$('.tooltip').tooltipster({
		theme: 'tooltipster-apps',
		maxWidth: 300
	});
});