const contextmenu = document.getElementById('contextmenu');
const container = document.getElementById('container');
container.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    if (!e.target.hasAttribute('data-attribute')) {
        if (e.offsetX > innerWidth - 150) {
            contextmenu.style.left = (e.offsetX - 150) + "px";
        } else {
            contextmenu.style.left = e.offsetX + "px";
        }
        if (e.offsetY > innerHeight - 150) {
            contextmenu.style.top = (e.offsetY - 150) + "px";
        } else {
            contextmenu.style.top = e.offsetY + "px";
        }
        contextmenu.style.display = "block";
    }

});
document.body.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-attribute')) {
        alert(e.target.getAttribute('data-attribute'));
    } else {
        contextmenu.removeAttribute("style");
    }
});