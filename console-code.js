

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

function openPopUp() {

  const items = getItems().map((item) => `
    <div>
      <h4> ${item.name} </h4>
      <img src='${item.image}'
    </div>
  `)

  const cartQuantity = items.length

  const orderTotal = $(".order-value")[0].innerText

  const popUpTemplate = `

				<button>
						X
				</button>

				<h1>
						Your Cart
				</h1>

				<h4>
						${cartQuantity} items
				</h4>

				<hr>

				<div>
					{items}
				</div>

				<hr>

				<h4>
						Estimated Total
				</h4>

				<h4>
							${orderTotal}
				</h4>

				<hr>

				<button onClick="goToCart()">
							CHECKOUT
				</button>
			</div>
		</div>
	`;

  function goToCart() {
  	window.location.href = document.querySelector('.minicart-link')
  }

}

$(window).on("scroll", function() {

		var body = document.body;
		var html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight,
		                       html.clientHeight, html.scrollHeight, html.offsetHeight );

		var scrollAmount = window.scrollY;
		    if (scrollAmount > ((height-window.innerHeight)*.9)) {
		    openPopUp();
		    }
});
