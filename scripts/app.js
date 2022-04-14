/* PRODUCTS SECTION */
let scrollTop;
let productModalFlag = 0;

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

    if (productModalFlag == 1){return}
    else if (e.target != productContainer && e.target != buttonOpen){
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

function closeProducts(){
    let productContainer = document.querySelector(".products__productsContainer");
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
}

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
    
    button.addEventListener("click", closeProducts);
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

function productModal(){
    let products = document.querySelectorAll(".products__products__producto");
    let modal = document.createElement("div");
    modal.classList.add("products__modal");
    let header = document.querySelector(".header");
    let headerNavegacion = document.querySelector(".header__navegacion--menu");

    const closeModal = (e)=>{
        if(document.body.contains(modal)){
            if (e.target == e.currentTarget){
                document.body.removeChild(modal);

                setTimeout(() => {
                    productModalFlag = 0;
                }, 0); 
            }
        }
    }

    const closeModalB = ()=>{
        if (document.body.contains(modal)){
            document.body.removeChild(modal);
            
            setTimeout(() => {
                productModalFlag = 0;
            }, 0); 
        }
    }

    const closeModalC = ()=>{
        if (document.body.contains(modal)){
            document.body.removeChild(modal);
            closeProducts();
            setTimeout(() => {
                productModalFlag = 0;
            }, 0); 
        }
    }

    const openModal = (modalImg)=>{
        if (modal.firstChild){
            modal.removeChild(modal.firstChild);
        }

        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        productModalFlag = 1;
    }

    products.forEach(product=>{
        let modalImg = document.createElement("img");
        let img = product.querySelector("img");
        modalImg.src = img.src; 
        
        let expandButton = product.querySelector(".products__products__producto__expand")
        
        expandButton.addEventListener("click", ()=>{
            openModal(modalImg)
        })
    })

    modal.addEventListener("click", closeModal);
    header.addEventListener("click", closeModalB);
    headerNavegacion.addEventListener("click", closeModalC)
}

productModal();
toggleMore();
toggleLess();
toggleMoreInfo();
