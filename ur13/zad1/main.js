const text = document.getElementById('text');
text.addEventListener('keydown',(e) => {
    if(!(e.which === 65 || e.which === 69 || e.which === 73 || e.which === 79 ||  e.which === 85 || e.which === 8)){
        e.preventDefault();
    }
    if(text.value.length >= 12){
        e.preventDefault();
        if(e.which === 8){
            text.value = "";
        }
    }
    
})