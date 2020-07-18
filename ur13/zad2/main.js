const contextmenu = document.getElementById('contextmenu');
const container = document.getElementById('container');
contextmenu.setAttribute("style", "display:none;");
container.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    contextmenu.removeAttribute("style");
});
document.body.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-attribute')) {
        alert(e.target.getAttribute('data-attribute'));
    } else {
        contextmenu.setAttribute("style", "display:none;");
    }
});