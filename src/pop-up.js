function startProgress(ms) {
    const progressCircle = document.querySelector(".progress-circle");
    const progressBar = progressCircle.querySelector(".progress-bar");
    let circumference = progressBar.getTotalLength();
    progressBar.style.strokeDasharray = circumference + " " + circumference;

    let progress = 0;
    let interval = setInterval(function () {
        if (progress >= 100) {
            clearInterval(interval);
        } else {
            progress++;
            var dashOffset = circumference - progress / 100 * circumference;
            progressBar.style.strokeDashoffset = dashOffset;
        }
    }, ms / 105);
}

popup = (text, ms, color) => {
    // 判断popup元素是否存在
    let popupElements = document.getElementsByClassName('popup');
    if (popupElements.length === 0 && (text || text === '')) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <div class="progress-circle">
                <svg viewBox="0 0 100 100">
                    <circle class="progress-bar" cx="50" cy="50" r="40" fill="none" />
                </svg>
            </div>
        ` + text;
        document.body.append(popup);

        let popupWidth = popup.offsetWidth;
        popup.style.left = 'calc(50% - ' + popupWidth / 2 + 'px)';

        // 判断是否有时间参数，如果没有设置为3000ms
        if (!ms || ms === '') {
            ms = 3000;
        }

        // 判断是否有颜色参数
        if (color) {
            let popupBackground = document.querySelector('.popup');
            popupBackground.style.backgroundColor = color;
        }

        setTimeout(() => {
            popup.style.bottom = '50px';
            startProgress(ms)
        }, 50);

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