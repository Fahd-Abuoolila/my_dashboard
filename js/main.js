let items = document.querySelectorAll(".item");

items.forEach(item => {
    // إضافة مستمع للنقر على العنصر
    item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }else {
            items.forEach(i => i.classList.remove("active"));
            item.classList.toggle("active");
        }
    });
});
