$(window).on("scroll", function() {

		var body = document.body;
		var html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight,
		                       html.clientHeight, html.scrollHeight, html.offsetHeight );

		var scrollAmount = window.scrollY;
		    if (scrollAmount > ((height-window.innerHeight)*.9)) {
		    alert("test");
		    }
});

function getItems () {
	var products = [];

	const cartProducts = document.querySelectorAll(".mini-cart-product");

  for (var i = 0; i < cartProducts.length; i++) {
    const product = cartProducts[i];
    const image = product.querySelector('.mini-cart-image img').src
    const name = product.querySelector(".mini-cart-name").innerText

    products.push({
      name,
      image
    })
  }
  
	return products;
}
