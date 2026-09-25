function setupAdminPanel() {

    const button = document.getElementById("loadAdminBtn");

    button.addEventListener("click", function() {

        const requests =
            JSON.parse(localStorage.getItem("ytdcRequests")) || [];

        const container =
            document.getElementById("adminRequests");

        if (requests.length === 0) {

            container.innerHTML =
                "<p>No gift requests available.</p>";

            return;
        }

        let table = `
            <table>
                <tr>
                    <th>Transaction ID</th>
                    <th>Customer</th>
                    <th>Gift</th>
                    <th>Destination</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
        `;

        requests.forEach(function(request, index) {

            table += `
                <tr>
                    <td>${request.transactionId}</td>
                    <td>${request.customerName}</td>
                    <td>${request.gift}</td>
                    <td>${request.destination}</td>
                    <td>${request.status}</td>

                    <td>
                        <button onclick="updateStatus(${index}, 'Approved')">
                            Approve
                        </button>

                        <button onclick="updateStatus(${index}, 'Rejected')">
                            Reject
                        </button>
                    </td>
                </tr>
            `;
        });

        table += "</table>";

        container.innerHTML = table;
    });
}


function updateStatus(index, newStatus) {

    const requests =
        JSON.parse(localStorage.getItem("ytdcRequests")) || [];

    requests[index].status = newStatus;

    localStorage.setItem(
        "ytdcRequests",
        JSON.stringify(requests)
    );

    alert(
        "Transaction " +
        requests[index].transactionId +
        " is now " +
        newStatus
    );

    location.reload();
}