// function error(errorText) {
//     let scrollPosition = document.scrollingElement.scrollTop;
//     window.onscroll = () => {window.scroll(0, scrollPosition)}

//     document.querySelector('.modal').style.top = document.scrollingElement.scrollTop + 'px';
//     document.querySelector('.modal').style.display = 'flex';
//     document.querySelector('.modal p').textContent = errorText;
// }

// Task 1

class MessageList {
    constructor(...args) {
        this.arr = args;
        this.i = this.arr.length - 1;
    }

    add(...args) {
        this.arr.push(...args);
    }

    show() {
        this.i = this.arr.length - 1;
        while (this.i >= 0 && document.querySelector('.task1 .messageList').scrollHeight === document.querySelector('.task1 .messageList').offsetHeight) {
            this.arr[this.i].post();
            this.i--;
        }
        this.arr[this.i].post();
        this.i--;
        document.querySelector('.task1 .messageList').lastElementChild.scrollIntoView(true);
    }

    showMore() {
        if (this.i >= 0) {
            this.arr[this.i].post();
            this.i--;
        }
    }
}
let messageList = new MessageList();

class Message {
    constructor(name, date, text) {
        this.name = name;
        this.date = date;
        this.text = text;
        messageList.add(this);
    }

    post() {
        let clone = document.querySelector('.task1 template').content.firstElementChild.cloneNode(true);
        clone.firstElementChild.children[0].innerText = this.name;
        clone.firstElementChild.children[1].innerText = this.convertDate(this.date);
        clone.lastElementChild.innerText = this.text;
        document.querySelector(`.task1 .messageList`).prepend(clone);
    }

    _post() {
        let clone = document.querySelector('.task1 template').content.firstElementChild.cloneNode(true);
        clone.firstElementChild.children[0].innerText = this.name;
        clone.firstElementChild.children[1].innerText = this.convertDate(this.date);
        clone.lastElementChild.innerText = this.text;
        document.querySelector(`.task1 .messageList`).append(clone);
    }

    convertDate(date) {
        let toString = (e) => e.toString().length === 1 ? '0' + e : e;
        return(toString(date.getHours()) + ':' + toString(date.getMinutes()) + ':' + toString(date.getSeconds()) + ' ' + toString(date.getDate()) + '.' + toString(date.getMonth() + 1) + '.' + date.getFullYear())
    }
}

