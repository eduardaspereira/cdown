function updateCountdown() {
    const end = new Date('2026-01-01T00:00:00');
    const now = new Date();
    const diff = end - now;

    if (diff <= 0) {
        document.getElementById('timer').innerHTML = '🎉 SLAP TIME! 🎉<br><span style="font-size: 0.6em;">The moment has arrived!</span>';
        document.querySelector('.slap-emoji').style.animation = 'none';
        document.querySelector('.slap-emoji').innerHTML = '💥';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerHTML = 
        `<span style="color: #FFD700;">${days}</span> days<br>` +
        `<span style="color: #FF6B6B;">${hours}</span> hours<br>` +
        `<span style="color: #4ECDC4;">${minutes}</span> minutes<br>` +
        `<span style="color: #45B7D1;">${seconds}</span> seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();






