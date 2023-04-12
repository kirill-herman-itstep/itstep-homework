
const imgs = ['img/1.jpeg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];
const containerImg = document.querySelector('img.container-img');

const right = document.querySelector('.right');
const left = document.querySelector('.left');


left.addEventListener('click', e => {
    if (containerImg.getAttribute('src') !== imgs.at(0)) {
        right.style.visibility = '';
        const index = imgs.indexOf(containerImg.getAttribute('src'));
        containerImg.setAttribute('src', imgs[index - 1]);
    } 
    if (containerImg.getAttribute('src') === imgs.at(0)) {
        left.style.visibility = 'hidden';
    } 
});

right.addEventListener('click', e => {
    if (containerImg.getAttribute('src') !== imgs.at(-1)) {
        left.style.visibility = '';
        const index = imgs.indexOf(containerImg.getAttribute('src'));
        containerImg.setAttribute('src', imgs[index + 1]);
    }
    if (containerImg.getAttribute('src') === imgs.at(-1)) {
        right.style.visibility = 'hidden';
    }
});