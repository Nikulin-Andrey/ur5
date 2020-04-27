const container = document.getElementById('container');
let t = true;
const blocks = document.querySelectorAll('.block');

container.addEventListener('click', (e) => {
    if (e.target.hasAttribute('class')) {
        let redi = -1, redj = -1;
        for (let i = 0; i < blocks.length - 1; i++) {
            for (let j = i + 1; j < blocks.length; j++) {
                if (Math.abs(blocks[i].getBoundingClientRect().left - blocks[j].getBoundingClientRect().left) < 100 && Math.abs(blocks[i].getBoundingClientRect().top - blocks[j].getBoundingClientRect().top) < 100) {
                    blocks[i].classList.add("red");
                    blocks[j].classList.add("red");
                    redi = i;
                    redj = j
                } else {
                    if (i != redi && i != redj && j != redi && j != redj) {
                        blocks[i].classList.remove("red");
                        blocks[j].classList.remove("red");
                    }
                }
            }
        }
        if (t) {
            e.target.addEventListener('mouseout', moveBlock)
            t = false;
        } else {
            e.target.removeEventListener('mouseout', moveBlock);
            t = true;
        }


    }
});

function moveBlock(ev) {
    const rect = container.getBoundingClientRect();
    const blockrect = ev.target.getBoundingClientRect();
    if (ev.pageX + 50 - rect.left <= rect.right - rect.left && ev.pageY + 50 - rect.top <= rect.bottom - rect.top && ev.pageX - 50 >= rect.left && ev.pageY - 50 >= rect.top) {
        ev.target.style.left = ev.pageX - 50 - rect.left + "px";
        ev.target.style.top = ev.pageY - 50 - rect.top + "px";
    }

    console.log(ev)
}