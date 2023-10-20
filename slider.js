const boxContainer = document.querySelector('.box-container');
const contentSlider = document.querySelectorAll('.box');
const arrLeft = document.getElementById('left-arrow');
const arrRight = document.getElementById('right-arrow');

let offset = 0;
let slideIncrement = 0;
let slideDecrement = contentSlider.length - 1;



arrRight.addEventListener("click", () => {
    arrRight.disabled = true;
    offset = contentSlider[0].offsetWidth;
    boxContainer.style.left = -offset + "px";
    boxContainer.style.transition = "ease 5s left";
    setTimeout(() => {
        boxContainer.style.transition = "none";
        contentSlider[slideIncrement].style.order = contentSlider.length - 1;
        boxContainer.style.left = 0;
        slideIncrement++;
        slideDecrement = slideIncrement - 1;
        if(slideIncrement === contentSlider.length){
            slideIncrement = 0;
            contentSlider.forEach(box => {
                box.style.order = "initial";
            });
        }
        arrRight.disabled = false;
    }, 500);
});


arrLeft.addEventListener('click', () => {
    arrLeft.disabled = true;
    offset = contentSlider[0].offsetWidth;
    boxContainer.style.transition = 'none';
    if(slideDecrement < 0) {
        contentSlider.forEach(box => {
            box.style.order = 'initial';
        });
        slideDecrement = contentSlider.length - 1;
    }
    contentSlider[slideDecrement].style.order = '-1';
    boxContainer.style.left = -offset +'px';
    setTimeout(() => {
        boxContainer.style.transition = 'ease 5s left';
        boxContainer.style.left = 0;
    });
    setTimeout(() => {
        slideDecrement--;
        slideIncrement = slideDecrement + 1;
        arrLeft.disabled = false;
    }, 500);
});