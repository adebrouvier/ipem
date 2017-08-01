$(document).ready(function(){

	$(document).scroll(function () {
			var $nav = $("#nav");
			var condition = $(this).scrollTop() > $nav.height();
			$nav.toggleClass('scrolled', condition);
			$("#nav-center a").toggleClass('scrolled-links', condition);
			$("#nav-center li.active").toggleClass('scrolled-active', condition);
			$("#nav-center li.active a").toggleClass('scrolled-active', condition);
			if (condition){
				$("#nav-logo").attr("src","res/logo.png");        		
			}else{
				$("#nav-logo").attr("src","res/logo_white_h.png");
			}

	});
  
});