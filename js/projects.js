const btn_items = document.querySelector('#actions');
const item_actions = document.querySelector('.item-actions');

btn_items.addEventListener('click', function() {
    item_actions.classList.toggle('show');
});
document.addEventListener("click", (e) => {
    if (e.target !== btn_items && e.target !== item_actions && !btn_items.contains(e.target)) {
        item_actions.classList.toggle('show');
    }
});