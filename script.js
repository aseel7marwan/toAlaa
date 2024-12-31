// Show additional message when the box is clicked
function showMessage() {
    const newMessage = document.getElementById("newMessage");
    const instructionsBox = document.getElementById("instructionsBox");

    newMessage.classList.remove("hidden");
    newMessage.classList.add("showMessage");
    instructionsBox.style.display = "none"; // Hide the box after clicking

    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom after revealing content
        behavior: "smooth",
    });
}
