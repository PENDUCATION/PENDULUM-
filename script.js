let angle = 0;
let speed = 0.05;
let direction = 1;

function animatePendulum() {
    angle += speed * direction;
    if (angle > 30 || angle < -30) {
        direction *= -1;
    }
    document.getElementById("pendulum").style.transform = `translateX(-50%) rotate(${angle}deg)`;
    requestAnimationFrame(animatePendulum);
}

function increaseSpeed() {
    speed += 0.02;
}

function decreaseSpeed() {
    speed = Math.max(0.02, speed - 0.02);
}

function resetPendulum() {
    speed = 0.05;
    angle = 0;
    document.getElementById("pendulum").style.transform = "translateX(-50%) rotate(0deg)";
}

animatePendulum();
