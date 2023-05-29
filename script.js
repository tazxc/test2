// let a = document.querySelector('#add_btn');
// let basket_price = document.querySelector('.basket_price')
// let raf = document.querySelector('#raf')
// let esspresso = document.querySelector('#espresso')

// localStorage.setItem('latte', '240')
// localStorage.setItem('espresso', '230')

// let coffe = localStorage.getItem('latte')
// let esspresso = localStorage.getItem('espresso')

// let price = 0
// let count = 0
















// a.addEventListener("click", function() {
// 	price = Number(coffe)
// 	count += Number(price)

// 	basket_price.textContent = Number(count)
// 	console.log(count)
// });






// счетчик

window.addEventListener('click', function(event){

	let counterT
	let counter
	

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		counterT = event.target.closest('.counter')
		counter = counterT.querySelector('[data-counter]')

		
	}

	if(event.target.dataset.action === 'plus'){
		counter.innerText = ++counter.innerText
		
	}

	if(event.target.dataset.action === 'minus'){

		if (counter.innerText > 1) {
			counter.innerText = --counter.innerText

		}
		
	}
})


// корзина

const basket = document.querySelector('.basket')



window.addEventListener('click', function(event) {
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.card')

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product_img').getAttribute('src'),
			title: card.querySelector('.nameProduct').innerText,
			price: card.querySelector('.priceP').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}
		
		const itemInCart = basket.querySelector(`[data-id="${productInfo.id}"]`)

		if(itemInCart){
			const counterel = itemInCart.querySelector('[data-counter]')
			counterel.innerText = parseInt(counterel.innerText) + parseInt(productInfo.counter)
		}else{

			const cartItemHTML = `<div>
									<div class="cardProductBasket" data-id="${productInfo.id}">
 										<img src="${productInfo.imgSrc}" alt="">

 										<p>${productInfo.title}</p>
 									

 										<div class="counterBasket">
											<button class="item_control" data-action="minus">-</button>
											<div class="item_current" data-counter>${productInfo.counter}</div>
											<button class="item_control" data-action="plus">+</button>
										</div>

 										<p>${productInfo.price}</p>

 									</div>
								</div>`



			basket.insertAdjacentHTML('beforeend', cartItemHTML)
			

			card.querySelector('[data-counter]').innerText = '1'

		}




		// window.addEventListener('scroll', function() {
		// 	document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
		// })

		
	}
})



// счетчик для корзины

window.addEventListener('click', function(event){

	let counterBasket
	let counterB

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		counterBasket = event.target.closest('.counterBasket')
		counterB = counterBasket.querySelector('[data-counter]')

		
	}

	if(event.target.dataset.action === 'plus'){
		counterB.innerText = ++counterB.innerText
		
	}

	if(event.target.dataset.action === 'minus'){

		if (counterB.innerText > 1) {
			counterB.innerText = --counterB.innerText

		}
		
	}
})


































// <div class="card" data-id="${productInfo.id}">
// 		<div class="product">
// 			<a href=""><img src="${productInfo.imgSrc}" class="product_img"></a>
// 		</div>
// 		<div class="counter">
// 			<button class="item_control" data-action="minus">-</button>
// 			<div class="item_current" data-counter>${productInfo.counter}</div>
// 			<button class="item_control" data-action="plus">+</button>
// 		</div>
// 		<div class="product_price">
// 			<button data-cart class="buy_case">${productInfo.title}</button>
// 		</div>
// 	</div>