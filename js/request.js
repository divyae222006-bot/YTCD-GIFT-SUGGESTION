function setupBookingForm() {

    const form = document.getElementById("giftForm");

    const occasion = document.getElementById("occasion");
    const giftProduct = document.getElementById("giftProduct");
    const destination = document.getElementById("destination");

    // Add occasions
    YTDC_DATA.categories.forEach(function(category) {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        occasion.appendChild(option);
    });


    // Add gifts
    YTDC_DATA.products.forEach(function(product) {

        const option = document.createElement("option");

        option.value = product.name;
        option.textContent =
            `${product.name} - ₹${product.price}`;

        giftProduct.appendChild(option);
    });


    // Add destinations
    YTDC_DATA.destinations.forEach(function(place) {

        const option = document.createElement("option");

        option.value = place;
        option.textContent = place;

        destination.appendChild(option);
    });


    // Booking submit
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const customerName =
            document.getElementById("customerName").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;
            if (phone.length !== 10) {
                 alert("Please enter a valid 10-digit phone number.");
                 return;
                }
        const selectedOccasion =
            occasion.value;

        const selectedGift =
            giftProduct.value;

        const selectedDestination =
            destination.value;

        const deliveryDate =
            document.getElementById("deliveryDate").value;

        const quantity =
            document.getElementById("quantity").value;

        const message =
            document.getElementById("message").value;


        // Generate transaction ID
        const transactionId =
            "YTDC-TXN-" +
            Math.floor(10000 + Math.random() * 90000);


        const request = {

            transactionId: transactionId,

            customerName: customerName,

            email: email,

            phone: phone,

            occasion: selectedOccasion,

            gift: selectedGift,

            destination: selectedDestination,

            deliveryDate: deliveryDate,

            quantity: quantity,

            message: message,

            status: "Pending",

            date: new Date().toLocaleString()
        };


        // Get existing requests
        const requests =
            JSON.parse(localStorage.getItem("ytdcRequests")) || [];


        // Add new request
        requests.push(request);


        // Save request
        localStorage.setItem(
            "ytdcRequests",
            JSON.stringify(requests)
        );


        // Display result
        document.getElementById("bookingResult").innerHTML = `

            <div class="success">

                <h3>Gift Request Submitted Successfully!</h3>

                <p>
                    <strong>Transaction ID:</strong>
                    ${transactionId}
                </p>

                <p>
                    <strong>Name:</strong>
                    ${customerName}
                </p>

                <p>
                    <strong>Gift:</strong>
                    ${selectedGift}
                </p>

                <p>
                    <strong>Destination:</strong>
                    ${selectedDestination}
                </p>

                <p>
                    <strong>Status:</strong>
                    Pending
                </p>

            </div>
        `;


        form.reset();
    });
}