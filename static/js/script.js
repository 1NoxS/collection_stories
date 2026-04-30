// Кнопка "Наверх"
const scrollBtn = document.getElementById('scrollTopBtn');

if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Музыка
const musicBtn = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
        if (musicPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '🎵 Включить музыку';
            musicBtn.style.background = 'rgba(0, 0, 0, 0.6)';
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '🔇 Выключить музыку';
            musicBtn.style.background = 'rgba(102, 126, 234, 0.9)';
        }
        musicPlaying = !musicPlaying;
    });
}