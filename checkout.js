if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready()
};


function ready(){
    var removeButtons = document.getElementsByClassName("remove-product");
    for (var i = 0; i < removeButtons.length; i++){
        var remove = removeButtons[i];
        remove.addEventListener("click", removeItem{   
        })
    }
}
function removeItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updatePriceTotal();
}
function quantityChange(even){
    var 
}


function updatePriceTotal(){
    var productPanel = document.getElementById("product-painel");
    var products = productPanel.getElementsByClassName("product");
    var total =0
    for( let i = 0; i < products.length; i++){
        var product = products[i]
        var productInfo = product.getElementsByClassName("product-info")[0];
        var productPrice = productInfo.getElementsByClassName("product-price")[0];
        var price = parseFloat(productPrice.getElementsByTagName("strong")[0].innerText;)



        var quantity = productInfo.childNodes[5].childNodes[3].innerText;

        total = total +(price*quantity)
    }
    document.getElementById("cart-subtotal").children[1].innerText = total;
}
updatePriceTotal();