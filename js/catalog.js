function displayCategories() {

    const categoryList = document.getElementById("categoryList");

    categoryList.innerHTML = "";

    YTDC_DATA.categories.forEach(function(category) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${category}</h3>
            <p>Choose a suitable gift for this occasion.</p>
        `;

        categoryList.appendChild(card);
    });
}


function displayProducts() {

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    YTDC_DATA.products.forEach(function(product) {

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


function displayDestinations() {

    const destinationList =
        document.getElementById("destinationList");

    destinationList.innerHTML = "";

    YTDC_DATA.destinations.forEach(function(destination) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${destination}</h3>
            <p>Gift delivery is available here.</p>
        `;

        destinationList.appendChild(card);
    });
}


function displayPackages() {

    const packageList =
        document.getElementById("packageList");

    packageList.innerHTML = "";

    YTDC_DATA.packages.forEach(function(pkg) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${pkg.name}</h3>
            <p>Package Price: ₹${pkg.price}</p>
        `;

        packageList.appendChild(card);
    });
}