// Show the envelope and message when the button is clicked
function showMessage() {
    const newMessage = document.getElementById("newMessage");
    const envelope = document.querySelector(".envelope"); // تحديد الصندوق
    newMessage.classList.remove("hidden");
    newMessage.classList.add("showMessage");

    envelope.classList.remove("hidden");  // إزالة الكلاس hidden من الصندوق لإظهاره
    envelope.classList.add("showMessage");

    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom after revealing content
        behavior: "smooth",
    });
}

// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block"; // Show button
    } else {
        scrollTopBtn.style.display = "none"; // Hide button
    }
};

// Smoothly scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
