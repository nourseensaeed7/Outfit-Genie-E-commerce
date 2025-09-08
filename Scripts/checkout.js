document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#checkout tbody");
    const cartSubtotalCell = document.querySelector("#subtotal table tr:nth-child(1) td:nth-child(2)");
    const cartTotalCell = document.querySelector("#subtotal table tr:nth-child(3) td:nth-child(2)");
    const pocButton = document.querySelector(".pocbtn");
    // STEP 1: Load cart items from localStorage
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];

    // STEP 2: Render products dynamically
    tableBody.innerHTML = cartData.map(item => {
        const price = parseFloat(item.price.replace("$", ""));
        return `
            <tr>
                <td><a href="#"><i class="fa-solid fa-circle-xmark"></i></a></td>
                <td><img src="${item.img}" alt="${item.title}" width="50"></td>
                <td>${item.title}</td>
                <td>$${price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1"></td>
                <td>$${(price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
    }).join("");

    // STEP 3: Add logic for subtotal and quantity change
    function updateTotals() {
        let subtotal = 0;
        const rows = tableBody.querySelectorAll("tr");

        rows.forEach(row => {
            const priceText = row.querySelector("td:nth-child(4)").innerText.replace("$", "");
            const quantityInput = row.querySelector("td:nth-child(5) input");
            const subtotalCell = row.querySelector("td:nth-child(6)");

            const price = parseFloat(priceText);
            const quantity = parseInt(quantityInput.value);
            const itemSubtotal = price * quantity;

            subtotalCell.innerText = `$${itemSubtotal.toFixed(2)}`;
            subtotal += itemSubtotal;
        });

        cartSubtotalCell.innerText = `$${subtotal.toFixed(2)}`;
        cartTotalCell.innerText = `$${subtotal.toFixed(2)}`;
    }

    // Quantity change listener
    tableBody.addEventListener("input", function (e) {
        if (e.target.tagName === "INPUT" && e.target.type === "number") {
            updateTotals();
        }
    });

    // Remove item
    tableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("fa-circle-xmark")) {
            const row = e.target.closest("tr");
            row.remove();
            updateTotals();
        }
    });

pocButton.addEventListener("click", function () {
    // Clear localStorage cart
    localStorage.removeItem("cart");

    // Clear the table content
    tableBody.innerHTML = "";

    // Reset totals
    cartSubtotalCell.innerText = "$0.00";
    cartTotalCell.innerText = "$0.00";
});
updateTotals();
});