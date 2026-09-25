document.addEventListener("DOMContentLoaded", function () {

    // Display project modules
    displayCategories();
    displayProducts();
    displayDestinations();
    displayPackages();

    // Setup booking form
    setupBookingForm();

    // Setup admin panel
    setupAdminPanel();


    // Contact form
    const contactForm =
        document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();
    });

});