window.addEventListener('keydown', event => {
    if (event.key === 'e' && event.ctrlKey) {
        event.preventDefault()
        document.getElementById('editWindowInput').value = document.getElementById('editWindowDiv').innerText
        document.getElementById('editWindowDiv').classList.toggle('no-reflect')
        document.getElementById('editWindowInput').classList.toggle('no-reflect')
    }

    if (event.key === 's' && event.ctrlKey) {
        event.preventDefault()
        document.getElementById('editWindowDiv').innerText = document.getElementById('editWindowInput').value 
        document.getElementById('editWindowDiv').classList.toggle('no-reflect')
        document.getElementById('editWindowInput').classList.toggle('no-reflect')
    }
})
