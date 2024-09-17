const sideBar_item = document.querySelectorAll('.sideBar-item');
sideBar_item.forEach((item) => {
    item.addEventListener('click', () => {
        sideBar_item.forEach((i) => {
            i.classList.remove('sideBar-active');
        })
        console.log(item.firstChild);

        item.classList.add('sideBar-active');
    })
})