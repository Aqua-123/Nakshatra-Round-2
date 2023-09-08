// Function to create a shooting star
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    document.body.appendChild(shootingStar);

    const duration = Math.random() * 5 + 3; // Random duration between 3 to 8 seconds

    const maxWidth = window.innerWidth - 50; // Adjust for the shooting star's width
    const maxHeight = window.innerHeight - 50; // Adjust for the shooting star's height

    const leftPosition = Math.random() * maxWidth;
    const topPosition = Math.random() * maxHeight;

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
for (let i = 0; i < 20; i++) {
    createShootingStar();
}

