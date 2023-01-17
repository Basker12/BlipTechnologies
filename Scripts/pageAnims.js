let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let animDivs = document.querySelectorAll('[data-animations]');

play.addEventListener('click', () => {
    animDivs.forEach(animation => {
        animation.style.animationPlayState = "running";
    });
});
pause.addEventListener('click', () => {
    animDivs.forEach(animation => {
        animation.style.animationPlayState = "paused";
    });
});