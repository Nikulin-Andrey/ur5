const text = document.getElementById('text');
const code = document.getElementById('code');
const button1 = document.getElementById('but1');
const button2 = document.getElementById('but2');

function makeCoding(){
   code.value = reversWords(text.value);
   text.value = "";
};

function makeUncoding(){
   text.value = reversWords(code.value);
   code.value = "";
};
function reversWords(some){
   let codeText = "";
   const splitedText = some.split(" ");
   splitedText.forEach((word) => {
      codeText += word.split("").reverse().join("") + " ";
   });
   return codeText;
}

button1.addEventListener('click', makeCoding);
button2.addEventListener('click', makeUncoding);
