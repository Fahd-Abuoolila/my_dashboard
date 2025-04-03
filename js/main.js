$(document).ready(function () {
    $('.item-header').click(function () {
        // إظهار أو إخفاء القائمة الفرعية عند النقر
        const otherList = $(this).siblings('.other-list');
        otherList.slideToggle(400, function () {
            // التحقق إذا كانت القائمة الفرعية مخفية
            if (!otherList.is(':visible')) {
                $(this).parent().removeClass('active');
            }
        });

        // إغلاق القوائم الفرعية الأخرى
        $(this).parent().siblings().find('.other-list').slideUp(400, function () {
            $(this).parent().removeClass('active'); // إزالة الـ class "active" عند الإخفاء
        });

        // إضافة class "active" إلى العنصر الحالي
        $(this).parent().addClass('active');
    });
    $('.item-header-sec').click(function () {
        // إظهار أو إخفاء القائمة الفرعية عند النقر
        const otherList = $(this).siblings('.other-list');
        otherList.slideToggle(400, function () {
            // التحقق إذا كانت القائمة الفرعية مخفية
            if (!otherList.is(':visible')) {
                $(this).parent().removeClass('active');
            }
        });

        // إغلاق القوائم الفرعية الأخرى
        $(this).parent().siblings().find('.other-list').slideUp(400, function () {
            $(this).parent().removeClass('active'); // إزالة الـ class "active" عند الإخفاء
        });

        // إضافة class "active" إلى العنصر الحالي
        $(this).parent().addClass('active');
    });
});

let dropdown = document.querySelector('.dropdown');
let dropdownBtn = document.querySelector('.profile');

dropdownBtn.addEventListener('click', function () {
    dropdown.classList.toggle('show-dropdown');
});
// menu
let menu = document.querySelector('#menu');
let btn_close_menu = document.querySelector('#btn-close-menu');

btn_close_menu.addEventListener('click', function () {
    menu.classList.toggle('menu-opened');
});
function checkScreenWidth() {
    if (window.innerWidth <= 1000) {
        menu.classList.remove('menu-opened');
    }else {
        menu.classList.add('menu-opened');
    }
}
window.addEventListener('resize', checkScreenWidth);
checkScreenWidth();