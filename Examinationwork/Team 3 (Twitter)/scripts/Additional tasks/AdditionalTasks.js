"use strict";

class TestTweet {
    constructor(text = "", userDate = new Date(), author = "", comment = []) {
        (this._id = `${++counter}`), (this.text = text), (this.createdAt = new Date(`${userDate}`)), (this.author = author), (this.comments = comment);
    }
}

class TestComment {
    constructor(text = "", userDate = new Date(), author = "") {
        (this._id = `${++counter}`), (this.text = text), (this.createdAt = new Date(`${userDate}`)), (this.author = author);
    }
}

class WorkWidthTweets {
    constructor(user) {
        this.user = user;
    }

    getTweets(skip = 0, top = 10, filterConfig = { author: "", dateFrom: "", dateTo: "", hashtags: [], text: "" }) {
        if (arguments.length === 2) return tweets.filter((item, index) => index >= skip && index < skip + top);
        if (arguments.length > 2) {
            let filterArray = tweets.slice();
            for (const key in filterConfig) {
                if (Object.hasOwnProperty.call(filterConfig, key)) {
                    if (filterConfig[key] && key === "author") filterArray = filterArray.filter(item => item.author.toUpperCase().includes(filterConfig[key].toUpperCase()));

                    if (filterConfig[key] && key === "dateFrom") {
                        const dateStart = new Date(`${filterConfig[key]}`);
                        filterArray = filterArray.filter(item => Date.parse(item.createdAt) >= Date.parse(dateStart));
                    }

                    if (filterConfig[key] && key === "dateTo") {
                        const dateEnd = new Date(`${filterConfig[key]}`);
                        filterArray = filterArray.filter(item => Date.parse(item.createdAt) <= Date.parse(dateEnd));
                    }

                    if (filterConfig[key] && key === "text") {
                        filterArray = filterArray.filter(item => item.text.includes(filterConfig[key]));
                    }
                }
            }
            return filterArray.filter((item, index) => index >= skip && index < skip + top);
        }
    }

    getTweet(id = "") {
        return tweets.find(item => item._id === id);
    }

    validateTweet(tweet = { _id: "", text: "", createdAt: "", author: "", comments: [] }) {
        let validate = true;
        for (const key in tweet) {
            if (Object.hasOwnProperty.call(tweet, key)) {
                if (tweet[key] && key === "text") {
                    if (tweet[key].length > 280) validate = false;
                    if (typeof tweet[key] !== "string") validate = false;
                }

                if (key === "author") {
                    if (!tweet[key]) validate = false;
                    if (typeof tweet[key] !== "string") validate = false;
                }
            }
        }
        return validate;
    }

    addTweet(text = "") {
        const newTweet = new TestTweet(text, new Date(), this.user, []);
        if (this.validateTweet(newTweet)) {
            tweets.push(newTweet);
            return true;
        } else {
            return false;
        }
    }

    editTweet(userId = "", userText = "") {
        const userEditTweet = this.getTweet(userId);
        if (userEditTweet.author === this.user) {
            if (this.validateTweet(userEditTweet)) {
                userEditTweet.text = userText;
                return true;
            }
        } else {
            return false;
        }
    }

    removeTweet(userId = "") {
        const userRemoveTweet = this.getTweet(userId);
        if (userRemoveTweet.author === this.user) {
            const index = tweets.findIndex(item => item === userRemoveTweet);
            delete tweets[index];
            return true;
        } else {
            return false;
        }
    }

    validateComment(com) {
        let validate = true;
        console.log(com);
        for (const key in com) {
            if (Object.hasOwnProperty.call(com, key)) {
                if (com[key] && key === "text") {
                    if (com[key].length > 280) validate = false;
                    if (typeof com[key] !== "string") validate = false;
                }
            }

            if (key === "author") {
                if (!com[key]) validate = false;
                if (typeof com[key] !== "string") validate = false;
            }
        }
        return validate;
    }

    addComment(userId = "", userText = "") {
        const userTweet = this.getTweet(userId);
        const newComment = new TestComment(userText, new Date(), this.user);
        if (userText.length <= 280) {
            userTweet.comments.push(newComment);
            return true;
        } else {
            return false;
        }
    }

    changeUser(usr = "") {
        this.user = usr;
    }
}

const tweets = [
    new TestTweet("Сегодня цена на газ снизилась до 2,3$ за МБТЕ", "2023-02-20", "Инвестинг", []),
    new TestTweet("В ближайшее время цена на газ еще уменьшится", "2023-02-22", "Миллер", []),
    new TestTweet("Цена на биткоин выпросла до 27 000$", "2023-02-24", "Инвестинг", []),
    new TestTweet("Эфир стоит дешевле 1700$", "2023-02-28", "Инвестинг", []),
    new TestTweet("Нефть сегодня дороже 85$", "2023-03-01", "Инвестинг", []),
    new TestTweet("С завтрашнего дня мы запускаем проект по колонизации к Сатурна", "2023-03-03", "Илон Маск", []),
    new TestTweet("Я планирую балотироваться на пост президента USA", "2023-03-05", "Илон Маск", []),
    new TestTweet("Эфир перейдет на технологию шардинга к лету", "2023-03-06", "Виталик Бутерин", []),
    new TestTweet("Мы в очередной раз думаем о изменении главы Twitter", "2023-03-06", "Илон Маск", []),
    new TestTweet("На этих выборах демократы точно проиграют", "2023-03-07", "Дональд Трамп", []),
    new TestTweet("Сегодня цена на газ поднялась до 2,4$ за МБТЕ", "2023-03-08", "Инвестинг", []),
    new TestTweet("Это временные колебания", "2023-03-12", "Миллер", []),
    new TestTweet("Цена на биткоин выпросла до 28 000$", "2023-03-12", "Инвестинг", []),
    new TestTweet("Эфир вырос в цене до 1800$", "2023-03-13", "Инвестинг", []),
    new TestTweet("Нефть сегодня дешевле 82$", "2023-03-14", "Инвестинг", []),
    new TestTweet("С завтрашнего дня мы запускаем проект по колонизации к Сатурна", "2023-03-15", "Илон Маск", []),
    new TestTweet("На заводе Тесла в Китае пройдет модернизация", "2023-03-16", "Илон Маск", []),
    new TestTweet("Все приготовления к переходу эфира на новую платформу идут по плану", "2023-03-17", "Виталик Бутерин", []),
    new TestTweet("Мы создадим свой Chat GPT", "2023-03-17", "Илон Маск", []),
    new TestTweet("ФРС в очередной раз подняло ставку на 0,25 пункта", "2023-03-18", "Дональд Трамп", []),
];

// const objTest = {author: 'Илон Маск', dateFrom: '2023-02-25', dateTo:'2023-03-27', text: 'пл'}
// let user = 'Илон Маск';
// const test = new WorkWidthTweets(user);

// console.log(test.getTweets(0, 10, objTest));
// console.log(test.getTweet('6'));
// console.log(test.validateTweet(new TestTweet('Сегодня цена на газ снизилась до 2,0$ за МБТЕ', '2023-03-21', 'Инвестинг', [])));
// console.log(test.addTweet('Мы заблокируем Эмбер Херт в Twitter'));
// console.log(test.editTweet('19', 'Мы создадим свой Chat GPT за 1,5 года'));
// console.log(test.removeTweet('18'));
// const newComment = new TestComment('Вот это я сильно сомневаюсь', '2023-03-27', 'Виталик Бутерин');
// console.log(test.validateComment(newComment));
// console.log(test.addComment('18', newComment.text));
// test.changeUser('Сергей Масальский')
// console.log(tweets);
