class Group {
    constructor(students, countLesson) {
        this.students = students.sort();
        this.lessons = [];
        for (let i = 0; i < +countLesson; i++) {
            this.lessons.push(new Lesson(this.students));
        }
    }
}

class Lesson {
    theme = '';
    isSave = false;
    constructor(students) {
        this.visitingStudents = {};
        for (let student of students) {
            this.visitingStudents[student] = false;
        }
    }
}

let groups = [
    new Group([
        'Васильев Артем Максимович', 
        'Масальский Сергей Александрович',
        'Панкратов Олег Игоревич',
        'Баданина Мария Андреевна',
        'Безмен Илья Олегович'], 7),
    new Group([
        'Михневич Андрей Дмитриевич', 
        'Иванова Валентина Валерьевна',
        'Ламеко Василий Геннадьевич',
        'Ковалев Алексей Владимирович'], 10),
    new Group([
        'Черепанова Анастасия Александровна', 
        'Крупенков Павел Игоревич',
        'Хижняк Тимофей Тимофеевич'], 4),
];

const form = document.forms[0];

for (let i = 0; i < groups.length; i++) {
    const option = document.createElement('option');
    option.value = `Group ${i + 1}`;
    option.innerHTML = `Group ${i + 1}`;
    form.group.append(option);
}

let selectedGroup = groups[form.group.selectedIndex];

function creatLessonGroup(selectedGroup) {
    form.lesson.innerHTML = '';
    for (let i = 0; i < selectedGroup.lessons.length; i++) {
        const option = document.createElement('option');
        option.value = `${i + 1}`;
        option.innerHTML = `${i + 1}`;
        form.lesson.append(option);
    }
}

creatLessonGroup(selectedGroup);

form.group.addEventListener('change', e => {
    selectedGroup = groups[form.group.selectedIndex];
    creatLessonGroup(selectedGroup);
});

const conteaner = document.querySelector('body > div.conteaner');

form.addEventListener('submit', e => {
    e.preventDefault();

    viewLessonInformation();
});

function viewLessonInformation() {
    conteaner.innerHTML = '';

    const lesson = selectedGroup.lessons[form.lesson.selectedIndex];
    if (lesson.isSave) {
        const lessonInfo = document.querySelector('template.saved').content.cloneNode(true);
        conteaner.append(lessonInfo);

        conteaner.querySelector('.topic-name').innerHTML = lesson.topic;
        viewStudents(lesson.isSave, lesson);

    } else {
        const lessonForm = document.querySelector('template.not-saved').content.cloneNode(true);
        conteaner.append(lessonForm);

        viewStudents(lesson.isSave);

        document.forms[1].addEventListener('submit', e => e.preventDefault());
        document.forms[1].save.addEventListener('click', save);
    }
}

function viewStudents(isSave, lesson) {
    for (let student of selectedGroup.students) {
        const name = document.createElement('div');
        name.innerHTML = student;
        conteaner.querySelector('.students').append(name);

        const studentVisit = document.createElement('div');

        if (isSave) {
            if (lesson.visitingStudents[student]) {
                studentVisit.innerHTML = 'present';
            }

        } else {
            const isPresent = document.createElement('input');
            isPresent.type = 'checkbox';
            isPresent.name = 'student';
            studentVisit.append(isPresent);
        }

        conteaner.querySelector('.students').append(studentVisit);
    }
}

function save(e) {
    e.preventDefault();
    
    const lesson = selectedGroup.lessons[form.lesson.selectedIndex];
    const formLesson = document.forms[1];

    if (!formLesson.topic.value) {
        formLesson.topic.style.borderColor = 'red';
        formLesson.topic.addEventListener('input', () => {
            formLesson.topic.style.borderColor = '';
        });
        return;
    }

    lesson.isSave = true;
    lesson.topic = formLesson.topic.value;

    const isPresent = formLesson.student;

    for (let i = 0; i < isPresent.length; i++) {
        lesson.visitingStudents[selectedGroup.students[i]] = isPresent[i].checked;
    }

    viewLessonInformation();
}

