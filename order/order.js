define(["jquery"], function($) {
	var obj = {};
	obj.requst = function() {
		$.get("http://h5.yztctech.net/api/axf/apiyuding.php",
			function(req) {
				var data = JSON.parse(req).product;
				var html = "";
				for(let m of data) {
					html += `
						<li>
            				<div class="left">
                				<img src="${m.img}">
            				</div>
            				<div class="right">
                				<div class="des">${m.name}</div>
                				<div class="price">${m.price}</div>
            				</div>
            				<a class="cart" href="javascript:;"></a>
        				</li>
					`;
				};
				$(".category ul").html(html);
			});
	};
	return obj;
})