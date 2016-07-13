$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "148px","height":"130px"});

				$("header").css({"background-color": "rgb(161, 202, 138)"});
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