define(["jquery", "swiper"], function($, swiper) {
	var obj = {};

	obj.requst = function() {
		$.get("http://h5.yztctech.net/api/axf/apihome.php",
			function(req) {
				var data = JSON.parse(req);
				var slide = data.data.slide;
				var menu = data.data.menu;
				var addmenu = '';
				var html = '';
				for(var i in slide) {
					html += '<div class="swiper-slide"><img src=' + slide[i].activity.img + ' /></div>';
				}
				for(var b of menu){
					addmenu += '<li><img src='+ b.activity.img +' /><span>' + b.activity.name + '</span></li>';
				}
				$(".meauShow").html(addmenu);
				console.log(html);
				$('.swiper-wrapper').html(html);
				swipe();
			});
	}

	function swipe() {
		var mySwiper = new Swiper(".swiper-container", {
			autoplay: 3000,//可选选项，自动滑动
    		loop: true,
    		autoplayDisableOnInteraction:false,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		});
	}

	return obj;
});