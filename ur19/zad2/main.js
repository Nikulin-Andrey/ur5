const btn = document.getElementById('read');
const result_container = document.getElementById('results');
btn.addEventListener('click', function () {
    const input = document.getElementById('file');
    const file = input.files[0];
    if (!file) {
        input.classList.add('not_slected');
        input.parentElement.firstElementChild.innerHTML =  `
        <h2>Файл не выбран!</h2>
        `;
        return;
    }
    input.parentElement.firstElementChild.innerHTML = "";
    input.classList.remove('not_slected');
    const reader = new FileReader();
    reader.onload = function () {
        const str = reader.result;
        const items = str.split('');
        const simvols = [];
        const results = [];
        items.forEach(function (item) {
            if(!simvols.find(simvol => simvol === item)){
                simvols.push(item);
            }
        });
        simvols.forEach(function(simvol) {
            let number = 0;
            items.forEach(function(item){
                if(simvol === item){
                   number++;
                }
            })
            results.push({
                name: simvol,
                numberOf: number
            });
        });
        results.sort((a, b) => b.numberOf - a.numberOf);
        result_container.innerHTML = "";
        results.forEach(result => {
            result_container.insertAdjacentHTML('beforeend', `
            <tr>
                <td>Символ "${result.name}"</td>
                <td>${result.numberOf} раз</td>
            </tr>
            `);
        })
    }
    reader.readAsText(file);
});