function showMessage() {
    const newMessage = document.getElementById("newMessage");

    // إظهار الرسالة الثانية
    newMessage.classList.remove("hidden");

    // إخفاء السهم والنصوص الإرشادية
    document.querySelector('.arrow').style.display = 'none';
    document.querySelector('.instructions').style.display = 'none';

    // التمرير لأسفل عند إظهار الرسالة
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
}
