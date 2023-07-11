document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
})

document.querySelector('button').addEventListener('click', () => {
    let title = document.createElement('h3');
    title.innerHTML = 'Result:';

    let createdDiv = document.createElement('div');

    const elemsForm = document.querySelector('form').elements;

    fillingDiv(createdDiv, elemsForm);

    const main = document.querySelector('main');
    main.innerHTML = '';
    main.append(title, createdDiv);
});


function fillingDiv(createdDiv, elemsForm) {
    createdDiv.style.fontWeight = elemsForm[0].checked ? elemsForm[0].value : '';

    createdDiv.style.textDecoration = elemsForm[1].checked ? elemsForm[1].value : '';

    createdDiv.style.fontStyle = elemsForm[2].checked ? elemsForm[2].value : '';

    for(let i = 3; i < elemsForm.length - 1; i++) {

        if (elemsForm[i].type === 'radio' && elemsForm[i].checked) {
            createdDiv.style.textAlign = elemsForm[i].value;
            continue;
        }

        if (elemsForm[i].tagName === "TEXTAREA") {
            createdDiv.innerHTML = elemsForm[i].value;
        }
    }
}