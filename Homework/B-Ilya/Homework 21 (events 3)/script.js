const trackBar = document.querySelector('.track-bar')
const barPoint = document.querySelector('.bar-point')

barPoint.addEventListener('mousedown', startDrag)

function startDrag() {
    trackBar.addEventListener('mousemove', onDrag)
    trackBar.addEventListener('mouseup', endDrag)
}

function onDrag(event) {
    if (barPoint.offsetLeft < 0) {
        barPoint.style.left = 0 + 'px';
    } else if (barPoint.offsetLeft > trackBar.clientWidth - barPoint.offsetWidth) {
        barPoint.style.left = trackBar.clientWidth - barPoint.offsetWidth + 'px';
    } else barPoint.style.left = (event.clientX - trackBar.offsetLeft - barPoint.offsetWidth / 2) + 'px';
}

function endDrag() {
    trackBar.removeEventListener('mousemove', onDrag)
    trackBar.removeEventListener('mouseup', endDrag)
}