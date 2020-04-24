const container = document.getElementById('container');
container.addEventListener('click', function (e){
    if(e.target.nodeName === "A"){
        const counter = prompt("Если вы хотите перейти по ссылке введите - Y - если не хотите введите - N -");
        if(counter != "y" && counter != "Y"){
            e.preventDefault();
        };
    }
});