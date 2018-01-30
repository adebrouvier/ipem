$(document).ready(function(){
	$('#scroll a').click(function(){
	    $("html, body").animate({ scrollTop: $("#inicio").height()}, 550);
	    return false;
	 });
});