<script>
    // Create a button element
    var button = document.createElement("button");
    
    // Set button attributes
    button.setAttribute("type", "button");
    button.setAttribute("class", "my-button-class");
    button.innerHTML = "Click Me"; // Set button text
    
    // Find the parent element where you want to append the button
    var parentElement = document.querySelector(".Kids-info");
    
    // Append the button to the parent element
    parentElement.appendChild(button);
</script>