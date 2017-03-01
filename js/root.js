define(["jquery","underscore","backbone","text"],function($,_,backbone){
	var w = backbone.Router.extend({
		routes:{
			"home":"home",
			"superDistribution":"superDistribution",
			"order":"order",
			"mine":"mine",
			"shoppingCar":"shoppingCar",
			'*defAction':"defAction"
		},
		home:function(){
			require(["text!../home/index.html","../home/home"],function(tpl,ctrl){
				$(".switch").html(tpl);
				ctrl.requst();
				ctrl.shoppingList();
			});
			
		},
		superDistribution:function(){
			require(["text!../shandianpeisong/superDistribution.html"],function(tpl){
				$(".switch").html(tpl);
			});
		},
		order:function(){
			require(["text!../order/order.html","../order/order"],function(tpl,ctrl){
				$(".switch").html(tpl);
				ctrl.requst();
			});
		},
		shoppingCar:function(){
			require(["text!../shoppingCar/shoppingCar.html"],function(tpl){
				$(".switch").html(tpl);
			});
		},
		mine:function(){
			require(["text!../mine/mine.html"],function(tpl){
				$(".switch").html(tpl);
			});
		},
		defAction:function(){
			require(["text!../error/404.html"],function(tpl){
				$('.switch').html(tpl);
			})
		},
		initialize:function(){
			window.location.hash = "home";
		}
	});
	var router = new w();
	router.on("route",function(a){
		console.log(a);
		$(".publicA1 img").attr("src","image/home1.png");
		$(".publicA2 img").attr("src","image/superDistribution1.png");
		$(".publicA3 img").attr("src","image/order1.png");
		$(".publicA4 img").attr("src","image/shoppingCar1.png");
		$(".publicA5 img").attr("src","image/mine1.png");
		$("."+a+" img").attr("src","image/"+a+".png");
	});
	backbone.history.start();
})
