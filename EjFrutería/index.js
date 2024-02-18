let products = [
    {
        id: '1000',
        product: 'Fresas de Huelva',
        price: 410,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
        id: '1001',
        product: 'Kiwi amarillo',
        price: 245,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
        id: '1002',
        product: 'Manzana roja',
        price: 195,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
        id: '1003',
        product: 'Manzana verde',
        price: 170,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
        id: '1004',
        product: 'Melón',
        price: 135,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
        id: '1005',
        product: 'Naranja valenciana',
        price: 160,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
        id: '1006',
        product: 'Pera conferencia',
        price: 210,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
        id: '1007',
        product: 'Plátano',
        price: 260,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
        id: '1008',
        product: 'Sandía',
        price: 115,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
        id: '1009',
        product: 'Uva',
        price: 195,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
        id: '1010',
        product: 'Aguacate',
        price: 415,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
        id: '1011',
        product: 'Cereza del Bierzo',
        price: 520,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
        id: '1012',
        product: 'Granada',
        price: 310,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
        id: '1013',
        product: 'Limón',
        price: 155,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
        id: '1014',
        product: 'Nectarina',
        price: 180,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
        id: '1015',
        product: 'Piña',
        price: 320,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },

]
let productsSection = document.getElementById("products-section");
let currentPage = 0;
let itemsPerPage = 3;
let cart = [];

function showProducts() {
    products
        .filter((_, index) => Math.trunc(index / itemsPerPage) == currentPage)
        .forEach(({ id, product, price, image }) => {
            let precio = price.toString().slice(0, 1) + "." + price.toString().slice(1, 3);
            productsSection.innerHTML += `
                    <div class="product">
                        <center><img class="product-foto" src="${image}"></img></center>
                        <div class="product-data">
                            <div class="fruit-name">${product}</div>
                            <div class="price">${precio} €/kg</div>
                            <div class="btn btn-add-product" data-id="${id}"> Añadir </div>
                        </div>
                    </div>`;
        })
    let btns = document.querySelectorAll(".btn-add-product")
    btns.forEach(btn => {
        btn.addEventListener("click", addTocart)
    })
}
//Carrito
function addTocart(e) {
    let productId = e.target.dataset.id;
    products.forEach(item => {
        if (item.id == productId) {
            //let itemCart = item;
            if (item.cantidad) {
                item.cantidad++;
            } else {
                item.cantidad = 1;
                cart.push(item);
            }
        }
    })
    renderCart();
}

function renderCart(){
    let cartProducts = document.getElementById("cartProducts");
    let totalPrice = 0;
    cartProducts.innerHTML = ``;

    cart.forEach( item => {
        totalPrice += (Number(item.price.toString().slice(0, 1) + "." + item.price.toString().slice(1, 3)) * item.cantidad);
        let divProduct = document.createElement("div");

        let divCant = document.createElement("div");
        let divNombre = document.createElement("div");
        let divPrecio = document.createElement("div");

        
        divProduct.append(divCant);
        divProduct.append(divNombre);
        divProduct.append(divPrecio);

        divProduct.classList.add('productos');

        cartProducts.append(divProduct);
        divCant.innerHTML = `${item.cantidad} `;
        divNombre.innerHTML=  `${item.product}`
        divPrecio.innerHTML= `${item.price.toString().slice(0, 1) + "." + item.price.toString().slice(1, 3)}`
    })

    cartProducts.innerHTML += `<p class="precioTotal">${totalPrice.toFixed(2)}</p>`;
}

showProducts();

//Paginacion
let numPag = document.getElementById("numPag")

let next = document.getElementById("next")
next.addEventListener("click", () => {
    if (currentPage <= 4) {
        currentPage++;
        productsSection.innerHTML = ``;
        showProducts();
        numPag.textContent = `Pagina ${currentPage + 1} de 6`;
    }
});

let prev = document.getElementById("prev")
prev.addEventListener("click", () => {
    if (currentPage >= 1) {
        currentPage--;
        productsSection.innerHTML = ``;
        showProducts();
        numPag.textContent = `Pagina ${currentPage + 1} de 6`;
    }
});