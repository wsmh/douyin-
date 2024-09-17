import { icons } from "../data/sideBarActiveIcons.js";
const sideBar_item = document.querySelectorAll('.sideBar-item');
sideBar_item.forEach((item) => {
    item.addEventListener('click', () => {
        sideBar_item.forEach((i) => {
            i.classList.remove('sideBar-active');
            i.firstElementChild.style.backgroundPositionX = icons[i.dataset.iconName] + 'px';
        })
        item.firstElementChild.style.backgroundPositionX = icons[item.dataset.iconName + '-a'] + 'px';       //应为firstElementChild而非firstChild
        item.classList.add('sideBar-active');
    })
})