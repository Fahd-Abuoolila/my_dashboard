const btn_items = document.querySelector('#actions');
const item_actions = document.querySelector('.item-actions');

btn_items.addEventListener('click', function() {
    item_actions.classList.toggle('show');
});
document.addEventListener("click", (e) => {
    if (e.target !== btn_items && e.target !== item_actions && !btn_items.contains(e.target)) {
        item_actions.classList.remove('show');
    }
});

let big_menu = document.querySelector(".big-menu");
let menu_btn = document.querySelector("#menu_btn");
let overblock = document.querySelector(".overblock");
let edit_project = document.querySelector(".edit_project");
let close_overblock = document.querySelector(".close-overblock");

menu_btn.addEventListener("click", () => {
    overblock.classList.toggle("in-bigScreen"); 
});

edit_project.addEventListener("click", () => {
    overblock.classList.toggle("show-overblock"); 
});

close_overblock.addEventListener("click", () => {
    overblock.classList.toggle("show-overblock"); 
});