'use strict'

const theadTags = document.querySelectorAll('thead tr td');
const tbodyTags = document.querySelectorAll('tbody tr');

const theadTagsArray = [];
const tbodyTagsArray = [];

for (const value of theadTags) {
    theadTagsArray.push(value);
}

for (const value of tbodyTags) {
    tbodyTagsArray.push(value);
}

document.getElementById('personTable').addEventListener('click', event => {
    const clickIndex = theadTagsArray.findIndex((item, index) => item === event.target)
    tbodyTagsArray.sort((a, b) =>  {
        if (!Number.isNaN(+(b.children[clickIndex].innerText))) {
           return a.children[clickIndex].innerText - b.children[clickIndex].innerText
        } else {
           return a.children[clickIndex].innerText.localeCompare(b.children[clickIndex].innerText)
        }
    })
    for (const value of tbodyTagsArray) {
        document.querySelector('.container table tbody').append(value)
    }
})
