const slider = document.querySelector('.slider');

slider?.addEventListener('mousedown', e => {
    document.documentElement.style.cursor = 'grabbing';
    let left = slider.offsetLeft;
    const maxLeft = slider.parentNode.offsetWidth - slider.offsetWidth;

    function moveAt(e) {
        left += e.movementX;
        if (left < 0) {
            slider.style.left = 0;
        } else if (left > maxLeft) {
            slider.style.left = maxLeft + 'px';
        } else {
            slider.style.left = left + 'px';
        }
        
    }

    document.addEventListener('mousemove', moveAt);

    document.onmouseup = function() {
        document.documentElement.style.cursor = '';
        document.removeEventListener('mousemove', moveAt);
        document.onmouseup = null;
    }
});

window.addEventListener('resize', e => {
    const maxLeft = slider.parentNode.offsetWidth - slider.offsetWidth;
    const left = parseFloat(slider.style.left);
    if (left && left > maxLeft) {
        slider.style.left = maxLeft + 'px';
    }
});