// إظهار الرسالة عند النقر
function showMessage() {
    const newMessage = document.getElementById("newMessage");
    newMessage.classList.remove("hidden");
    newMessage.classList.add("showMessage");
}

// عند التمرير
window.onscroll = function () {
    const scrollButton = document.getElementById("scrollTopBtn");
    scrollButton.style.display = window.scrollY > 100 ? "block" : "none";
};
