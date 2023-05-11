'use strict';

import { HeaderView } from '../view/HeaderView.view.js';
import { TweetFeedView } from '../view/TweetFeedView.view.js';
import { TweetView } from '../view/TweetView.js';
import { autorisation, registration, errorPage, mainPage, tweetPage } from '../view/static.view.js';

export class TweetsController {
    constructor(tweetCollection, tweet, userCollection, headerView, tweetFeedView, tweetView) {
        this.tweetCollection = tweetCollection;
        this.tweet = tweet;
        this.userCollection = userCollection;
        this.headerView = headerView;
        this.tweetFeedView = tweetFeedView;
        this.tweetView = tweetView;
        this.arrayCBFunctions = [];
    }

    autorization() {
        const listenerAutorization = event => {
            if (event.target === document.querySelector('.sign-up-effect')) {
                const user = document.querySelector('.userName').value;
                const password = document.querySelector('.password').value;

                if (this.userCollection.userAuthorization(user, password)) {
                    document.querySelector('.userName').value = '';
                    document.querySelector('.password').value = '';
                    document.getElementById('mainWrapper').removeEventListener('click', this.arrayCBFunctions[0]);
                    this.arrayCBFunctions.shift();
                    this.tweetCollection.changeUser(user);

                    root.innerHTML = '';
                    root.insertAdjacentHTML('afterbegin', mainPage);
                    this.headerView = new HeaderView('helloUser');
                    this.setCurrentUser(this.tweetCollection.user);
                    this.mainPage();
                }
            }

            if (event.target === document.getElementById('autorisationSign')) {
                document.getElementById('mainWrapper').removeEventListener('click', this.arrayCBFunctions[0]);
                this.arrayCBFunctions.shift();
                root.innerHTML = '';
                root.insertAdjacentHTML('afterbegin', registration);
                this.registration();
            }
        };

        root.innerHTML = '';
        root.insertAdjacentHTML('afterbegin', autorisation);
        this.arrayCBFunctions.push(listenerAutorization);
        document.getElementById('mainWrapper').addEventListener('click', listenerAutorization);
    }

    registration() {
        const listenerRegistration = event => {
            if (event.target === document.querySelector('.registration-sign-up-effect')) {
                const user = document.querySelector('.registration-user-name').value;
                const password = document.querySelector('.registration-password').value;
                const confirmPassword = document.querySelector('.registration-password.confirm').value;

                if (this.userCollection.userRegistration(user, password, confirmPassword)) {
                    document.querySelector('.registration-user-name').value = '';
                    document.querySelector('.registration-password').value = '';
                    document.querySelector('.registration-password.confirm').value = '';
                    return;
                }

                if (password !== confirmPassword) {
                    document.querySelector('.registration-password').value = '';
                    document.querySelector('.registration-password.confirm').value = '';
                }
            }

            if (event.target === document.getElementById('registrationSign')) {
                document.getElementById('registrationMainWrapper').removeEventListener('click', this.arrayCBFunctions[0]);
                this.arrayCBFunctions.shift();
                root.innerHTML = '';
                root.insertAdjacentHTML('afterbegin', autorisation);
                this.autorization();
            }
        };

        root.innerHTML = '';
        root.insertAdjacentHTML('afterbegin', registration);
        this.arrayCBFunctions.push(listenerRegistration);
        document.getElementById('registrationMainWrapper').addEventListener('click', listenerRegistration);
    }

    mainPage() {
        document.addEventListener('submit', event => event.preventDefault());

        const listenerMainPageInput = event => {
            if (event.target === document.getElementById('mainNewTwit')) {
                document.getElementById('mainNewTwitСounter').innerText = `${document.getElementById('mainNewTwit').value.length}/280`;
            }
        };

        const listenerMainPageClick = event => {
            if (event.target === Array.from(document.querySelectorAll('.main-current-twit-info-delete')).find(item => item === event.target)) {
                this._mainPageDelete(event);
            }

            if (event.target === document.getElementById('postTweet')) {
                const text = document.getElementById('mainNewTwit').value;

                if (this.addTweet(text)) {
                    document.getElementById('mainNewTwit').value = '';
                    document.getElementById('mainNewTwitСounter').innerText = `0/280`;
                    this._showTweetsIcons();
                    return;
                }
            }

            if (event.target === Array.from(document.querySelectorAll('.main-current-twit-info-edit')).find(item => item === event.target)) {
                this._mainPageEdit(event);
            }

            if (event.target === document.getElementById('filtrationFormHashtags')) {
                this._mainPageFiltration(event);
            }

            if (event.target === document.getElementById('mainLogOut')) {
                document.getElementById('mainContainer').removeEventListener('click', this.arrayCBFunctions[0]);
                document.getElementById('mainContainer').removeEventListener('input', this.arrayCBFunctions[1]);
                this.arrayCBFunctions.shift();
                this.arrayCBFunctions.shift();
                this.tweetCollection.changeUser('');
                this.autorization();
            }

            if (event.target === Array.from(document.querySelectorAll('.main-current-twit-info-messege')).find(item => item === event.target)) {
                this._mainPageMessege(event);
            }
        };

        root.innerHTML = '';
        root.insertAdjacentHTML('afterbegin', mainPage);

        this.headerView = new HeaderView('helloUser'); // Потом убрать
        this.setCurrentUser(this.tweetCollection.user); // Потом убрать

        this.tweetFeedView = new TweetFeedView('tweetsMainAllTweets');

        this.tweetFeedView.display(this.tweetCollection.tweets);

        this._showTweetsIcons();

        this.arrayCBFunctions.push(listenerMainPageClick);
        document.getElementById('mainContainer').addEventListener('click', listenerMainPageClick);

        this.arrayCBFunctions.push(listenerMainPageInput);
        document.getElementById('mainContainer').addEventListener('input', listenerMainPageInput);
    }

