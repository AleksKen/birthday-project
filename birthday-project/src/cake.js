const candle = document.getElementById('candle');
const candleLit = document.getElementById('candle-lit');
const target = document.getElementById('candle-target');
const message = document.getElementById('bottom-message');
const birthdayMusic = document.getElementById('birthday-music');
const arrow = document.getElementById('arrow');
const blow = document.getElementById('blow');

// Переменные для отслеживания состояния перетаскивания
let isDragging = false;

function handleCandleSuccess() {
    // Воспроизводим музыку
    birthdayMusic.play();

    // Скрываем оригинальную свечу
    candle.style.visibility = 'hidden';

    // Скрываем стрелку
    arrow.style.visibility = 'hidden';

    // Убираем черную область
    target.style.visibility = 'hidden';

    // Зажигаем свечу
    candleLit.style.display = 'flex';

    //Рисуем стрелку
    blow.style.display = 'block';

    // Показываем поздравление
    message.style.display = 'block';

    const headers = document.querySelectorAll('.message h1');

    // Добавляем класс с анимацией к каждому заголовку
    headers.forEach(header => {
        header.classList.add('animate');
    });
}

// Начало перетаскивания (для десктопов)
candle.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'candle');
});

// Начало перетаскивания (для мобильных устройств)
candle.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault(); // Предотвращаем стандартное поведение
});

// Перетаскивание (для мобильных устройств)
document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        // Получаем координаты касания
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        // Перемещаем свечу
        candle.style.position = 'fixed';
        candle.style.left = `${x - candle.offsetWidth / 2}px`;
        candle.style.top = `${y - candle.offsetHeight / 2}px`;
    }
});

// Завершение перетаскивания (для мобильных устройств)
document.addEventListener('touchend', (e) => {
    if (isDragging) {
        isDragging = false;

        // Получаем координаты свечи
        const candleRect = candle.getBoundingClientRect();

        // Получаем координаты целевой области
        const targetRect = target.getBoundingClientRect();

        // Проверяем, находится ли свеча в целевой области
        if (
            candleRect.left >= targetRect.left &&
            candleRect.right <= targetRect.right &&
            candleRect.top >= targetRect.top &&
            candleRect.bottom <= targetRect.bottom * 3
        ) {
            handleCandleSuccess();
        }
        else {
            candle.style.position = 'static';
        }
    }
});

// Перетаскивание над тортом (для десктопов)
target.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Завершение перетаскивания (для десктопов)
target.addEventListener('drop', (e) => {
    e.preventDefault();

    handleCandleSuccess();
});

// Добавляем обработчик события click
candleLit.addEventListener('click', function() {
    // Переход на страницу flowers.html
    window.location.href = 'flowers.html';
});