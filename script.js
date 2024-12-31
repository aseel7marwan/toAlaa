// Show additional message when button is clicked
function showMessage() {
    const newMessage = document.getElementById("newMessage");
    newMessage.classList.remove("hidden");
    newMessage.classList.add("showMessage");
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom after revealing content
        behavior: "smooth",
    });

    // Hide the arrow and instruction text after showing the message
    document.querySelector('.arrow').classList.add('hidden');
    document.querySelector('.instructions').classList.add('hidden');
}

// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
