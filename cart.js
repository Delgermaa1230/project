if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// console.log("Testtt")

function ready() {
    var removeCartItemBtns = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemBtns.length; i++) {
        var button = removeCartItemBtns[i]
        button.addEventListener('click', function (event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()
        })
    }}

//     var quanityInput = document.getElementsByClassName('cart-quantity-input')
//     for (var i = 0; i < quanityInput.length; i++) {
//         var input = quanityInput[i]
//         input.addEventListener('change', quanityChanged)
//         updateCartTotal()
//     }
// }

// function quanityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-item')
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     console.log(cartRows)
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         // total = total + (price * quantity)
//         // console.log(price)
//         // console.log(total)
//     }
//     // document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }