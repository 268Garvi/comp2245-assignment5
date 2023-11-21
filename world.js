window.onload = function () {
    // Get references to HTML elements
    var button = document.getElementById("lookup");
    var result = document.getElementById("result");
    var searchValue = document.getElementById("country");
    // Initialize the XMLHttpRequest object outside the click event listener
    var Req = new XMLHttpRequest();

    // Add a click event listener to the "Lookup" button
    button.addEventListener("click", function () {
        // Construct the URL for the Ajax request, including the country parameter
        var url = "http://localhost/comp2245-assignment5/world.php?country=" + encodeURIComponent(searchValue.value);

        // Open a GET request to the specified URL
        Req.open('GET', url);
        // Set up a callback function to handle the response
        Req.onreadystatechange = respond;
        // Send the Ajax request
        Req.send();
    });

    // Callback function to handle the Ajax response
    function respond() {
        // Check if the request has completed
        if (Req.readyState === XMLHttpRequest.DONE) {
            // Check if the server responded with a successful status code
            if (Req.status >= 200 && Req.status < 300) {
                // Update the content of the "result" div with the server's response
                result.innerHTML = Req.responseText;
            } else {
                // Alert the user with the specific error status
                alert('Error: ' + Req.status + ' - ' + Req.statusText);
            }
        }
    }
};
