
/*Javascript for Product and Men's Page by Tope*/


// for all elements with the class "more-info-btn" (all "Purchase" buttons)
const purchaseButtons = document.querySelectorAll('.more-info-btn');


// Function to handle purchase button click
function purchaseHandler() {
    alert("Orders coming soon, please click on more info to fill the form and be on the waiting list");
}

// Loop through each purchase button and add event listener
purchaseButtons.forEach(button => {
    button.addEventListener('click', purchaseHandler);
});