let currentSection = null;

document.querySelector('dl').addEventListener('click', e => {
    if (e.target.tagName === 'DT') {
        const dd = e.target.nextElementSibling
        if (dd.style.display) {
            currentSection = null
            dd.style.display = '';
        } else {
            if (currentSection) {
                currentSection.nextElementSibling.style.display = '';     
            } 
            currentSection = e.target;
            dd.style.display = 'block';
        }
    }
});