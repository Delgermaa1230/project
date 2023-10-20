var fearless = document.getElementById('fearless');
var favorite = document.getElementById('favorite');
var container = document.querySelector('.container');
var bgBlack = document.querySelector('.black');

function slideInFearless() {
    fearless.style.transition = '1000ms ease-in-out';
    fearless.style.left === "-100%" ? fearless.style.left = "15%" : fearless.style.left = "-100%";
    fearless.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    fearless.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
favorite.addEventListener('click', function(e) {
    if(favorite.style.background === 'none') {
        favorite.style.background = 'red';
    } else {
        favorite.style.background = 'none';
    }
});