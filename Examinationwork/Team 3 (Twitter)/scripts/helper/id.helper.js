'use strict';

let counter;

if (Object.keys(localStorage).find(item => item === 'tweets') === undefined) counter = 0;
else {
    const localStorageTweets = JSON.parse(localStorage.getItem('tweets'));
    const maxIdTweets = localStorageTweets.sort((a, b) => b._id - a._id)[0]._id;
    let maxIdComments = localStorageTweets
        .map(item => (item = Math.max(...item.comments.map(element => element._id))))
        .filter(item => item !== -Infinity)
        .sort((a, b) => a - b)[0];
    if (!maxIdComments) maxIdComments = 0;
    counter = Math.max(maxIdTweets, maxIdComments);
}

export function _counter() {
    return ++counter;
}
