// إظهار الرسالة عند الضغط على السهم
function showMessage() {
    const newMessage = document.getElementById("newMessage");

    // إذا كانت الرسالة مخفية، أظهرها
    if (newMessage.classList.contains("hidden")) {
        newMessage.classList.remove("hidden");
        newMessage.classList.add("showMessage");

        // التمرير إلى أسفل الصفحة
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });

        // إخفاء السهم والنصوص الإرشادية
        document.querySelector('.arrow').style.display = 'none';
        document.querySelector('.instructions').style.display = 'none';
    }
}

// زر العودة للأعلى
window.onscroll = function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
