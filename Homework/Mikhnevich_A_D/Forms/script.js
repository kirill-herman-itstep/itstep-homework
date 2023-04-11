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
        this.i = this.arr.length - 1;
    }

    show() {
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

    convertDate(date) {
        let toString = (e) => e.toString().length === 1 ? '0' + e : e;
        return(toString(date.getHours()) + ':' + toString(date.getMinutes()) + ':' + toString(date.getSeconds()) + ' ' + toString(date.getDate()) + '.' + toString(date.getMonth() + 1) + '.' + date.getFullYear())
    }
}

new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Да?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Алё!`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Да да?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Ну как там с деньгами?`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `А?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Как с деньгами-то там?`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Чё с деньгами?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Чё?`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Куда ты звонишь?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Тебе звоню.`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Кому?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Ну тебе.`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Кому тебе?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `А вот тебе вот.`)
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Ты кто такой?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Михал Палыч.`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Какой Михал Палыч?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Терентьев.`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Такого не знаю, ты ошибся номером, друг.`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Кто?`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Ты.`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Чё с деньгами?`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Какими деньгами?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Ну которые я внес в капитал.`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Куда?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `В капитал прожиточного минимума.`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Ты пьяный или кто, сынок?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Я тре... Я Михал Палыч Терентьев.`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Кто такой?`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Пьяный.`)
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Вот именно, ну и все, завяжи лямку, ёбана в рот.`);
new Message(`Михал Палыч Терентьев`, new Date(1991, 05, 13, 10, 5), `Куда... Чё завязать?`);
new Message(`Андрей Гаврилов`, new Date(1991, 05, 13, 10, 5), `Ублюдок, мать твою, а ну, иди сюда, говно собачье, а? Сдуру решил ко мне лезть, ты? Засранец вонючий, мать твою, а? Ну, иди сюда, попробуй меня трахнуть — я тебя сам трахну, ублюдок, онанист чёртов, будь ты проклят! Иди, идиот, трахать тебя и всю твою семью! Говно собачье, жлоб вонючий, дерьмо, сука, падла! Иди сюда, мерзавец, негодяй, гад! Иди сюда, ты, говно, жопа!`)
messageList.show();

document.querySelector('.task1 .messageList').addEventListener('wheel', e => {
    if (document.querySelector('.task1 .messageList').scrollTop === 0) messageList.showMore();
})

document.querySelector('.task1 button').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.task1 input').value
    document.querySelector('.task1 textarea').value
    date = new Date();
})



// Task 2

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
            document.querySelector('.task4 .booklist').append();
        })
    }
}

class Book {
    constructor(writer, name, price, url) {
        
    }
}