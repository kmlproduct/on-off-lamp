let imgChange = document.getElementById('imgs');
let on = document.getElementById('btn-on');
let off = document.getElementById('btn-off');

on.addEventListener('click', function () {
    let imgChange = document.getElementById('imgs');
    imgChange.src = 'img/lamp-on.png'
})
off.addEventListener('click', function () {
    let imgChange = document.getElementById('imgs');
    imgChange.src = 'img/lamp-off.png'
})