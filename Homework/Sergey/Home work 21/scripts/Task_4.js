'use strict';

const ul = document.querySelector('.container');

const tittle = 'Lorem ipsum dolor sit amet.';
const news =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt dolores praesentium voluptatibus ipsam maiores laboriosam deleniti illum quod fuga. Sed repellendus delectus ut repellat beatae laudantium recusandae, dolorum reprehenderit, ullam neque voluptate omnis. Vel aspernatur ad tenetur officia iure?';
const arrayTitle = [tittle, tittle, tittle, tittle, tittle, tittle];
const arrayNews = [news, news, news, news, news, news];
let counter = 0;

document.addEventListener('scroll', event => {
    const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    const scrollHeight = Math.floor(window.pageYOffset + document.documentElement.clientHeight);
    if (scrollHeight === documentHeight && counter < arrayNews.length) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        h3.innerText = arrayTitle[counter];
        div.innerText = arrayNews[counter];
        li.prepend(h3);
        li.append(div);
        li.style.color = 'gray';
        document.querySelector('.container').append(li);
        counter++;
    }
});
