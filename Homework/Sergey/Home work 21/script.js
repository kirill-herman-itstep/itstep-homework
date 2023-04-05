const trackbar = document.querySelector('.trackbar');
const line = document.querySelector('.box-trackbar');

function move(event) {
    trackbar.style.left = event.pageX - trackbar.offsetWidth / 2 - line.offsetLeft + 'px';
}

function mousedownEvent(event) {
    if (event.target === trackbar) {
        move(event);
        if (trackbar.style.left.split('px').join('') < 0) trackbar.style.left = 0 + 'px';
        if (trackbar.style.left.split('px').join('') > line.clientWidth) trackbar.style.left = line.clientWidth + 'px';
        window.addEventListener('mousemove', mousemoveEvent);
    }
}

function mousemoveEvent(event) {
    move(event);
    if (trackbar.style.left.split('px').join('') < 0) trackbar.style.left = 0 + 'px';
    if (trackbar.style.left.split('px').join('') > line.clientWidth - trackbar.clientWidth) trackbar.style.left = line.clientWidth - trackbar.clientWidth + 'px';
}

function mouseupEvent(event) {
    window.removeEventListener('mousemove', mousemoveEvent);
    window.removeEventListener('mousedown', mouseupEvent);
}

window.addEventListener('mousedown', mousedownEvent);
window.addEventListener('mouseup', mouseupEvent);
