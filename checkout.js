if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready()
};
function ready(){
    var removeButtons = document.getElementsByClassName("remove-product");
    for (var i = 0; i < removeButtons.length; i++){
        var remove = removeButtons[i];
        remove.addEventListener("click", removeItem)
    }  
    var productPanel = document.getElementById("product-painel");
    var products = productPanel.getElementsByClassName("product");
    for( let i = 0; i < products.length; i++){
        var product = products[i]
        var productInfo = product.getElementsByClassName("product-info")[0];
        var quantity = productInfo.childNodes[5].childNodes[3].innerText; //1
        var input = quantity[i];
    }
}
function removeItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updatePriceTotal();
}
for( let i = 0; i < 3; i++){
    var minuses = document.getElementsByClassName("fas fa-minus")[i].parentElement;
    minuses.addEventListener("click", ()=>{
        var quantity = document.getElementsByClassName("product-quantity")[i].innerText;
        if(quantity>=1){
            document.getElementsByClassName("product-quantity")[i].innerText = quantity-1;
        }
        updatePriceTotal();
    })
    var pluses = document.getElementsByClassName("fas fa-plus")[i].parentElement;
    pluses.addEventListener("click", ()=>{
        var quantity = document.getElementsByClassName("product-quantity")[i].innerText;
        document.getElementsByClassName("product-quantity")[i].innerText = +quantity + 1;
        updatePriceTotal();
    })
}
function updatePriceTotal(){
    var productPanel = document.getElementById("product-painel");
    var products = productPanel.getElementsByClassName("product");
    subTotal = 0;
    for( let i = 0; i < products.length; i++){
        var product = products[i]
        var productInfo = product.getElementsByClassName("product-info")[0];
        var productPrice = productInfo.getElementsByClassName("product-price")[0];
        var price =  productPrice.getElementsByTagName("strong")[0].innerText;
        var quantity = productInfo.childNodes[5].childNodes[3].innerText; //1
        var productTotal = productInfo.childNodes[9].innerText; //1
        productTotal = quantity * price;
        productTotal = Math.round(productTotal*100)/100;
        productInfo.childNodes[9].innerText = productTotal;
        subTotal = subTotal + productTotal;
        subTotal = Math.round(subTotal*100)/100;
    }
    document.getElementById("cart-subtotal").children[1].innerText = subTotal;
    var tax = document.getElementById("cart-tax").children[1];
    tax.innerText =  Math.floor(+subTotal*(0.18)*100)/100; //Tax
    var shipping = document.getElementById("cart-shipping").children[1].innerText;
    var cartTotal = document.getElementById("cart-total").children[1];
    cartTotal.innerText = Math.floor((subTotal + +tax.innerText + +shipping)*100)/100;
}
updatePriceTotal();




// Solution 2. You must change poduct qunatity's class to id
// const taxRate = 0.18;
// const shippingPrice = 15.0;

// window.onload = () => {
//     window.localStorage.setItem("taxRate", taxRate);
//     localStorage.setItem("shippingPrice", shippingPrice);

//     window.sessionStorage.setItem("taxRate", taxRate);
//     sessionStorage.setItem("shippingPrice", shippingPrice);

//     calculateCartTotal();
// }

// let quantityControllerDivs = document.getElementsByClassName("quantity-controller");
// console.log(quantityControllerDivs);

// [...quantityControllerDivs].forEach((quantityControllerDiv)=>{
//     //minus button
//     let quantityP = quantityControllerDiv.querySelector("#product-quantity");
//     quantityControllerDiv.firstElementChild.addEventListener("click", ()=>{
//         // if(quantityP.innerText != "1"){
//         //     quantityP.innerText = parseInt(quantityP.innerText) - 1;
//         // }
//         quantityP.innerText = parseInt(quantityP.innerText) - 1;
//         if(quantityP.innerText == "0"){
//             alert("product will be removed!");
//             quantityControllerDiv.parentElement.parentElement.remove();
//         }
//         calculateProductTotal(quantityP);
//     });
//     //plus button
//     quantityControllerDiv.lastElementChild.addEventListener("click", ()=>{
//         quantityP.innerText = parseInt(quantityP.innerText) + 1;
//         calculateProductTotal(quantityP);
//     });
// });

// const calculateProductTotal = (quantityP) =>{
//     let productInfoDiv = quantityP.parentElement.parentElement;
//     const productPrice = parseFloat(productInfoDiv.querySelector("strong").innerText);
//     // console.log(productPrice);
//     // console.log(quantityP.innerText);
//     let productTotalPrice = productPrice * parseInt(quantityP.innerText);
//     // console.log(productTotalPrice);
//     let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
//     productTotalDiv.innerText = productTotalPrice.toFixed(2);
//     calculateCartTotal();
// }

// const calculateCartTotal = () =>{
//     // NodeList.forEach or array.forEach
//     let productTotalPrices = document.querySelectorAll(".product-line-price");

//     // HTML Collection[...].forEach
//     // let productTotalPrices = document.getElementsByClassName("product-line-price");

//     let subtotal = 0;
//     console.log(productTotalPrices);
//     productTotalPrices.forEach((productPrice)=>{
//         subtotal += parseFloat(productPrice.innerText);
//     });
//     // console.log(subtotal);
//     // let taxPrice = subtotal * taxRate;
//     let taxPrice = subtotal * parseFloat(localStorage.getItem("taxRate"));
//     let shipping = (subtotal > 0 ? shippingPrice : 0);
//     let cartTotal = subtotal + taxPrice + shipping;

//     document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
//     document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
//     document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
//     document.getElementById("cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
// }

// document.querySelectorAll(".remove-product").forEach((removeButton)=>{
//     removeButton.addEventListener("click", ()=>{
//         removeProduct(removeButton);
//     });
// });

// const removeProduct = (removeButton) =>{
//     let productDiv = removeButton.parentElement.parentElement.parentElement;
//     productDiv.remove();
//     calculateCartTotal();
// }