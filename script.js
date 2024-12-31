// Show additional message when the clickable text is clicked
function showMessage() {
    const newMessage = document.getElementById("newMessage");
    const instructions = document.getElementById("instructions");

    newMessage.classList.remove("hidden");
    newMessage.classList.add("showMessage");
    instructions.style.display = "none"; // Hide the clickable text after it is clicked

    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom after revealing content
        behavior: "smooth",
    });
}
