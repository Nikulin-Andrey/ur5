const text = document.getElementById('text');
const numbers = document.querySelectorAll('.numbers button');
const acts = document.querySelectorAll('.act button');

let counter = "";
let result = 0;
let all = [];
let t = true;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (!t) {
            deleteAll();
        }
        counter += number.value;
        text.value = counter;
    });
});
acts.forEach(act => {
    act.addEventListener('click', () => {
        if (act.value === "c") {
            deleteAll();
        }
        all.push(Number(counter));
        if (act.value === "=") {
            all.forEach((some, i) => {
                if (some === "+") {
                    result += all[i - 1] + all[i + 1];
                } else {
                    if (some === "-") {
                        result += all[i - 1] - all[i + 1];
                    } else {
                        if (some === "*") {
                            result += all[i - 1] * all[i + 1];
                        } else {
                            if (some === "/") {
                                result += all[i - 1] / all[i + 1];
                            }
                        }
                    }
                }
            });
            text.value = result;
            counter = result;
            
            result = 0;
            all.length = 0;
            t = false;
        } else {
            all.push(act.value);
            counter = "";
            t = true;
        }

        console.log(all);
    });
});
function deleteAll() {
    counter = "";
    result = 0;
    all.length = 0;
    t = true;
    text.value = 0;
}
/*if(act.value === "+"){
            result += result1;
        } else {
            if(act.value === "-"){
                getMinus();
            } else {
                if(act.value === "*"){
                    getMultiply();
                } else {
                    if(act.value === "/"){
                        getDivide();
                    } else {
                        if(act.value === "c"){
                            cleanAll();
                        } else {
                            if(act.value === "="){
                                getResult();
                            }
                        }
                    }
                }
            }
        } */