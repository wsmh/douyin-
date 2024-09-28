import { icons } from "../data/sideBarActiveIcons.js";
const sideBar_item = document.querySelectorAll('.sideBar-item');
const olym = document.querySelector('.sideBar-item-o');
sideBar_item.forEach((item) => {
    item.addEventListener('click', () => {
        sideBar_item.forEach((i) => {
            i.classList.remove('sideBar-active');
            i.firstElementChild.style.backgroundPositionX = icons[i.dataset.iconName] + 'px';
        })

        //清除所有refresh图标

        document.querySelectorAll('.refresh-icon').forEach((v) => {
            v.remove();
        })

        //添加refresh图标
        const refreshIcon = document.createElement('div');
        refreshIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" class="RVV0407m"
                                viewBox="0 0 24 24">
                                <path
                                    d="M17.745 8a7 7 0 1 0 .746 6.625 1 1 0 1 1 1.854.75A9.003 9.003 0 0 1 3 12a9 9 0 0 1 16-5.657V5a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.745z"
                                    fill="#fff" fill-opacity="1"></path>
                            </svg>`
        refreshIcon.classList.add('refresh-icon');
        item.appendChild(refreshIcon);

        item.firstElementChild.style.backgroundPositionX = icons[item.dataset.iconName + '-a'] + 'px';       //应为firstElementChild而非firstChild
        olym.classList.remove('sideBar-active');
        item.classList.add('sideBar-active');


    })
})
document.querySelector('.sideBar-item-o').addEventListener('click', function () {
    this.classList.add('sideBar-active');

    sideBar_item.forEach((i) => {
        i.classList.remove('sideBar-active');
        i.firstElementChild.style.backgroundPositionX = icons[i.dataset.iconName] + 'px';
    })

})