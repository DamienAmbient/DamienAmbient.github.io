const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
const form = document.querySelector(".ask");
const formBtn = document.querySelector(".form-btn");
const bannerBtn = document.querySelector(".banner-btn");

let cart = [];
let buttonsDOM = [];

function clearForm() {
    form.reset();
}
formBtn.addEventListener("click", clearForm);

class Products {
    async getProducts() {
        try {
            let result = await fetch("products.json");
            let data = await result.json();
            let products = data.items;
            products = products.map((item) => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.url;
                return { title, price, id, image };
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

class UI {
    displayProducts(products) {
        let result = "";
        products.forEach((product) => {
            result += `
        <article class="product">
                        <div class="img-container">
                            <img
                                src=${product.image}
                                alt="car part lens"
                                class="product-img"
                            />
                            <button class="bag-btn" data-id=${product.id}>
                                Buy now
                            </button>
                        </div>
                        <h3>${product.title}</h3>
                        <h4>$${product.price}</h4>
                    </article>
        `;
        });
        productsDOM.innerHTML = result;
    }
    getBagButtons() {
        const buttons = [...document.querySelectorAll(".bag-btn")];
        buttonsDOM = buttons;
        buttons.forEach((button) => {
            let id = button.dataset.id;
            let inCart = cart.find((item) => item.id === id);
            if (inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener("click", (event) => {
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                let cartItem = { ...Storage.getProduct(id), amount: 1 };
                cart = [...cart, cartItem];
                Storage.saveCart(cart);
                this.setCartValues(cart);
                this.addCartItem(cartItem);
                this.showCart();
            });
        });
    }
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map((item) => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    addCartItem(item) {
        const table = document.createElement("table");
        table.classList.add("cart-item");
        table.innerHTML = `
        <tr>
            <td><img src="${item.image}" alt="car part" /></td>
            <td class="td-second">
                <h4>${item.title}</h4>
                <h5>$ ${item.price}</h5>
                <span class="remove-item" data-id=${item.id}>remove</span>
            </td>
            <td class="td-third">
                <i class="fas fa-chevron-up" data-id=${item.id}></i>
                <p class="item-amount">${item.amount}</p>
                <i class="fas fa-chevron-down" data-id=${item.id}></i>
            </td>
        </tr>
    `;

        cartContent.appendChild(table);
    }
    showCart() {
        cartOverlay.classList.add("transparentBcg");
        cartDOM.classList.add("showCart");
        document.body.style.overflowY = "hidden";
    }
    setupAPP() {
        this.clickTriggerEscape();
        this.clickTriggerEmptySpace();
        this.scrollToProducts();
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener("click", this.showCart);
        closeCartBtn.addEventListener("click", this.hideCart);
    }
    populateCart(cart) {
        cart.forEach((item) => this.addCartItem(item));
    }
    hideCart() {
        cartOverlay.classList.remove("transparentBcg");
        cartDOM.classList.remove("showCart");
        document.body.style.overflowY = "auto";
    }
    cartLogic() {
        clearCartBtn.addEventListener("click", () => {
            this.clearCart();
        });
        cartContent.addEventListener("click", (event) => {
            if (event.target.classList.contains("remove-item")) {
                let removeItem = event.target.closest(".cart-item");
                let id = removeItem.querySelector(".remove-item").dataset.id;
                cartContent.removeChild(removeItem);
                this.removeItem(id);
            } else if (event.target.classList.contains("fa-chevron-up")) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find((item) => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            } else if (event.target.classList.contains("fa-chevron-down")) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find((item) => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText =
                        tempItem.amount;
                } else {
                    cartContent.removeChild(
                        lowerAmount.parentElement.parentElement
                    );
                    this.removeItem(id);
                }
            }
        });
    }
    clearCart() {
        let cartItems = cart.map((item) => item.id);
        cartItems.forEach((id) => this.removeItem(id));
        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart();
    }
    removeItem(id) {
        cart = cart.filter((item) => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `
        buy now
        `;
    }
    getSingleButton(id) {
        return buttonsDOM.find((button) => button.dataset.id === id);
    }
    clickTriggerEscape() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.hideCart();
            }
        });
    }
    clickTriggerEmptySpace() {
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("cart")) {
                this.hideCart();
            }
        });
    }
    scrollToProducts() {
        bannerBtn.addEventListener("click", function () {
            const productsSection = document.getElementById("catalog");
            productsSection.scrollIntoView({ behavior: "smooth" });
        });
    }
}

class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find((product) => product.id === id);
    }
    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart() {
        return localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    ui.setupAPP();

    products
        .getProducts()
        .then((products) => {
            ui.displayProducts(products);
            Storage.saveProducts(products);
        })
        .then(() => {
            ui.getBagButtons();
            ui.cartLogic();
        });
});
