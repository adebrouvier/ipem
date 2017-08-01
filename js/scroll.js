$(document).ready(function(){
	$('#scroll a').click(function(){
	    $("html, body").animate({ scrollTop: $("#inicio").height()}, 600);
	    return false;
	 });
});