    commentPage(id = '8') {
        const listenerClickComment = event => {
            if (event.target === document.getElementById('postComment')) {
                const commentText = document.getElementById('commentsAnswerTwit').value;
                this.tweetCollection.addComment(id, commentText);
                this.showTweet(id);

                document.getElementById('commentsAnswerTwit').value = '';
                document.getElementById('commentsAnswerСounter').innerText = `${document.getElementById('commentsAnswerTwit').value.length}/280`;
            }

            if (event.target === document.getElementById('navigationMain')) {
                document.querySelector('.container-twit').removeEventListener('click', this.arrayCBFunctions[0]);
                document.getElementById('commentsAnswerTwit').removeEventListener('input', this.arrayCBFunctions[1]);
                this.arrayCBFunctions.shift();
                this.arrayCBFunctions.shift();
                this.mainPage();
            }

            if (event.target === document.getElementById('twitLogOut')) {
                document.querySelector('.container-twit').removeEventListener('click', this.arrayCBFunctions[0]);
                document.getElementById('commentsAnswerTwit').removeEventListener('input', this.arrayCBFunctions[1]);
                this.arrayCBFunctions.shift();
                this.arrayCBFunctions.shift();
                this.tweetCollection.changeUser('');
                this.autorization();
            }

            if (event.target === document.querySelector('.twit-current-twit-info-delete')) {
                if (this.tweetCollection.remove(id)) {
                    document.querySelector('.container-twit').removeEventListener('click', this.arrayCBFunctions[0]);
                    document.getElementById('commentsAnswerTwit').removeEventListener('input', this.arrayCBFunctions[1]);
                    this.arrayCBFunctions.shift();
                    this.arrayCBFunctions.shift();
                    this.mainPage();
                }
            }

            if (event.target === document.querySelector('.twit-current-twit-info-edit')) {
                this._commentPageEdit(event);
            }
        };
        const listenerInputComment = event => {
            document.getElementById('commentsAnswerСounter').innerText = `${document.getElementById('commentsAnswerTwit').value.length}/280`;
        };

        root.innerHTML = '';
        root.insertAdjacentHTML('afterbegin', tweetPage);

        this.tweetView = new TweetView('twitMain');
        this.showTweet(id);

        const tweetAuthor = this.tweetCollection.get(id).author;
        if (this.tweetCollection.user !== tweetAuthor) {
            document.querySelector('.twit-current-twit-info-edit').style.opacity = '0';
            document.querySelector('.twit-current-twit-info-delete').style.opacity = '0';
        } else {
            document.querySelector('.twit-current-twit-info-edit').style.opacity = '1';
            document.querySelector('.twit-current-twit-info-delete').style.opacity = '1';
        }

        this.headerView = new HeaderView('helloUser');
        this.setCurrentUser(this.tweetCollection.user);

        this.arrayCBFunctions.push(listenerClickComment, listenerInputComment);
        document.querySelector('.container-twit').addEventListener('click', listenerClickComment);
        document.getElementById('commentsAnswerTwit').addEventListener('input', listenerInputComment);
    }

    setCurrentUser(user = '') {
        this.tweetCollection.changeUser(user);
        this.headerView.display(user);
    }