new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Да?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Алё!`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Да да?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Ну как там с деньгами?`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `А?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Как с деньгами-то там?`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Чё с деньгами?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Чё?`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Куда ты звонишь?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Тебе звоню.`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Кому?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Ну тебе.`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Кому тебе?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `А вот тебе вот.`)
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Ты кто такой?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Михал Палыч.`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Какой Михал Палыч?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Терентьев.`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Такого не знаю, ты ошибся номером, друг.`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Кто?`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Ты.`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Чё с деньгами?`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Какими деньгами?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Ну которые я внес в капитал.`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Куда?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `В капитал прожиточного минимума.`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Ты пьяный или кто, сынок?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Я тре... Я Михал Палыч Терентьев.`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Кто такой?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Пьяный.`)
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Вот именно, ну и все, завяжи лямку, ёбана в рот.`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 5, 13, 10, 5), `Куда... Чё завязать?`);
new Message(`Андрей Гаврилов`, new Date(1991, 5, 13, 10, 5), `Ублюдок, мать твою, а ну, иди сюда, говно собачье, а? Сдуру решил ко мне лезть, ты? Засранец вонючий, мать твою, а? Ну, иди сюда, попробуй меня трахнуть — я тебя сам трахну, ублюдок, онанист чёртов, будь ты проклят! Иди, идиот, трахать тебя и всю твою семью! Говно собачье, жлоб вонючий, дерьмо, сука, падла! Иди сюда, мерзавец, негодяй, гад! Иди сюда, ты, говно, жопа!`)
messageList.show();

document.querySelector('.task1 .messageList').addEventListener('wheel', e => {
    if (document.querySelector('.task1 .messageList').scrollTop === 0) messageList.showMore();
})

document.querySelector('.task1 button').addEventListener('click', e => {
    e.preventDefault();
    new Message(document.querySelector('.task1 input').value, new Date(), document.querySelector('.task1 textarea').value)._post();
    document.querySelector('.task1 .messageList').scrollTo(0, document.querySelector('.task1 .messageList').scrollHeight)
})



// Task 2 //////////////////////////////////////////////////////////////////////////////////////////

class Id {
    arr = [];
    constructor(name) {
        this.name = name;
    }

    get() {
        this.arr.push(this.arr.length);
        return this.name + (this.arr.length - 1);
    }
}
let id = new Id('customID')

class Quiz {
    i = 0;
    answers = [];
    constructor(...args) {
        this.arr = args;
    }

    add(e) {
        this.arr.push(e);
    }

    post() {
        let question = this.arr[this.i];
        let clone = document.querySelector('.task2 template.questionForm').content.firstElementChild.cloneNode(true);
        clone.firstElementChild.firstElementChild.innerText = `${this.i + 1})`;
        clone.firstElementChild.lastElementChild.innerText = question.text;
        question.answers.forEach((e, i) => {
            let copy = document.querySelector('.task2 template.answerForm').content.firstElementChild.cloneNode(true);
            copy.firstElementChild.id = id.get();
            copy.firstElementChild.value = i;
            copy.lastElementChild.innerText = e;
            copy.lastElementChild.htmlFor = copy.firstElementChild.id;
            clone.lastElementChild.lastElementChild.before(copy)
        });
        if (this.i === this.arr.length - 1) clone.querySelector('button').innerText = 'Finish';
        this.i++;
        document.querySelector('.task2').append(clone);
    }

    validate() {
        if (!document.querySelector('.task2 input:checked')) {
            return;
        }
        this.answers.push(document.querySelector('.task2 input:checked').value);
        document.querySelector('.question').remove();
        if (this.i === this.arr.length) return this.result();
        this.post();
    }

    result() {
        let result = 0;
        this.arr.forEach((e, i) => {
            if (e.correct === +this.answers[i]) result++
        })
        document.querySelector('.task2').insertAdjacentHTML(`beforeend`, `<p>Result: <strong>${result}</strong> correct answers to ${this.i} questions.</p>`)
    }
}
let quiz = new Quiz;

class Question {
    constructor(text, answers, correctAnswer) {
        this.text = text;
        this.answers = answers;
        this.correct = correctAnswer;
        quiz.add(this);
    }
}

new Question('How much is the fish?', ['Three hundred bucks', 'Scooter'], 1);
new Question('What is love?', ['Baby don\'t hurt me', 'An intense feeling of deep affection'], 0);
new Question('Never gonna', ['Give you up', 'Darude Sandstorm'], 0);

quiz.post();

document.querySelector('.task2').addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    e.preventDefault();
    quiz.validate();
})




// Task 3

document.querySelector('.task3 .styles').addEventListener('click', click => {
    if (click.target.tagName !== 'INPUT') {
        return;
    }
    if (click.target.checked) {
        document.querySelector('.task3 textarea').style[click.target.name] = click.target.nextElementSibling.innerText;
    }
    else {
        document.querySelector('.task3 textarea').style[click.target.name] = '';
    }
})

document.querySelector('.task3 button').addEventListener('click', e => {
    if (!document.querySelector('.task3 textarea').value) return;
    document.querySelector('.task3 button').nextElementSibling?.remove();
    let div = document.createElement('div');
    div.innerText = document.querySelector('.task3 textarea').value;
    Array.from(document.querySelector('.task3 textarea').style).forEach(e => {
        div.style[e] = document.querySelector('.task3 textarea').style[e];
    })
    document.querySelector('.task3').append(div);
})




// Task 4

class Booklist {
    constructor(...args) {
        this.arr = args;
    }

    show() {
        this.arr.forEach(e => {
            let clone = document.querySelector('.task4 template').content.firstElementChild.cloneNode(true);
            clone.querySelector('.img').style.backgroundImage = `url(${e.picture})`;
            clone.querySelector('strong').innerText = e.name;
            clone.querySelector('p').innerText = e.writer;
            clone.querySelector('.price').innerText = e.price;
            document.querySelector('.task4 .booklist').append(clone);
        })
        let maxHeight = Array.from(document.querySelector('.task4 .booklist').children).reduce((acc, e) => {return Math.max(acc, e.offsetHeight)}, 0);
        // document.querySelector('.task4 .booklist').children.forEach(e => {
        //     e.style.height = `${maxHeight}px`;
        // })
    }
}

class Book {
    constructor(writer, name, price, picture) {
        this.writer = writer;
        this.name = name;
        this.price = price;
        this.picture = picture;
        booklist.arr.push(this);
    }
}

const booklist = new Booklist();

new Book('Ethan Brown', 'Learning JavaScript: JS Essentails blah blah blah', '16$', 'img/1.jpg');
new Book('Kyle Simpson', 'You Don\'t Know JS: Scope and NoScope', '20$', 'img/2.jpg');
new Book('John Dickett', 'JS and JQuery: Biba and Boba', '22$', 'img/3.jpg');

booklist.show();

document.querySelector('.task4').addEventListener('click', click => {
    if (click.target.nodeName === 'BUTTON') {
        if (click.target.closest('.book')) {
            let book = booklist.arr.find(e => {
                return e.name === click.target.closest('.book').querySelector('strong').innerText;
            })
            let order = document.querySelector('.task4 form');
            document.querySelector('.task4 form ._book input').value = book.name;
        } else if (click.target.closest('.order')) {
            if (Array.from(click.target.closest('.order').querySelectorAll('input')).reduce((isFull, e) => {
                return isFull && e.value;
            }, true)) {
                if (click.target.closest('.order').querySelector('textarea').value) {
                    alert(`${document.querySelector('.task4 form .name input').value}, thanks for the order!
