'use strict';

import { Tweet } from './scripts/model/Tweet.model.js';
import { _tweets, _tweets2 } from './scripts/mock/tweets.mock.js';
import { TweetCollection } from './scripts/model/TweetCollection.model.js';
import { HeaderView } from './scripts/view/HeaderView.view.js';
import { TweetFeedView } from './scripts/view/TweetFeedView.view.js';
import { FilterView } from './scripts/view/FilterView.view.js';
import { TweetView } from './scripts/view/TweetView.js';
import { autorisation, registration, errorPage, mainPage, tweetPage } from './scripts/view/static.view.js';
import { UserCollection, User } from './scripts/model/UserCollection.model.js';
import { TweetsController } from './scripts/controller/controller.js';
import { userCollectionTest } from './scripts/mock/userCollection.mock.js';

const newTweetCollection = new TweetCollection('Илон Маск', _tweets);
// console.log(newTweetCollection);
const filterTweets = {
    author: '',
    dateFrom: '',
    dateTo: '',
    text: '',
    hashtags: ['всемДобра'],
};
const userNewTwit = new Tweet('Мы заблокируем Эмбер Херт в Twitter', '2020-02-15', 'Илон Маск');

newTweetCollection.addComment('8', 'Я вот сильно сомневаюсь в этом утверждении!');

const root = document.getElementById('root');
let user = 'Илон Маск';

root.insertAdjacentHTML('afterbegin', mainPage);
const showUserNameMain = new HeaderView('helloUser');
const showTweets = new TweetView('twitMain');

const tweetsFeed = new TweetFeedView('tweetsMainAllTweets');

// ( new TweetCollection(),  new Tweet(),  new UserCollection(), new HeaderView(),  new TweetFeedView(),  new TweetView())

const tweetsController = new TweetsController(newTweetCollection, '', userCollectionTest, showUserNameMain, tweetsFeed, showTweets);
// console.log(tweetsController);

// console.log(tweetsController.setCurrentUser(newTweetCollection.user));
// console.log(tweetsController.addTweet('Добрый дэнь!'));
// console.log(tweetsController.editTweet('29', 'Добрый дэнь всем! #всемДобра #МысВами'));
// console.log(tweetsController.removeTweet('29'));
// console.log(tweetsController.getFeed(0, 10, filterTweets));

// console.log(tweetsController.showTweet('8'));
