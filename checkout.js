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
        if(quantity>1){
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