'use strict'

import { Tweet } from './model/Tweet.model.js';
import { _tweets, _tweets2 } from './mock/tweets.mock.js';
import { TweetCollection } from './model/TweetCollection.model.js';

console.log(_tweets);

const newTweetCollection = new TweetCollection('Илон Маск', _tweets);
console.log(newTweetCollection);
const filterTweets = {author: 'Илон Маск', dateFrom: '', dateTo:'2023-03-16', text: 'план'}
const userNewTwit = new Tweet('Мы заблокируем Эмбер Херт в Twitter', '2020-02-15', 'Илон Маск')
console.log(Tweet.validate(userNewTwit));
console.log(newTweetCollection.getPage(0, 10, filterTweets));
console.log(newTweetCollection.get('8'));
console.log(newTweetCollection.add('Мы заблокируем Эмбер Херт в Twitter'));
console.log(newTweetCollection);
console.log(newTweetCollection.edit('19', 'Мы создадим свой Chat GPT за 1,5 года'));
console.log(newTweetCollection.edit('39', 'Мы создадим свой Chat GPT за 1,5 года'));
console.log(newTweetCollection.edit('18', 'Мы создадим свой Chat GPT за 1,5 года'));
console.log(newTweetCollection.remove('6'));
console.log(newTweetCollection.remove('19'));
console.log(newTweetCollection.addComment('18', 'Я вот сильно сомневаюсь в этом утверждении!'));
// console.log(currentUser2.clear());