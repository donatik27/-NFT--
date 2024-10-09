const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

document.getElementById('generate-button').addEventListener('click', generateArt);
document.getElementById('download-button').addEventListener('click', downloadArt);

function generateArt() {
    // Очистити попереднє зображення
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Випадкові кольори та форми
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = getRandomColor();
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 50, 0, Math.PI * 2);
        ctx.fill();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function downloadArt() {
    const link = document.createElement('a');
    link.download = 'nft_art.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
