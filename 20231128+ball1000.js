function create(ballId) {
    return document.getElementById(ballId);
}

function setSize(ball, width, height) {
    ball.style.width = width + 'px';
    ball.style.height = height + 'px';
}

function setColor(ball, r, g, b) {
    ball.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function move(ball, x, y) {
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

