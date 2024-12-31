function showMessage() {
    const newMessage = document.getElementById("newMessage");

    // إضافة كلاس "show" للرسالة الثانية
    const envelope = document.querySelector(".envelope");
    envelope.classList.add("show");

    // إخفاء السهم والنصوص الإرشادية
    document.querySelector('.arrow').style.display = 'none';
    document.querySelector('.instructions').style.display = 'none';

    // التمرير لأسفل عند إظهار الرسالة
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
}
