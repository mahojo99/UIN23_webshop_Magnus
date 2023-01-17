let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    
    console.log(cart)

    renderCart()
    document.querySelector("#cart .label").innerHTML = cart.length
}

function renderCart() {
    let listHTML = ""
    cart.map(prod => listHTML += `<li>
    <span class="title">${prod.productTitle}Dragon Zane</span>
    <span class="price">${prod.productPrice}89,-</span>
    <span class="quantity">${prod.productQuantity}x1</span>
    <button class="delete">X</button>
</li>`)
    document.querySelector("#cartview ul").innerHTML = listHTML
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}