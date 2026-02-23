

// =============================
// COUNTDOWN (страница 2)
// =============================

document.addEventListener("DOMContentLoaded", function () {

    // Укажи свою дату мероприятия здесь
    const eventDate = new Date("February 28, 2026 15:00:00").getTime();

    const countdownFunction = setInterval(function () {

        const now = new Date().getTime();
        const distance = eventDate - now;

        // Расчёты
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Вывод на страницу
        const d = document.getElementById("days");
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");

        if (d && h && m && s) {
            d.innerHTML = days;
            h.innerHTML = hours;
            m.innerHTML = minutes;
            s.innerHTML = seconds;
        }

        // Если время вышло
        if (distance < 0) {
            clearInterval(countdownFunction);

            if (d && h && m && s) {
                d.innerHTML = "0";
                h.innerHTML = "0";
                m.innerHTML = "0";
                s.innerHTML = "0";
            }
        }

    }, 1000);

});


// =============================
// МУЗЫКА (автовключение после клика)
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");

    if (music && musicBtn) {

        let isPlaying = false;

        musicBtn.addEventListener("click", function () {

            if (!isPlaying) {
                music.play();
                musicBtn.innerHTML = "Музыка: ВКЛ";
                isPlaying = true;
            } else {
                music.pause();
                musicBtn.innerHTML = "Музыка: ВЫКЛ";
                isPlaying = false;
            }

        });
    }

});