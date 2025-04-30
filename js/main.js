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

// select mode
let light = document.querySelector('.left-side #light');
let dark = document.querySelector('.left-side #dark');
let light_sec = document.querySelector('.small-menu #light');
let dark_sec = document.querySelector('.small-menu #dark');

let htmlElement = document.documentElement;


window.onload = function () {
    let theme = localStorage.getItem('theme');
    if(theme == null || theme == '' || theme == undefined){
        changemode('light');
        light.classList.add('true');
        light_sec.classList.add('true');
        dark.classList.remove('true');
        dark_sec.classList.remove('true');
    } else {
        if(theme == 'light'){
            light.classList.add('true');
            light_sec.classList.add('true');
            dark.classList.remove('true');
            dark_sec.classList.remove('true');
            changemode('light');
        }else{
            dark.classList.add('true');
            dark_sec.classList.add('true');
            light.classList.remove('true');
            light_sec.classList.remove('true');
            changemode('dark');
        }
        htmlElement.setAttribute('data-bs-theme', theme);
    }
};
function changemode(mode) {
    localStorage.setItem('theme', mode);
    htmlElement.setAttribute('data-bs-theme', mode);
}
light.addEventListener('click', function () {
    changemode('light');
    console.log('light');
    light.classList.add('true');
    light_sec.classList.add('true');
    dark.classList.remove('true');
    dark_sec.classList.remove('true');
});
dark.addEventListener('click', function () {
    changemode('dark');
    console.log('dark');
    dark.classList.add('true');
    dark_sec.classList.add('true');
    light.classList.remove('true');
    light_sec.classList.remove('true');
});
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

light_sec.addEventListener('click', function () {
    changemode('light');
    console.log('light');
    light.classList.add('true');
    light_sec.classList.add('true');
    dark.classList.remove('true');
    dark_sec.classList.remove('true');
});
dark_sec.addEventListener('click', function () {
    changemode('dark');
    console.log('dark');
    dark.classList.add('true');
    dark_sec.classList.add('true');
    light.classList.remove('true');
    light_sec.classList.remove('true');
});
const settings_menu_sec = document.querySelector(".settings-menu_sec");
document.addEventListener("DOMContentLoaded", () => {
    const settings_sec = document.querySelector("#settings_sec");
    settings_sec.addEventListener("click", () => {
        settings_menu_sec.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
        if (e.target !== settings_menu_sec && e.target !== settings_sec && !settings_sec.contains(e.target)) {
            settings_menu_sec.classList.remove("open");
        }
        console.log(e.target);
    });
    settings_menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

setInterval(() => {
    let theme = localStorage.getItem('theme');
    if (theme === 'light') {
        light_sec.classList.add('true');
        light.classList.add('true');
        dark_sec.classList.remove('true');
        dark.classList.remove('true');
        changemode('light');
    }else {
        dark_sec.classList.add('true');
        dark.classList.add('true');
        light_sec.classList.remove('true');
        light.classList.remove('true');
        changemode('dark');
    }
}, 2000);





const menu = document.querySelector(".big-menu");
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

const small_menu = document.querySelector(".small-menu");
document.addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector("#btn-menu");
    btn_menu.addEventListener("click", () => {
        small_menu.classList.toggle("open");
    });
});

let dropdown = document.querySelector('.dropdown');
let dropdownBtn = document.querySelector('.profile');

dropdownBtn.addEventListener('click', function () {
    dropdown.classList.toggle('show-dropdown');
});

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