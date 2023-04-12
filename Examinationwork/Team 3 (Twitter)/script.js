'use strict';

import { Tweet } from './scripts/model/Tweet.model.js';
import { _tweets, _tweets2 } from './scripts/mock/tweets.mock.js';
import { TweetCollection } from './scripts/model/TweetCollection.model.js';
import { HeaderView } from './scripts/view/HeaderView.view.js';
import { autorisation, registration, errorPage, mainPage, tweetPage } from './scripts/view/static.view.js';

// console.log(_tweets);

// const newTweetCollection = new TweetCollection('Илон Маск', _tweets);
// console.log(newTweetCollection);
// const filterTweets = {
//     author: 'Илон Маск',
//     dateFrom: '',
//     dateTo: '2023-03-16',
//     text: 'план',
// };
// const userNewTwit = new Tweet('Мы заблокируем Эмбер Херт в Twitter', '2020-02-15', 'Илон Маск');
// console.log(Tweet.validate(userNewTwit));
// console.log(newTweetCollection.getPage(0, 10, filterTweets));
// console.log(newTweetCollection.get('8'));
// console.log(newTweetCollection.add('Мы заблокируем Эмбер Херт в Twitter'));
// console.log(newTweetCollection);
// console.log(newTweetCollection.edit('19', 'Мы создадим свой Chat GPT за 1,5 года'));
// console.log(newTweetCollection.edit('39', 'Мы создадим свой Chat GPT за 1,5 года'));
// console.log(newTweetCollection.edit('18', 'Мы создадим свой Chat GPT за 1,5 года'));
// console.log(newTweetCollection.remove('6'));
// console.log(newTweetCollection.remove('19'));
// console.log(newTweetCollection.addComment('18', 'Я вот сильно сомневаюсь в этом утверждении!'));
const root = document.getElementById('root');

root.insertAdjacentHTML('afterbegin', autorisation);
