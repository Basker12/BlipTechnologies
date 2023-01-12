let playerToggle = false;

function toggleStop() {
    if (playerToggle === false) {
        stopAnim();
    }
}
function toggleStart () {
    if (playerToggle === false) {
        startAnim();
        console.log("Should be working")
    }
}

function stopAnim () {
    let anim = document.querySelectorAll('[data-animations]');
    anim.forEach(animation => {
        animation.classList.add('paused');
    });
}
function startAnim () {
    let anim = document.querySelectorAll('[data-animations]');
    anim.forEach(animation => {
        animation.classList.remove('paused', 'running');
    });
}