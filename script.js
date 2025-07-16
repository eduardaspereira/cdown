function updateCountdown() {
    const end = new Date('2026-01-01T00:00:00');
    const now = new Date();
    const diff = end - now;

    if (diff <= 0) {
        document.getElementById('timer').textContent = 'Happy New Year!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();