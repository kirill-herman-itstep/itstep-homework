const allInputs = document.querySelectorAll('input')

function wrongInput() {
    allInputs.forEach(elem => {
        elem.style.border = '1px solid red'
        setTimeout(() => {
            elem.style.border = '';
        }, 3000)
    })
}