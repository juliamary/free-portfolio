$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "400px","height":"90px"});

				$("header").css({"background-color": "black"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "250px", "width": "700","height":"150px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});