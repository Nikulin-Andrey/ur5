const d = new Date();
let h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds();
console.log(`${h}:${m}:${s}`);
const div = document.getElementById('container');
setInterval(() => {
    div.innerHTML = `<h1>${h}:${m}:${s}</h1>`;
}, 500 );
setInterval(() => {
    s++;
    if(s === 60){
        m++;
        s = 0;
        if(m === 60){
            h++;
            m = 0;
            if(h === 24){
                h = 0;
            }
        }
    }
    div.innerHTML = `<h1>${h} ${m} ${s}</h1>`;
}, 1000 );