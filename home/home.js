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
	obj.shoppingList = function(){
		$.get("http://h5.yztctech.net/api/axf/apihomehot.php",
		function(req){
			var data = JSON.parse(req).data;
			var html = '';
			for(var m of data){
				html += `
						<div class="content5Li3box1">
					<div>
						<img src="${m.img}" />
					</div>
					<div>
						<p class="shoppingName">${m.name}</p>
						<p class="shoppingType">
							<span class="shoppingType1 pm_desc${m.pm_desc.length}">${m.pm_desc}</span>
							<span class="shoppingType2 pm_info${m.pm_info.length}">${m.pm_info}</span>
						</p>
						<p class="shoppingKg">${m.specifics}</p>
						<p class="shoppingPrice">
							<span class="shoppingPriceNow">${m.price}</span>
							<span class="shoppingPriceOld">${m.market_price}</span>
						</p>
					</div>
					<div class="addShopping"><span></span></div>
				</div>
				`;
			}
			$(".content5Li3").html(html);
			
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