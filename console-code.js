let openedPopUp = false;

function getItems () {
	var products = [];

	const cartProducts = document.querySelectorAll(".mini-cart-product");

  for (var i = 0; i < cartProducts.length; i++) {
    const product = cartProducts[i];
    const image = product.querySelector('.mini-cart-image img').src;
    const name = product.querySelector(".mini-cart-name").innerText;

    products.push({
      name,
      image
    });
  }

	return products;
}

function openPopUp() {
  if (openedPopUp) return;

  const items = getItems().map((item) => `
      <div class="modal-cart-item" style="padding:10px">
        <h4 style="font-weight: bold;
                    font-size: 14px;
                    float: right;">
            ${item.name}
        </h4>

        <img style="padding:4px;" src="${item.image}">
      </div>
  `)

  const cartQuantity = items.length

  const orderTotal = $(".order-value")[0].innerText

  const popUpTemplate = `
    <div class="modal-overlay"
    				style="position: fixed;
    				width: 100%;
    				height: 100%;
    				background: rgba(0,0,0,0.5);
    				top: 0;
    				left: 0;
    				z-index: 100;
    				display: flex;
    				justify-content: center;
    				align-items: center;"
    		>

			<div class="modal"
						style="background: white;
						padding: 30px 50px;"
				>

        <button onClick="closePopUp()" style="float:right;
																							font-weight:bold;
																							font-size: 15px">
						X
				</button>

        <h1 style="font-size: 35px;
										padding-bottom: 10px;">
						Your Cart
				</h1>

				<h4 style="font-size: 18px;
										padding-bottom: 10px;
										padding-left: 2px;">
						${cartQuantity} items
				</h4>

        <hr style="color: lightgray;
													margin-top: 20px;
													margin-bottom: 15px;
													border-style: solid;">

        <div class="modal-cart-items">
					{items}
				</div>

        <hr style="color: lightgray;
													margin-top: 20px;
													margin-bottom: 15px;
													border-style: solid;">

       <h4 style="size: 14px;
									font-weight: bold;
									padding: 5px;
									text-align: left;
									display: inline">
						Estimated Total
				</h4>

				<h4 style="font-size: 14px;
								    font-weight: bold;
								    padding: 5px;
								    text-align: right;
								    display: inline;
								    padding-left: 150px;">
							${orderTotal}
				</h4>

        <hr style="color: lightgray;
													margin-top: 20px;
													margin-bottom: 15px;
													border-style: solid;">

        <button onClick="goToCart()" style="background-color: rgb(220, 0, 0);
																				    padding: 12px;
																				    float: none;
																				    display: block;
																				    width: -webkit-fill-available;
																				    text-align: center;
																				    color: white;
																				    font-weight: bold;">
							CHECKOUT
				</button>
			</div>
		</div>
	`;

  const popUp = popUpTemplate.replace('{items}', items);

  openedPopUp = true;

  document.querySelector('body').innerHTML += popUp;

}

function closePopUp () {
	openedPopUp = false;
	document.querySelector('.modal-overlay').remove();
}

function goToCart() {
  window.location.href = document.querySelector('.minicart-link')
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
