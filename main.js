// let imgChange = document.getElementById('imgs');
let on = document.getElementById('btn-on');
let off = document.getElementById('btn-off');

on.addEventListener('click', function () {
    let imgChange = document.getElementById('shadow');
    let imgs = document.getElementById('imgs');
    imgChange.style.display = 'block';
    imgs.style.backgroun = 'yellow';



})
off.addEventListener('click', function () {
    let imgChange = document.getElementById('shadow');
    imgChange.style.display = 'none';



})