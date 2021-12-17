//1
let div = document.getElementById('content');
function test(e) {
    e.target.style.border = 'solid red 2px'
}
div.addEventListener('click', test)