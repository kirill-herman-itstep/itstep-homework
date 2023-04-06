// Task 1
 
document.querySelector('.thumb').style.left = document.querySelector('.track').offsetLeft - document.querySelector('.thumb').offsetWidth / 2 + 'px';
 
document.querySelector('.thumb').addEventListener('mousedown', event => {
    event.preventDefault();
    let elem = document.querySelector('.thumb');
    let maxLeft = document.querySelector('.track').offsetLeft - elem.offsetWidth / 2;
    let maxRight = document.querySelector('.track').offsetLeft + document.querySelector('.track').offsetWidth - elem.offsetWidth / 2;
    let position = parseInt(elem.style.left);
 
    function dragEvent(e) {
        position += e.movementX;
        if (position > maxLeft && position < maxRight) {
            elem.style.left = position + 'px';
        }
        else if (position < maxLeft) {
            elem.style.left = maxLeft + 'px';
        }
        else {
            elem.style.left = maxRight + 'px';
        }
    }
 
    document.addEventListener('mousemove', dragEvent)
    document.onmouseup = () => {
        document.removeEventListener('mousemove', dragEvent);
        document.onmouseup = null;
    }
})


 
// Task 2
 
arr = ['pics/1.png', 'pics/2.png', 'pics/3.png', 'pics/4.png', 'pics/5.png', 'pics/6.png', 'pics/7.png', 'pics/8.png', ];
 
document.querySelector('.left').addEventListener('click', e => {
    let url = document.querySelector('.slide').style.backgroundImage.match(/[pics].*[png]/)[0];
    if (arr.indexOf(url) !== 0) {
        if (arr.indexOf(url) === 1) {
            document.querySelector('.left').style.opacity = '0';
        }
        document.querySelector('.slide').style.backgroundImage = document.querySelector('.slide').style.backgroundImage.replace(url, arr[arr.indexOf(url) - 1])
    }
    if (document.querySelector('.right').style.opacity) {
        document.querySelector('.right').style.opacity = '';
    }
    })
 
    document.querySelector('.right').addEventListener('click', e => {
        let url = document.querySelector('.slide').style.backgroundImage.match(/[pics].*[png]/)[0];
        if (arr.indexOf(url) !== arr.length - 1) {
            if (arr.indexOf(url) === arr.length - 2) {
                document.querySelector('.right').style.opacity = '0';
            }
            document.querySelector('.slide').style.backgroundImage = document.querySelector('.slide').style.backgroundImage.replace(url, arr[arr.indexOf(url) + 1])
        }
        if (document.querySelector('.left').style.opacity) {
            document.querySelector('.left').style.opacity = '';
        }
    })


 
// Task 3
 
document.querySelectorAll('.task3 h4').forEach(e => {
    e.addEventListener('click', event => {
        if (document.querySelector('.show') && document.querySelector('.show') !== e.nextElementSibling) {
            document.querySelector('.show').classList.toggle('show');
        }
        e.nextElementSibling.classList.toggle('show');
    })
})


 
// Task 4