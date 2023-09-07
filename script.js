// Function to create a shooting star
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    document.body.appendChild(shootingStar);

    const duration = Math.random() * 5 + 3; // Random duration between 3 to 8 seconds
    const leftPosition = Math.random() * window.innerWidth;
    const topPosition = Math.random() * window.innerHeight;

    shootingStar.style.left = `${leftPosition}px`;
    shootingStar.style.top = `${topPosition}px`;
    shootingStar.style.animation = `shooting-star ${duration}s linear infinite`;

    // Remove the shooting star after it crosses the screen
    shootingStar.addEventListener('animationiteration', () => {
        shootingStar.remove();
        createShootingStar(); // Create a new shooting star
    });
}

// Create shooting stars initially and continuously
for (let i = 0; i < 10; i++) {
    createShootingStar();
}

