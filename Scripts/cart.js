const cartIcon = document.querySelector("#cart-icon");
const sideCartIcon = document.querySelector("#side-cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cartclose");
const cartContent = document.querySelector(".cartcontent");
const buyNowButton = document.querySelector(".btnbuy");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
sideCartIcon.addEventListener("click", () => {
    document.querySelector(".sidebar").style.display = "none"; // Hide sidebar
    cart.classList.add("active");
});
cartClose.addEventListener("click", () => cart.classList.remove("active"));

// Add to cart buttons 
const addCartButtons = document.querySelectorAll(".add-to-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-card");
        
        if(productBox){
        addToCart(productBox);}
        else{
            addSingleProductCart();
        }
    });
});

//add to cart from product
const addSingleProductCart = () =>{
    const productTitle = document.getElementById("productName").textContent;
    const productPrice = document.getElementById("productPrice").textContent;
    const productImgSrc = document.querySelector(".slidercontainer img")?.src ;

    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if(savedCart.some(item => item.title === productTitle)){
        alert('This item is already in your cart.');
        return;
    }
    const newItem = {
        img: productImgSrc,
        title: productTitle,
        price: productPrice,
        quantity: qtyElement.textContent
    };

    savedCart.push(newItem);
    localStorage.setItem("cart",JSON.stringify(savedCart));
    renderCart();
}

//add to cart from product-card
const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (savedCart.some(item => item.title === productTitle)) {
        alert("This item is already in your cart.");
        return;
    }

    const newItem = {
        img: productImgSrc,
        title: productTitle,
        price: productPrice,
        quantity: 1
    };

    savedCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(savedCart));
    renderCart();
};

const renderCart = () => {
    cartContent.innerHTML = "";
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    savedCart.forEach(item => {
        const cartBox = document.createElement("div");
        cartBox.classList.add("cartbox");
        cartBox.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cartimg">
            <div class="cartdetail">
                <h2 class="cartproduct">${item.title}</h2>
                <span class="cartprice">${item.price}</span>
                <div class="cartquantity">
                    <button id="decrement">-</button>
                    <span class="number">${item.quantity}</span>
                    <button id="increment">+</button>
                </div>
            </div>
            <i class="fa-solid fa-trash cartremove"></i>
        `;

        cartContent.appendChild(cartBox);

        // Remove item
        cartBox.querySelector(".cartremove").addEventListener("click", () => {
            removeFromLocalStorage(item.title);
            renderCart();
        });

        // Quantity change
        cartBox.querySelector(".cartquantity").addEventListener("click", event => {
            const numberElement = cartBox.querySelector(".number");
            const decrementButton = cartBox.querySelector("#decrement");
            let quantity = parseInt(numberElement.textContent);

            if (event.target.id === "decrement" && quantity > 1) {
                quantity--;
                if (quantity === 1) {
                    decrementButton.style.color = "#999";
                }
            } else if (event.target.id === "increment") {
                quantity++;
                decrementButton.style.color = "#333";
            }

            numberElement.textContent = quantity;
            updateQuantityInStorage(item.title, quantity);
            renderCart();
        });
    });

    updateCartCount();
    updateTotal();
};

const removeFromLocalStorage = title => {
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    savedCart = savedCart.filter(item => item.title !== title);
    localStorage.setItem("cart", JSON.stringify(savedCart));
};

const updateQuantityInStorage = (title, newQuantity) => {
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    savedCart = savedCart.map(item => {
        if (item.title === title) item.quantity = newQuantity;
        return item;
    });
    localStorage.setItem("cart", JSON.stringify(savedCart));
};

const updateTotal = () => {
    const totalPrice = document.querySelector(".totalprice");
    const cartBoxes = cartContent.querySelectorAll(".cartbox");
    let total = 0;

    cartBoxes.forEach(cartBox => {
        const price = parseFloat(cartBox.querySelector(".cartprice").textContent.replace("$", ""));
        const quantity = parseInt(cartBox.querySelector(".number").textContent);
        total += price * quantity;
    });

    totalPrice.textContent = `$${total.toFixed(2)}`;
};
//updating number of items inside car
const updateCartCount = () => {
    const cartItemCountBadge = document.querySelector(".itemcount");
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = savedCart.reduce((sum, item) => sum + parseInt(item.quantity), 0);

    if (totalCount > 0) {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = totalCount;
    } else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    }
};

// Buy Now Button
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cartbox");
    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please add items to your cart before buying.");
        return;
    }else{
        const isLoggedIn = localStorage.getItem("loggedIn") === "true";

        if (!isLoggedIn) {
          alert("You must be logged in to checkout.");
          window.location.href = "login.html"; // or wherever your login page is
        } else {
            renderCart();
         alert("Thank you for your purchase!");

          window.location.href = "checkout.html"; // proceed to checkout
        }
    }
    
});

// Load cart on page load
window.addEventListener("DOMContentLoaded", renderCart);

