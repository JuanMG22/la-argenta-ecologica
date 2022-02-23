/* PRODUCTS SECTION */
let scrollTop;
const productsScrollTop = ()=>{
    let productContainer = document.querySelector(".products__productsContainer");
    productContainer.scrollTop = 0;
}
const removeModal = (e)=>{
    let buttonOpen = document.querySelector("#products__button--open");
/*     let buttonClose = document.querySelector("#products__button--close"); */
    let productContainer = document.querySelector(".products__productsContainer");

    console.log(e.target)
    if (e.target != productContainer && e.target != buttonOpen){
        if (!productContainer.contains(e.target)){
            productContainer.classList.remove("translateX-0");
            document.removeEventListener("click", removeModal);

            scrollTop = setTimeout(productsScrollTop, 400);
        }
    }
};

function toggleMore(){
    let button = document.querySelector("#products__button--open");
    let productContainer = document.querySelector(".products__productsContainer");
    
    button.addEventListener("click", ()=>{
        clearTimeout(scrollTop);
        productContainer.classList.add("translateX-0");
        document.addEventListener("click", removeModal)
    })
}

function toggleLess(){
    let button = document.querySelector("#products__button--close");
    let productContainer = document.querySelector(".products__productsContainer");
    
    button.addEventListener("click", ()=>{
        productContainer.classList.remove("translateX-0")
        document.removeEventListener("click", removeModal)
        
        scrollTop = setTimeout(productsScrollTop, 400);
    })
}

toggleMore();
toggleLess();