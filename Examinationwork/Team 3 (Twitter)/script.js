'use strict';

import { TweetsController } from '../scripts/controller/controller.js';
import { TweetCollection } from './scripts/model/TweetCollection.model.js';
import { TweetFeedView } from './scripts/view/TweetFeedView.view.js';
import { HeaderView } from './scripts/view/HeaderView.view.js';
import { TweetView } from './scripts/view/TweetView.js';
import { userCollectionTest } from './scripts/mock/userCollection.mock.js';
import { showFormatTweets } from './scripts/helper/showFormatTweets.helper.js';
import { showFormatUsers } from './scripts/helper/showFormatUsers.helper.js';
import { tweets } from './scripts/mock/tweets.mock.js';

const root = document.getElementById('root');
const localTweets = showFormatTweets();
const localUsers = showFormatUsers();

const newTweetCollection = new TweetCollection('Илон Маск', localTweets);
const showUserNameMain = new HeaderView('helloUser');
const tweetsFeed = new TweetFeedView('tweetsMainAllTweets');
const showTweet = new TweetView('twitMain');
const tweetsController = new TweetsController(newTweetCollection, '', localUsers, showUserNameMain, tweetsFeed, showTweet);

tweetsController.autorization();
