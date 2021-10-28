let nameInput = document.querySelector("#nameInput");
let priceInput = document.querySelector("#priceInput");
let button = document.querySelector("#addBtn");

button.addEventListener('click', function () {
    let name = nameInput.value
    let price = priceInput.value
    let newProduct = {
        name: name,
        price: price
    }
    let productsArray = JSON.parse(localStorage.getItem("productsArray"))
    if (productsArray === null) {
        productsArray = [];

    }
    productsArray.push(newProduct)
    localStorage.setItem("productsArray", JSON.stringify(productsArray))
})
