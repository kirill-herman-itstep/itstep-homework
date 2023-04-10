'use strict';

class Group {
    constructor(students = [], nameGroup = '') {
        this.nameGroup = nameGroup;
        this.allStudents = students;
        this.lessons = [];
    }

    showStudents() {
        Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type)>label')).forEach((item, index) => (item.innerText = this.allStudents[index].name));
    }

    addInfoLesson() {
        const number = Array.from(document.querySelector('#checkLesson')).find(item => item.selected).innerText;
        const topic = document.querySelector('#lessonTopic').value;
        const presentStudents = this.allStudents.slice().map(item => Object.assign({}, item));

        Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type)>input')).forEach((item, index) => {
            if (item.checked) presentStudents[index].isPresent = true;
        });
        const saveInfo = new Lesson(number, topic, presentStudents);
        saveInfo.saveStatus = true;

        this.lessons.push(saveInfo);
        return saveInfo;
    }
}

class Student {
    constructor(name = '') {
        this.name = name;
        this.isPresent = false;
    }
}

class Lesson {
    constructor(number, topic, presentStudents) {
        this.number = number;
        this.topic = topic;
        this.presentStudents = presentStudents;
        this.saveStatus = false;
    }
}

const groupOne = new Group([new Student('Andrey'), new Student('Maria'), new Student('Ilya')], 'Group 8');
const groupTwo = new Group([new Student('Sergey'), new Student('Dima'), new Student('Anastasia')], 'Group 10');
groupOne.showStudents();
const groups = [groupOne, groupTwo];

const selectGroupOne = document.querySelector('#checkgGroup>:first-of-type');
const selectGroupTwo = document.querySelector('#checkgGroup>:last-of-type');

selectGroupOne.innerText = groupOne.nameGroup;
selectGroupTwo.innerText = groupTwo.nameGroup;

document.querySelector('.save').addEventListener('click', event => {
    const userGroupName = Array.from(document.querySelector('#checkgGroup')).find(item => item.selected).innerText;
    const userGroup = groups.find(item => item.nameGroup === userGroupName);
    const userLessonNumber = Array.from(document.querySelector('#checkLesson')).find(item => item.selected).innerText;

    if (!userGroup.lessons.find(item => item.number === userLessonNumber)) {
        userGroup.addInfoLesson();
    }

    Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type) input')).forEach(item => (item.checked = false));
    document.querySelector('#lessonTopic').value = '';
});

document.querySelector('.select').addEventListener('click', event => {
    const userGroupName = Array.from(document.querySelector('#checkgGroup')).find(item => item.selected).innerText;
    const userGroup = groups.find(item => item.nameGroup === userGroupName);
    userGroup.showStudents();
    const userLessonNumber = Array.from(document.querySelector('#checkLesson')).find(item => item.selected).innerText;
    const userLesson = userGroup.lessons.find(item => item.number === userLessonNumber);

    if (userLesson !== undefined) {
        if (userLesson.number === userLessonNumber) document.querySelector('.save').classList.add('noreflect');

        Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type) input')).forEach(item => item.classList.add('noreflect'));
        const arrayDiv = Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type) div'));
        arrayDiv.forEach(item => {
            item.classList.remove('noreflect');
            item.innerText = '';
        });

        userLesson.presentStudents.forEach((item, index) => {
            if (item.isPresent) {
                arrayDiv[index].innerText = 'present';
            }
        });

        const topicLesson = document.querySelector('#lessonTopic');
        topicLesson.value = userLesson.topic;
        topicLesson.disabled = true;
        topicLesson.style.border = 'none';
    } else {
        document.querySelector('.save').classList.remove('noreflect');
        Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type) input')).forEach(item => item.classList.remove('noreflect'));
        Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type) div')).forEach(item => item.classList.add('noreflect'));

        document.querySelector('#lessonTopic').disabled = false;
        document.querySelector('#lessonTopic').style.border = '1px solid black';
        document.querySelector('#lessonTopic').value = '';
        Array.from(document.querySelectorAll('.info-student>li:not(:first-of-type) input')).forEach(item => (item.checked = false));
    }
});
