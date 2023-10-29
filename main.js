var fearless = document.getElementById('fearless');
var theRed = document.getElementById('theRed');
var speakNow = document.getElementById('speakNow');
var oneNine = document.getElementById('1989');
var reputation = document.getElementById('theReputation');
var theEras = document.getElementById('theEras');
var fearlessPlay = document.getElementById('fearlessPlay');
var theRedPlay = document.getElementById('theRedPlay');
var speakNowPlay = document.getElementById('speakNowPlay');

var favorite = document.getElementById('favorite');
var container = document.querySelector('.container');
var bgBlack = document.querySelector('.black');

function slideInFearless() {
    fearless.style.transition = '1000ms ease-in-out';
    fearless.style.left === "-100%" ? fearless.style.left = "15%" : fearless.style.left = "-100%";
    fearless.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    fearless.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideInTheRed() {
    theRed.style.transition = '1000ms ease-in-out';
    theRed.style.left === "-100%" ? theRed.style.left = "15%" : theRed.style.left = "-100%";
    theRed.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    theRed.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideInSpeakNow() {
    speakNow.style.transition = '1000ms ease-in-out';
    speakNow.style.left === "-100%" ? speakNow.style.left = "15%" : speakNow.style.left = "-100%";
    speakNow.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    speakNow.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideIn1989() {
    oneNine.style.transition = '1000ms ease-in-out';
    oneNine.style.left === "-100%" ? oneNine.style.left = "15%" : oneNine.style.left = "-100%";
    oneNine.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    oneNine.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideInTheReputation() {
    reputation.style.transition = '1000ms ease-in-out';
    reputation.style.left === "-100%" ? reputation.style.left = "15%" : reputation.style.left = "-100%";
    reputation.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    reputation.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideInTheEras() {
    theEras.style.transition = '1000ms ease-in-out';
    theEras.style.left === "-100%" ? theEras.style.left = "15%" : theEras.style.left = "-100%";
    theEras.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    theEras.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideInFearlessPlay() {
    fearlessPlay.style.transition = '1000ms ease-in-out';
    fearlessPlay.style.left === "-100%" ? fearlessPlay.style.left = "15%" : fearlessPlay.style.left = "-100%";
    fearlessPlay.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    fearlessPlay.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideInTheRedPlay() {
    theRedPlay.style.transition = '1000ms ease-in-out';
    theRedPlay.style.left === "-100%" ? theRedPlay.style.left = "15%" : theRedPlay.style.left = "-100%";
    theRedPlay.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    theRedPlay.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}
function slideInSpeakNowPlay() {
    speakNowPlay.style.transition = '1000ms ease-in-out';
    speakNowPlay.style.left === "-100%" ? speakNowPlay.style.left = "15%" : speakNowPlay.style.left = "-100%";
    speakNowPlay.style.left === "-100%" ? bgBlack.style.opacity = "0" : bgBlack.style.opacity = "0.5";
    speakNowPlay.style.left === "-100%" ? bgBlack.style.zIndex = "-10" : bgBlack.style.zIndex = "10";
}

favorite.addEventListener('click', function(e) {
    if(favorite.style.background === 'none') {
        favorite.style.background = 'red';
    } else {
        favorite.style.background = 'none';
    }
});