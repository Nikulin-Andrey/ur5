const container = document.getElementById('container');

container.addEventListener('click', function (e) {
    if (e.target.getAttribute('type') === 'button') {
        loadJSON(e.target.previousElementSibling.previousElementSibling.value, e.target.previousElementSibling.value);
    }
})

function loadJSON(description, location) {
    container.lastElementChild.innerHTML = '<h3>Loading...</h3>';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jobs.github.com/positions.json?description=${description}&location=${location}`, true);
    xhr.onload = function () {
        const jobs = JSON.parse(this.responseText);
        onDataLoaded(jobs);
    }
    xhr.send(null);
}

function onDataLoaded(jobs) {
    if (jobs.length === 0) {
        container.lastElementChild.innerHTML = '<h3>Ничего не найдено</h3>';
    } else {
        container.lastElementChild.innerHTML = '';
        jobs.forEach((job) => {
            let img = "";
            const d = job.created_at.split(' ');
            if (job.company_logo != null) {
                img = job.company_logo;
            }
            container.lastElementChild.insertAdjacentHTML('beforeend', `
            <div class="job">
                <h2>${job.title}</h2>
                <div class="job_content">
                    <div class="job_left">
                        <p><span>Название компании:</span> ${job.company}</p>
                        <p><span>Город:</span> ${job.location}</p>
                        <p><span>Тип занятости:</span> ${job.type}</p>
                    </div>
                    <div class="job_right">
                        <div> 
                             <img src="${img}">
                        </div>
                    </div>
                </div>
                <button data-attribute="${job.id}" class="comp_text">Текст вакансии >></button>
                <div></div>
                <div class="job_bottom">
                    <a href="${job.url}">Ссылка на вакансию на GitHub</a>
                    <p>${d[2]} ${d[1]} ${d[5]}</p>
                </div>
            </div>
            `);
        });
        container.lastElementChild.addEventListener('click', function (e) {
            if (e.target.hasAttribute('data-attribute')) {
                e.target.nextElementSibling.innerHTML = `
                <button class="exit">Скрыть</button>
                <div>${jobs.find((job) => job.id === e.target.getAttribute('data-attribute')).description}</div>
                `;
                e.target.nextElementSibling.firstElementChild.addEventListener('click', (e) => e.target.parentElement.innerHTML = "");
            }
        });
    }
}
