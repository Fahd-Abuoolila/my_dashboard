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

// let dropdown = document.querySelector('.dropdown');
// let dropdownBtn = document.querySelector('.profile');

// dropdownBtn.addEventListener('click', function () {
//     dropdown.classList.toggle('show-dropdown');
// });
// menu
// let menu = document.querySelector('#menu');
// let btn_close_menu = document.querySelector('#btn-close-menu');

// btn_close_menu.addEventListener('click', function () {
//     menu.classList.toggle('menu-opened');
// });
// function checkScreenWidth() {
//     if (window.innerWidth <= 1000) {
//         menu.classList.remove('menu-opened');
//     }else {
//         menu.classList.add('menu-opened');
//     }
// }
// window.addEventListener('resize', checkScreenWidth);
// checkScreenWidth();

// select mode
let light = document.querySelector('#light');
let dark = document.querySelector('#dark');
let htmlElement = document.documentElement;


window.onload = function () {
    let theme = localStorage.setItem('theme','light');
    if (theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
    }
    if(theme == 'light'){
        light.classList.add('true');
        dark.classList.remove('true');
    }else{
        dark.classList.add('true');
        light.classList.remove('true');
    }
};
light.addEventListener('click', function () {
    changemode('light');
    console.log('light');
    light.classList.add('true');
    dark.classList.remove('true');
});
dark.addEventListener('click', function () {
    changemode('dark');
    console.log('dark');
    dark.classList.add('true');
    light.classList.remove('true');
});

function changemode(mode) {
    localStorage.setItem('theme', mode);
    htmlElement.setAttribute('data-bs-theme', mode);
}

const settings_menu = document.querySelector(".settings-menu");
document.addEventListener("DOMContentLoaded", () => {
    const settings = document.querySelector("#settings");
    settings.addEventListener("click", () => {
        settings_menu.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
        if (e.target !== settings_menu && e.target !== settings && !settings.contains(e.target)) {
            settings_menu.classList.remove("open");
        }
        console.log(e.target);
    });
    settings_menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

const menu = document.querySelector("#menu");
document.addEventListener("DOMContentLoaded", () => {
    const menu_btn = document.querySelector("#menu_btn");
    menu_btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        let arrow_menu = menu_btn.querySelector(".bi-arrow-left-circle");
        let p_menu = menu_btn.querySelector("#p_menu");
        if(!menu.classList.contains("open")) {
            arrow_menu.style.rotate = "180deg";
            p_menu.innerHTML = "open";
        }else{
            arrow_menu.style.rotate = "0deg";
            p_menu.innerHTML = "close";
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
