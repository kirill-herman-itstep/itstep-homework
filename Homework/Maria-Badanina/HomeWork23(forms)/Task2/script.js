class Quiz {
    count = 0;
    answers = [];

    constructor(questions = []) {
        this.questions = questions;
        
        this.drawQuestion();

        document.querySelector('input[type="button"]').addEventListener('click', e => {
            this.next();
        });
    }

    next() {
        this.answers.push(document.querySelector('input:checked')?.value);
        
        this.count++;

        if (this.count === this.questions.length) {
            this.finish();
        } else {
            this.drawQuestion();
        }
    }

    drawQuestion() {
        let question = this.questions[this.count];

        document.querySelector('.number-question').innerText = `${this.count + 1})`;
        document.querySelector('span.question').innerText = question.questionText;

        document.querySelectorAll('input').forEach((elem) => elem.checked = false)
        document.querySelector('label[for="first"]').innerText = question.firstAnswer;
        document.querySelector('label[for="second"]').innerText = question.secondAnswer;
        
        let button = document.querySelector('input[type="button"]');

        if (this.count < this.questions.length - 1) {
            button.value = 'Next';
        } else {
            button.value = 'Finish';
        }


    }

    finish() {
        let countRightAnswer = this.answers.reduce((acc, answer, index) => {
            if (answer === this.questions[index].rightAnswer) {
                return ++acc;
            } else {
                return acc;
            }
        }, 0);

        document.querySelector('main').innerHTML = `Result: ${countRightAnswer} correct answers to ${this.questions.length} questions.`;
    }
}

class Question {
    constructor(questionText, firstAnswer, secondAnswer, rightAnswer) {
        this.questionText = questionText;
        this.firstAnswer = firstAnswer;
        this.secondAnswer = secondAnswer;
        this.rightAnswer = rightAnswer + '';
    }
}

new Quiz([
    new Question('	Which is Biggest country in the world?', 'Russia', 'The USA', '1'),
    new Question('What is the second largest country in Europe after Russia?', 'Switzerland', 'France', '2'),
    new Question('On which continent can you visit Sierra Leone?', 'Africa', 'South America', '1'),
    ]
);