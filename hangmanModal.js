// Get the modal
var modal = document.getElementById("imageModal");

// Get all the images that will trigger the modal
var images = document.querySelectorAll('.showcase img, .hero img');

// Get the modal image element
var modalImg = document.getElementById("modalImage");

// Function to open the modal and display the clicked image
images.forEach(image => {
    image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to close the modal when the close button is clicked
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal image
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
