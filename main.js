var fearless = document.getElementById('fearless');
var favorite = document.getElementById('favorite');
var container = document.querySelector('.container');

function slideInFearless() {
    fearless.style.transition = '1000ms ease-in-out';
    fearless.style.left = "15%";
}
function slideOutFearless() {
    fearless.style.left = '-100%'
}
favorite.addEventListener('click', function(e) {
    if(favorite.style.background === 'none') {
        favorite.style.background = 'red';
    } else {
        favorite.style.background = 'none';
    }
});