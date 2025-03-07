let angle = 0;
let speed = 0.05;
let direction = 1;

function animatePendulum() {
    angle += speed * direction;
    if (angle > 20 || angle < -20) {
        direction *= -1;
    }
    document.getElementById("pendulum").style.transform = `translateX(-50%) rotate(${angle}deg)`;
    requestAnimationFrame(animatePendulum);
}

animatePendulum();
