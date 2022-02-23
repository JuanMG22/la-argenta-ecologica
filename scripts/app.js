/* PRODUCTS SECTION */
function toggleMore(){
    let button = document.querySelector("#products__button--open");
    let productContainer = document.querySelector(".products__productsContainer");
    
    button.addEventListener("click", ()=>{
        productContainer.classList.add("translateX-0")
    })
}

function toggleLess(){
    let button = document.querySelector("#products__button--close");
    let productContainer = document.querySelector(".products__productsContainer");
    
    button.addEventListener("click", ()=>{
        productContainer.classList.remove("translateX-0")
    })
}

toggleMore();
toggleLess();