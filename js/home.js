function showFeaturedGifts() {

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    YTDC_DATA.products.slice(0, 4).forEach(function(product) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
        `;

        productList.appendChild(card);
    });
}

function goToBooking() {

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}