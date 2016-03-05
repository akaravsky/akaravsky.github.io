$(document).ready(function() {

	$("#portfolio_grid").mixItUp();
	
	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$(".animation_1").animated("flipInY")
	$(".animation_2").animated("fadeInLeft", "fadeOutDown")
	$(".animation_3").animated("fadeInRight", "fadeOutDown")

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	
	
	$(".top_text h1").animated ("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated ("fadeInUp", "fadeOutDown");


	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
	
	$(".toggle_mnu").click(function() {
		$("#sandwich").toggleClass("active");
	});
	
	$(".toggle_mnu").click(function(){
		if($(".top_mnu").is(":visible")){
			$(".top_mnu").fadeOut(200);
			$(".top_mnu ul a").removeClass("fadeInUp animated");
		} else{
			$(".top_mnu").fadeIn(200);
			$(".top_mnu ul a").addClass("fadeInUp animated");
		}
	});

	$(".top_mnu ul a").click(function(){
		$(".top_mnu").fadeOut(200);
		$("#sandwich").toggleClass("active");
	});

	
$(function () { $("input,select,textarea").jqBootstrapValidation(); } );

$("a[href*='#']").mPageScroll2id();
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});