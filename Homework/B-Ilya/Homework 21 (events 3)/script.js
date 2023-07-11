//   Task 1
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

//   Task 2

const imgContainer = document.querySelector('.image-container');
const nextImgButton = document.querySelector('.next');
const previousImgButton = document.querySelector('.previous');
const imgArray = [
    'url(images/pic1.jpg)',
    'url(images/pic2.jpg)',
    'url(images/pic3.jpg)',
    'url(images/pic4.jpg)',
    'url(images/pic5.jpg)',
    'url(images/pic6.jpg)',
    'url(images/pic7.jpg)',
    'url(images/pic8.jpg)',
    'url(images/pic9.jpg)',
    'url(images/pic10.jpg)'
]

let currentImage = 5;
imgContainer.style.backgroundImage = imgArray[currentImage];

nextImgButton.addEventListener('click', () => {
    currentImage++
    imgContainer.style.backgroundImage = imgArray[currentImage];
    if (currentImage === imgArray.length - 1) {
        nextImgButton.setAttribute('disabled', '')
    } else previousImgButton.removeAttribute('disabled')
})

previousImgButton.addEventListener('click', () => {
    currentImage--
    imgContainer.style.backgroundImage = imgArray[currentImage];
    if (currentImage === 0) {
        previousImgButton.setAttribute('disabled', '')
    } else nextImgButton.removeAttribute('disabled')
})

// Task 3
const textTitles = document.querySelectorAll('.lorem-wrap .part h3');

textTitles.forEach(element => {
    element.addEventListener('click', (event) => {
        textTitles.forEach((elem) => elem.nextElementSibling.style.display = 'none')
        event.target.nextElementSibling.style.display = 'block';
    })
});

// Task 4
const scrollParts = document.querySelectorAll('article');
const loadMoreButton = document.querySelector('.load-more')
let i = 1;

loadMoreButton.addEventListener('click', () => {
    scrollParts[i].style.display = 'block';
    i++;
})

// Task 5 

function calender(month, year) {
    let rightMonth = month - 1;
    let firstDay = new Date(year, rightMonth)
    let tbody = '';

    for (let i = 0; i < getDay(firstDay); i++) {
        tbody += '<td></td>';
    }

    while (firstDay.getMonth() === rightMonth) {
        tbody += '<td>' + firstDay.getDate() + '</td>';

        if (getDay(firstDay) % 7 === 6) { 
          tbody += '</tr><tr>';
        }

        firstDay.setDate(firstDay.getDate() + 1);
    }

    if (getDay(firstDay) != 0) {
        for (let i = getDay(firstDay); i < 7; i++) {
            tbody += '<td></td>';
        }
    }
    return tbody;
}

function getDay(date) {
    let weekDay = date.getDay();
    if (weekDay === 0) weekDay = 7;
    return weekDay - 1;
}

const output = document.querySelector('.calender')

function makeCalender(month, year) {
    output.innerHTML = 
    `<table>
        <thead>
            <td>пн</td>
            <td>вт</td>
            <td>ср</td>
            <td>чт</td>
            <td>пт</td>
            <td>сб</td>
            <td>вс</td>
        </thead>
        <tbody>
            ${calender(month, year)}
        </tbody>
    </table>`
}



const genButton = document.querySelector('.gen')

genButton.addEventListener('click', () => {
    const inputMonth = document.querySelector('.month').value
    const inputYear = document.querySelector('.year').value
    makeCalender(inputMonth, inputYear)
})