'use strict';

import { Tweet } from '../model/Tweet.model.js';
import { Comment } from '../model/Comment.model.js';

export function showFormatTweets() {
    const tweets = JSON.parse(localStorage.getItem('tweets')).map(item => new Tweet(item.text, item._createdAt, item._author, item._id, item.comments));

    tweets.forEach(item => (item.comments = item.comments.map(item => new Comment(item.text, item._author, item._id, item._createdAt))));

    return tweets;
}
