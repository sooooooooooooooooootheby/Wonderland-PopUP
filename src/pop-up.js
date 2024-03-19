popup = (text, ms) => {
    // 判断popup元素是否存在
    let popupElements = document.getElementsByClassName('popup');
    if (popupElements.length === 0 && (text || text === '')) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = text;
        document.body.append(popup);

        let popupWidth = popup.offsetWidth;
        popup.style.left = 'calc(50% - ' + popupWidth / 2 + 'px)';

        setTimeout(() => {
            popup.style.bottom = '50px';
        }, 50);

        // 判断是否有时间参数，如果没有设置为3000ms
        if (!ms || ms === '') {
            ms = 3000;
        }

        setTimeout(() => {
            popup.style.bottom = '100px';
            popup.style.opacity = '0';
            popup.style.transform = 'scale(1.1)';
        }, ms + 50);

        setTimeout(() => {
            popup.remove();
        }, ms + 350);
    } else {
        return
    }
}