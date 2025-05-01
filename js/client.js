let menu_btn = document.querySelector("#menu_btn");
let overblock = document.querySelectorAll("#overblock");

menu_btn.addEventListener("click", () => {
    overblock.forEach((item) => {
        item.classList.toggle("in-bigScreen");
    });
});

document.querySelectorAll('#row_project').forEach(row => {
    const btn_items = row.querySelector('#actions');
    const item_actions = btn_items.querySelector('.item-actions');
    const overblock = row.querySelectorAll('#overblock');
    const edit_project = item_actions.querySelector('.edit_project');
    const close_overblock = row.querySelector(".close-overblock");
    const bi_three_dots_vertical = row.querySelector(".bi-three-dots-vertical");

    edit_project.addEventListener("click", () => {
        overblock.forEach((item) => {
            item.classList.toggle("show-overblock");
        });
    });

    close_overblock.addEventListener("click", () => {
        overblock.forEach((item) => {
            item.classList.toggle("show-overblock");
        });
        item_actions.classList.remove('show');
    });

    // =--------------------

    btn_items.addEventListener('click', function () {
        item_actions.classList.toggle('show');
    });

    document.addEventListener("click", (e) => {
        if (e.target !== btn_items && e.target !== item_actions && !item_actions.contains(e.target) && e.target !== bi_three_dots_vertical) {
            item_actions.classList.remove('show');
        }
    });

    const showbtn = row.querySelector("#showbtn");
    const showblock = row.querySelectorAll('#showblock');
    showbtn.addEventListener("click", () => {
        showblock.forEach((item) => {
            item.classList.toggle("show-overblock");
        });
    });
    const close_showblock = row.querySelector(".close-showblock");
    close_showblock.addEventListener("click", () => {
        showblock.forEach((item) => {
            item.classList.toggle("show-overblock");
        });
    });
});