Book "${document.querySelector('.task4 form ._book input').value}" will be delivered on ${document.querySelector('.task4 form .date input').value} to ${document.querySelector('.task4 form textarea').value}.`)
                }
            }
        }

    }
})





// Task 5 ///////////////////////////////////////////////////////

let groups = [[], [], [], [], []];
let _groups = [[], [], [], [], []];
let group;
let lesson;
groups.forEach((e, j) => {
    for (i = 0; i < 5; i++) {
        e.push([null, null, null, null, null, null]);
        _groups[j].push(true);
    }
})

document.querySelector('.task5').addEventListener('click', click => {
    if (click.target.tagName !== 'BUTTON') {

    } else if (click.target.closest('.gs')) {
        click.preventDefault();
        group = +document.querySelector('.task5 select[name=group]').value;
        lesson = +document.querySelector('.task5 select[name=lesson]').value;
        document.querySelector('.task5 div.list')?.remove();
        let clone = document.querySelector('.task5 template.list').content.firstElementChild.cloneNode(true);
        document.querySelector('.task5 .gs').after(clone);
        document.querySelector('.task5 div.list .topic input').value = groups[group][lesson].at(-1) || '';
        if (_groups[group][lesson]) {
            document.querySelectorAll('.task5 div.list p input').forEach((e, i) => {
                if (groups[group][lesson][i]) e.checked = true;
            })
        } else {
            document.querySelectorAll('.task5 div.list p input').forEach((e, i) => {
                e.insertAdjacentHTML('afterend', `<span>${groups[group][lesson][i] ? 'present' : ''}</span>`)
                e.remove();
            });
            document.querySelector('.task5 div.list .topic input').disabled = 'true';
            document.querySelector('.task5 div.list .students button').remove();
        }
    } else if (click.target.closest('.list')) {
        click.preventDefault();
        if (_groups[group][lesson]) {
            groups[group][lesson].push(document.querySelector('.task5 div.list .topic input').value);
            document.querySelectorAll('.task5 div.list p input').forEach((e, i) => {
                groups[group][lesson][i] = e.checked;
            })
            _groups[group][lesson] = false;
        }
    }
})







// Task 6  //////////////////////////////////////////////////////

class User {
    constructor() {
        this.tickets = [];
    }
}
let user = new User;

class Tickets {
    constructor() {
        this.arr = [];
    }
}

let tickets = new Tickets;

class Ticket {
    constructor(way, date, seat) {
        this.way = way;
        this.date = date;
        this.seat = seat;
        tickets.arr.push(this);
    }
}

class TableID {
    constructor() {}
    _id = 0;
    get id () {
        this._id++;
        return `ID${this._id}`;
    }
}

let tableId = new TableID;
let _tableId = new TableID;

let price = {
    ab: 15,
    ac: 10,
    bc: 12,
    ba: 15,
    ca: 10,
    cb: 12,
}

let totalPrice = 0;
let route;

document.querySelector('.task6').addEventListener('click', click => {
    if (click.target.nodeName === 'BUTTON') {
        if (click.target.closest('.ds')) {
            click.preventDefault();
            let form = click.target.parentElement;
            if (!form[1].value) {
                alert('Enter a date')
                return;
            }
            route = [form[0].value, form[1].value];
            if (!document.querySelector('.task6 .tickets').firstElementChild) {
                for (let i = 0; i < 28; i++) {
                    document.querySelector('.task6 .tickets').insertAdjacentHTML('beforeend', `<span>
                    <input type="checkbox" id="${tableId.id}">
                    <label for="${_tableId.id}">${_tableId._id}</label></span>`)
                }
                document.querySelector('.task6 .tickets').insertAdjacentHTML('afterend', `<div class="price"><div><span>Total price: </span><span class="price"></span>$</div><button class="book">Book</button></div>`)
            }

            document.querySelectorAll('.task6 .tickets span').forEach(e => {
                e.firstElementChild.checked = false;
                e.firstElementChild.disabled = false;
            })
            totalPrice = 0;
            document.querySelector('.task6 div.price span.price').innerHTML = totalPrice + '';

            tickets.arr.filter(item => {
                if (item.way === route[0] && item.date === route[1]) {
                    return true;
                }
                return false;
            }).forEach(e => {
                document.querySelectorAll('.task6 .tickets input[type=checkbox]')[e.seat - 1].checked = true;
                document.querySelectorAll('.task6 .tickets input[type=checkbox]')[e.seat - 1].disabled = true;
            })

        } else if (click.target === document.querySelector('.task6 button.book')) {
            document.querySelectorAll('.task6 .tickets input[type=checkbox]').forEach((e, i) => {
                if (e.checked) {
                    if (!tickets.arr.filter(item => {
                        if (item.way === route[0] && item.date === route[1] && item.seat === i + 1) {
                            return true;
                        }
                        return false;
                    })[0]) {
                        new Ticket(route[0], route[1], i + 1)
                    }
                }
            })
            document.querySelectorAll('.task6 table tr').forEach((e, i) => {
                if (i) e.remove();
            })
            tickets.arr.forEach(e => {
                document.querySelector('.task6 table').insertAdjacentHTML('beforeend', `<tr>
                <td>${[].slice.call(document.querySelector('.task6 .ds select').children).filter(item => {
                    return item.value === e.way;
                })[0].label}</td>
                <td>${e.date}</td>
                <td>${e.seat}</td>
            </tr>`)
            });

            document.querySelectorAll('.task6 .tickets input').forEach(e => {
                if (e.checked) {
                    e.disabled = true;
                }
            })

            totalPrice = 0;
            document.querySelector('.task6 div.price span.price').innerHTML = totalPrice + '';
        }
    } else if (click.target.nodeName === 'INPUT' && click.target.type === 'checkbox') {
        if (click.target.checked) {
            totalPrice+=price[route[0]];
        } else {
            totalPrice-=price[route[0]];
        }
        document.querySelector('.task6 div.price span.price').innerHTML = totalPrice + '';
    }
})