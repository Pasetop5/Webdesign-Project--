// Function to show more information for each product
function showMoreInfo(productId) {
    const productInfo = document.getElementById(`product${productId}-info`);
    if (productInfo) {
        productInfo.classList.toggle('hidden');
    }
}