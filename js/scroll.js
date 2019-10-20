$(document).ready(function(){
	$('#scroll a').click(function(){
	    $("html, body").animate({ scrollTop: $("#cover").height() - $("nav").height()}, 550);
	    return false;
	 });
});