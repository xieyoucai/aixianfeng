define(["jquery"],function($){
	var obj = {};
	obj.requst = function(adressIp){
		adressIp = adressIp ? adressIp : "%E7%83%AD%E9%94%80%E6%A6%9C" ;
		$.get("http://h5.yztctech.net/api/axf/apicategory.php?category="+adressIp,
		function(req){
			var data = JSON.parse(req).data;
			var html = '';
			for(let m of data){
				html += `
						<li>
					<div class="content5Li3box1">
						<div>
							<img src="${m.img}" />
						</div>
						<div>
							<p class="shoppingName">${m.name}</p>
							<p class="shoppingType">
								<span class="shoppingType1 pm_desc${m.pm_desc.length}">${m.pm_desc}</span>
								<span class="shoppingType2 "></span>
							</p>
							<p class="shoppingKg">${m.specifics}</p>
							<p class="shoppingPrice">
								<span class="shoppingPriceNow">${m.price}</span>
								<span class="shoppingPriceOld">${m.market_price}</span>
							</p>
						</div>
						<div class="addShopping"><span></span></div>
					</div>
				</li>
				`;
			}
			$(".rightBottom").html(html);
			
		});
	}
	obj.clickTap = function (){	
		var adressIp;
		$(".contentLeft li:nth-of-type(1) span").css("background","#ffd600");
		$(".contentLeft").on("click",function(e){
				adressIp = e.target.innerText;
				$(".yellowTip").css("background","rgba(246,246,246,.95)");
				if(e.target.tagName == "A"){
					window.event? window.event.returnValue = false : e.preventDefault();
					console.log(e.target);
					$(e.target.previousElementSibling).css("background","#ffd600")
				}
				adressIp = encodeURIComponent(adressIp);			
				console.log(adressIp);
				obj.requst(adressIp);
		});
		obj.requst(adressIp);
	}
	
	return obj;
});