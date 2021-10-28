let productsArray = JSON.parse(localStorage.getItem("productsArray"))
console.log(productsArray)
listDiv = $("#list")
for (let i = 0; i < productsArray.length; i++) {
    listDiv.append(` <div class="info_block">

<p> Название вашего товара: ${productsArray[i].name}</p>
<p> Цена товара: ${productsArray[i].price}</p>
        </div>`)
}