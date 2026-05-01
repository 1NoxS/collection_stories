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

// Прогресс-бар чтения

const progressBar = document.getElementById('readingProgress');

if (progressBar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

const chapterSelect = document.getElementById('chapterSelect');

if (chapterSelect) {
    chapterSelect.addEventListener('change', () => {
        window.location.href = chapterSelect.value;
    });
}


// Время чтения
function calculateReadingTime() {
    const readingTimeElement = document.getElementById('readingTime');
    if (!readingTimeElement) return;
    
    const storyPage = document.querySelector('.story-page');
    if (!storyPage) return;
    
    const text = storyPage.innerText || storyPage.textContent;
    const words = text.trim().split(/\s+/).length;
    const wordsPerMinute = 200;
    let minutes = Math.ceil(words / wordsPerMinute);
    
    if (minutes < 1) {
        readingTimeElement.textContent = '📖 < 1 минуты чтения';
    } else {
        const word = getMinutesWord(minutes);
        readingTimeElement.textContent = `📖 ${minutes} ${word} чтения`;
    }
}

function getMinutesWord(minutes) {
    if (minutes >= 11 && minutes <= 14) return 'минут';
    const lastDigit = minutes % 10;
    if (lastDigit === 1) return 'минута';
    if (lastDigit >= 2 && lastDigit <= 4) return 'минуты';
    return 'минут';
}

calculateReadingTime();