$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "140px","height":"90px"});

				$("header").css({"background-color": "rgba(255, 221, 5, 0.41"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "90px", "width": "300","height":"300px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});