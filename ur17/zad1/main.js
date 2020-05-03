const btn = document.getElementById('buttons');
const text = document.getElementById('text');
const btns = document.querySelectorAll('button');


btn.addEventListener('click', (e) => {
    if(e.target.hasAttribute('data-file')){
        btns.forEach((but) => {but.classList.remove('selected')})
        const file = e.target.getAttribute('data-file');
        e.target.classList.add('selected');
        loadFile(`date/${file}`);

    }
})

function loadFile(fileName) {
    text.innerText = 'Loading...';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onload = function () {
        const str = this.responseText;
        onDataLoaded(str);
    }
    xhr.send(null);
}

function onDataLoaded(book){
    text.innerHTML = `<p>${book}</p>`;
}