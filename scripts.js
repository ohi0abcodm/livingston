

// Show the loading image for 0.3 seconds and then display the content
window.onload = function() {
    setTimeout(function() {
        // Hide the loading image and show the content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 300); // 0.3 seconds (300ms)
};

 // Spinner
 var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();


// Function to copy the address to clipboard
function copyAddress(crypto) {
    var addressSpan = document.getElementById(crypto + "-address");
    var address = addressSpan.innerText;

    // Create a temporary textarea element to hold the address
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = address;
    document.body.appendChild(tempTextarea);

    // Select and copy the address
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea element
    document.body.removeChild(tempTextarea);

    // Show a message indicating that the address has been copied
    alert("Address copied to clipboard: " + address);
}

// Function to verify the payment (redirect to another page)
function verifyPayment() {
    window.location.href = "verify_payment.html";
}

// Countdown timer function
function startCountdown() {
    var countdownElement = document.getElementById("countdown");
    var timeLeft = 60 * 60; // 60 minutes in seconds

    var countdownInterval = setInterval(function() {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        // Display the remaining time in the format MM:SS
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Decrease the time left
        timeLeft--;

        // Check if the countdown has finished
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            // Optionally, you can add a redirect here
            // window.location.href = "redirect_page.html";
        }
    }, 1000); // Update the countdown every second
}

document.addEventListener("DOMContentLoaded", function() {
    // Get all payment method elements
    var paymentMethods = document.querySelectorAll(".payment-method");

    // Loop through each payment method element
    paymentMethods.forEach(function(method) {
        // Get the corresponding popup element
        var popupId = method.id + "-popup";
        var popup = document.getElementById(popupId);

        // Add event listener to open the popup when the payment method is clicked
        method.addEventListener("click", function() {
            popup.style.display = "block";
            startCountdown(); // Start the countdown timer when the popup is opened
        });

        // Get the close button element
        var closeBtn = popup.querySelector(".close-btn");

        // Add event listener to close the popup when the close button is clicked
        closeBtn.addEventListener("click", function() {
            popup.style.display = "none";
        });
    });
});
