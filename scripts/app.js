/* PRODUCTS SECTION */
let scrollTop;
const productsScrollTop = ()=>{
    let productContainer = document.querySelector(".products__productsContainer");
    productContainer.scrollTop = 0;
}

const closeProductsInfo = (e)=>{
    let products = document.querySelectorAll(".products__products__producto")
    products = Array.from(products);
   
        products.forEach((product)=>{
            if (!product.contains(e.target)){
                let productInfo = product.querySelector(".products__products__producto__info")
                let img = product.querySelector(".products__products__producto__imgContainer img");
            
                productInfo.classList.remove("translateY-0");
                img.classList.remove("transformScale");
            }
        })
    
}

const removeModal = (e)=>{
    let buttonOpen = document.querySelector("#products__button--open");
    let productContainer = document.querySelector(".products__productsContainer");

    if (e.target != productContainer && e.target != buttonOpen){
        if (!productContainer.contains(e.target)){
            productContainer.classList.remove("translateX-0");
            document.removeEventListener("click", removeModal);

            let products = document.querySelectorAll(".products__products__producto")
            products = Array.from(products);
            products.forEach((product)=>{
                let productInfo = product.querySelector(".products__products__producto__info")
                let img = product.querySelector(".products__products__producto__imgContainer img");
            
                productInfo.classList.remove("translateY-0");
                img.classList.remove("transformScale");    
            })

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

        let products = document.querySelectorAll(".products__products__producto")
        products = Array.from(products);
        products.forEach((product)=>{
            let productInfo = product.querySelector(".products__products__producto__info")
            let img = product.querySelector(".products__products__producto__imgContainer img");
        
            productInfo.classList.remove("translateY-0");
            img.classList.remove("transformScale");    
        })
        
        scrollTop = setTimeout(productsScrollTop, 400);
    })
}

function toggleMoreInfo(){
    let products = document.querySelectorAll(".products__products__producto")
    let productContainer = document.querySelector(".products__productsContainer");

    products.forEach((product)=>{
        let productInfo = product.querySelector(".products__products__producto__info")
        let img = product.querySelector(".products__products__producto__imgContainer img");
        product.addEventListener("click", ()=>{
            productInfo.classList.toggle("translateY-0");
            img.classList.toggle("transformScale");
            productContainer.addEventListener("click", closeProductsInfo);
        })
    })

}

toggleMore();
toggleLess();
toggleMoreInfo();