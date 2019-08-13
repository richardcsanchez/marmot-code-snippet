$(window).on("scroll", function() {
	if (openedPopUp) return;

		var body = document.body;
		var html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight,
		                       html.clientHeight, html.scrollHeight, html.offsetHeight );

		var scrollAmount = window.scrollY;
		    if (scrollAmount > ((height-window.innerHeight)*.9)) {
		    alert("test");
		    }
});
