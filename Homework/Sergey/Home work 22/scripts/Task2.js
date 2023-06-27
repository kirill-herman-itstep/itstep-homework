'use strict';

function getNextQuestion(event) {
    let userAnswer = [];
    document.querySelectorAll('.container-question.reflect input').forEach(item => {
        if (item.checked) userAnswer = item.value;
    });
    answers.push(userAnswer);
    quastions[counter].classList.toggle('reflect');
    quastions[counter].classList.toggle('noreflect');

    if (counter < quastions.length - 1) {
        quastions[counter + 1].classList.toggle('reflect');
        quastions[counter + 1].classList.toggle('noreflect');
    }

    if (counter === quastions.length - 1) {
        const result = document.createElement('div');
        const divText = `Результат: ${showResult(answers)[0]} верных ответов и ${showResult(answers)[1]} неверных из ${quastions.length} вопросов`;
        result.innerText = divText;
        document.querySelector('.container').prepend(result);
    }
    counter++;
}

function showResult(array) {
    let trueAnswers = 0,
        falseAnswers = 0;
    array.forEach(item => {
        if (item === 'true') {
            trueAnswers++;
        } else {
            falseAnswers++;
        }
    });
    return [trueAnswers, falseAnswers];
}

const answers = [];
const quastions = document.querySelectorAll('.container-question');
const buttons = document.querySelectorAll('.next-question, .last-question');
let counter = 0;

buttons.forEach(item => item.addEventListener('click', getNextQuestion));
