// Wait for the window to finish loading before executing the script
window.onload = function () {
    // Get references to HTML elements
    var button = document.getElementById("lookup");
    var result = document.getElementById("result");
    var searchValue = document.getElementById("country");
    // Add a click event listener to the "Lookup" button
    button.addEventListener("click", function () {
      // Create a new XMLHttpRequest object
      var Req = new XMLHttpRequest();
  
      // Construct the URL for the Ajax request, including the country parameter
      var url = "http://localhost/comp2245-assignment5/world.php?country=" + searchValue.value;
      // Open a GET request to the specified URL
      Req.open('GET', url);
      // Send the Ajax request
      Req.send();
      // Set up a callback function to handle the response
      Req.onreadystatechange = respond;
    });
    
    // Callback function to handle the Ajax response
    function respond() {
      // Check if the request has completed
      if (Req.readyState === XMLHttpRequest.DONE) {
        // Check if the server responded with a 200 status (OK)
        if (Req.status === 200) {
          // Update the content of the "result" div with the server's response
          result.innerHTML = Req.responseText;
        } else {
          // Alert the user if there was an error
          alert('Error');
        }
      }
    }
  }
  