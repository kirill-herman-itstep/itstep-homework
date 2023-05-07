'use strict';

import { TweetsController } from '../scripts/controller/controller.js';
import { TweetCollection } from './scripts/model/TweetCollection.model.js';
import { TweetFeedView } from './scripts/view/TweetFeedView.view.js';
import { HeaderView } from './scripts/view/HeaderView.view.js';
import { TweetView } from './scripts/view/TweetView.js';
import { _tweets } from './scripts/mock/tweets.mock.js';
import { userCollectionTest } from './scripts/mock/userCollection.mock.js';

const root = document.getElementById('root');

const newTweetCollection = new TweetCollection('Илон Маск', _tweets);
const showUserNameMain = new HeaderView('helloUser');
const tweetsFeed = new TweetFeedView('tweetsMainAllTweets');
const showTweet = new TweetView('twitMain');
const tweetsController = new TweetsController(newTweetCollection, '', userCollectionTest, showUserNameMain, tweetsFeed, showTweet);

tweetsController.autorization();
