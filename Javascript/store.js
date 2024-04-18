// Get all elements with the class "more-info-btn" (all "Purchase" buttons)
const purchaseButtons = document.querySelectorAll('.more-info-btn');

// Function to handle purchase button click
function purchaseHandler() {
    alert("Orders coming soon, please click on more info to fill the form and be on the waiting list");
}

// for looping through each bpruchase button and adding an event listener, such that one that button is select the alert shows on all purchase buttons
purchaseButtons.forEach(button => {
    button.addEventListener('click', purchaseHandler);
});

/*Work by Sylvia*/

function showMessage() {
    alert("This feature is currently unavailable");

}
