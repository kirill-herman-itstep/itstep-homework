'use strict';
import { Tweet } from '../model/Tweet.model.js';
import { Comment } from '../model/Comment.model.js';
import { _tweets, _tweets2 } from '../mock/tweets.mock.js';
import { TweetCollection } from '../model/TweetCollection.model.js';
import { HeaderView } from '../view/HeaderView.view.js';
import { TweetFeedView } from '../view/TweetFeedView.view.js';
import { FilterView } from '../view/FilterView.view.js';
import { TweetView } from '../view/TweetView.js';
import { autorisation, registration, errorPage, mainPage, tweetPage } from '../view/static.view.js';
import { UserCollection, User } from '../model/UserCollection.model.js';

export class TweetsController {
    constructor(tweetCollection, tweet, userCollection, headerView, tweetFeedView, tweetView) {
        this.tweetCollection = tweetCollection;
        this.tweet = tweet;
        this.userCollection = userCollection;
        this.headerView = headerView;
        this.tweetFeedView = tweetFeedView;
        this.tweetView = tweetView;
    }

    setCurrentUser(user = '') {
        this.tweetCollection.changeUser(user);
        if (this.headerView.element.id === 'helloUser') {
            this.headerView.display(user);
            return true;
        }
        return false;
    }

    addTweet(text = '') {
        if (this.tweetCollection.add(text) && this.headerView.element.id === 'helloUser') {
            this.tweetFeedView.display(this.tweetCollection.tweets);
            return true;
        }
        return false;
    }

    editTweet(id = '', text = '') {
        if (this.tweetCollection.edit(id, text)) {
            this.tweetFeedView.display(this.tweetCollection.tweets);
            return true;
        }
        return false;
    }

    removeTweet(id = '') {
        if (this.tweetCollection.remove(id)) {
            this.tweetFeedView.display(this.tweetCollection.tweets);
            return true;
        }
        return false;
    }

    getFeed(skip = 0, top = 10, filterConfig = { author: '', dateFrom: '', dateTo: '', text: '', hashtags: [''] }) {
        this.tweetFeedView.element.innerHTML = '';
        this.tweetFeedView.display(this.tweetCollection.getPage(skip, top, filterConfig));
    }

    showTweet(id = '') {
        if (this.tweetCollection.get(id) !== undefined) {
            this.tweetView.display(this.tweetCollection.get(id));
            return true;
        }
        return false;
    }
}
