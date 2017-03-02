require.config({
	paths: {
		"jquery": "lib/jquery-2.2.3",
		"root": "root",
		"backbone": "lib/backbone.min",
		"underscore": "lib/underscore.min",
		"swiper": "lib/swiper-3.3.1.min",
		"fastclick": "lib/fastclick",
		"text": "lib/text",
		"flexible": "lib/flexible"
	}
});
require(["flexible", "root", "fastclick"], function() {
	window.addEventListener('load', function() {
		new FastClick(document.body);
	}, false);
});