    addTweet(text = '') {
        if (this.tweetCollection.add(text)) {
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
        this.tweetFeedView.display(this.tweetCollection.getPage(skip, top, filterConfig));
    }

    showTweet(id = '') {
        if (this.tweetCollection.get(id) !== undefined) {
            this.tweetView.display(this.tweetCollection.get(id));
            return true;
        }
        return false;
    }

    _showTweetsIcons() {
        const arrayIconDeleteTweets = Array.from(document.querySelectorAll('.main-current-twit-info-delete'));
        const arrayIconEditTweets = Array.from(document.querySelectorAll('.main-current-twit-info-edit'));

        arrayIconDeleteTweets.forEach(item => {
            const tweetAuthor = item.parentElement.parentElement.children[0].children[0].innerText;
            if (this.tweetCollection.user !== tweetAuthor) item.style.opacity = '0';
        });

        arrayIconEditTweets.forEach(item => {
            const tweetAuthor = item.parentElement.parentElement.children[0].children[0].innerText;
            if (this.tweetCollection.user !== tweetAuthor) item.style.opacity = '0';
        });
    }

    _mainPageDelete(event) {
        const tweetId = event.target.parentElement.parentElement.id;
        this.removeTweet(tweetId);
        this._showTweetsIcons();
        return;
    }

    _mainPageEdit(event) {
        const text = event.target.parentElement.previousElementSibling.innerText;
        const idTweet = event.target.parentElement.parentElement.id;

        if (this.tweetCollection.edit(idTweet, text)) {
            const editListenerClick = event => {
                const tweetText = editArea.value;
                this.editTweet(idTweet, tweetText);
                this._showTweetsIcons();
                editArea.removeEventListener('input', editListenerInput);
                editButton.removeEventListener('input', editListenerClick);
            };

            const editListenerInput = event => {
                editCounter.innerText = `${editArea.value.length}/280`;
            };

            const valueTweet = event.target.parentElement.previousElementSibling;
            const autorHeader = event.target.parentElement.previousElementSibling.previousElementSibling;

            const divContainer = document.createElement('div');
            divContainer.classList.add('main-current-twit-edit');

            const editArea = document.createElement('textarea');
            editArea.classList.add('main-current-twit-edit-area');
            editArea.setAttribute('rows', '5');

            const editController = document.createElement('div');
            editController.classList.add('main-current-twit-edit-controller');

            const editCounter = document.createElement('div');
            editCounter.setAttribute('id', 'twitEditCounter');

            const editButton = document.createElement('button');
            editButton.setAttribute('id', 'mainTweetEdit');
            editButton.innerText = 'Edit';

            editController.append(editCounter, editButton);
            divContainer.append(editArea, editController);

            editArea.value = valueTweet.innerText;
            editCounter.innerText = `${editArea.value.length}/280`;

            autorHeader.after(divContainer);
            valueTweet.classList.add('norefresh');

            this._showTweetsIcons();

            editArea.addEventListener('input', editListenerInput);
            editButton.addEventListener('click', editListenerClick);
        }
    }

    _mainPageMessege(event) {
        document.getElementById('mainContainer').removeEventListener('click', this.arrayCBFunctions[0]);
        document.getElementById('mainContainer').removeEventListener('input', this.arrayCBFunctions[1]);
        this.arrayCBFunctions.shift();
        this.arrayCBFunctions.shift();

        root.innerHTML = '';
        root.insertAdjacentHTML('afterbegin', tweetPage);

        const tweetId = event.target.parentElement.parentElement.id;

        this.commentPage(tweetId);
    }

    _mainPageFiltration(event) {
        const userAuthor = document.getElementById('filtrationUserAutor').value;
        const userDateFrom = document.getElementById('filtrationDateFrom').value;
        const userDateTo = document.getElementById('filtrationDateTo').value;
        const userTextTweet = document.querySelector('.filtration-form-text-twit-area').value;
        const userFilterTweets = document.querySelector('.filtration-form-hashtags-text').value;

        this.getFeed(0, this.tweetCollection.tweets.length, { author: userAuthor, dateFrom: userDateFrom, dateTo: userDateTo, text: userTextTweet, hashtags: [userFilterTweets] });

        this._showTweetsIcons();
    }

    _commentPageEdit(event) {
        const text = event.target.parentElement.previousElementSibling.innerText;
        const idTweet = event.target.parentElement.parentElement.id;
        if (!this.tweetCollection.edit(idTweet, text)) {
            return;
        }

        const editListenerClick = event => {
            const tweetText = editArea.value;
            if (this.tweetCollection.edit(idTweet, tweetText)) {
                this.showTweet(idTweet);
                editArea.removeEventListener('input', editListenerInput);
                editButton.removeEventListener('input', editListenerClick);
            }
        };

        const editListenerInput = event => {
            editCounter.innerText = `${editArea.value.length}/280`;
        };

        const valueTweet = event.target.parentElement.previousElementSibling;
        const autorHeader = event.target.parentElement.previousElementSibling.previousElementSibling;

        const divContainer = document.createElement('div');
        divContainer.classList.add('twit-current-twit-edit');

        const editArea = document.createElement('textarea');
        editArea.classList.add('twit-current-twit-edit-area');
        editArea.setAttribute('rows', '5');

        const editController = document.createElement('div');
        editController.classList.add('twit-current-twit-edit-controller');

        const editCounter = document.createElement('div');
        editCounter.setAttribute('id', 'twitEditCounter');

        const editButton = document.createElement('button');
        editButton.setAttribute('id', 'twitTweetEdit');
        editButton.innerText = 'Edit';

        editController.append(editCounter, editButton);
        divContainer.append(editArea, editController);

        editArea.value = valueTweet.innerText;
        editCounter.innerText = `${editArea.value.length}/280`;

        autorHeader.after(divContainer);
        valueTweet.classList.add('norefresh');

        editArea.addEventListener('input', editListenerInput);
        editButton.addEventListener('click', editListenerClick);
    }
}
