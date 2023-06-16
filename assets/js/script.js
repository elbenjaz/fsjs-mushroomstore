let addToCart = () => {
    let userQuantity = document.querySelector("#user-quantity");
    let userColor    = document.querySelector("#user-color");

    let mushroomPrice = document.querySelector("#mushroom-price");
    
    userColor.value    = userColor.value || "#f73435";
    userQuantity.value = userQuantity.value || 1;

    document.querySelector("#mushroom-color").style.backgroundColor = userColor.value;

    document.querySelector("#cart-color").style.backgroundColor     = userColor.value;
    document.querySelector("#cart-color-value").innerHTML           = userColor.value;
    document.querySelector("#cart-quantity").innerHTML              = userQuantity.value;
    document.querySelector("#cart-price").innerHTML                 = "$" + (userQuantity.value * mushroomPrice.dataset.value).toLocaleString("es-CL");
};

document.querySelector("#add-to-cart").addEventListener("click", addToCart);

/*
document.querySelector("#user-color").addEventListener("change", addToCart);
document.querySelector("#user-quantity").addEventListener("change", addToCart);
*/
document.querySelectorAll(".mushroom-form-control").forEach(element => {
    element.addEventListener("change", addToCart);
});
