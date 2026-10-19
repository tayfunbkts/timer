// Hedef: 6 Kasım 2026, saat 20:20 — Türkiye saati (UTC+03:00).
// Türkiye 2026 yılında UTC+03:00 kullandığı için hedefi bu offset ile tanımlıyoruz.
const targetDate = new Date("2026-11-06T20:20:00+03:00");

const fields = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};
const status = document.getElementById("status");

function updateCountdown() {
  const remainingMs = targetDate.getTime() - Date.now();

  if (remainingMs <= 0) {
    Object.values(fields).forEach((field) => field.textContent = "00");
    status.textContent = "Hedef zaman geldi!";
    document.title = "Hedef zaman geldi!";
    clearInterval(timerInterval);
    return;
  }

  const totalSeconds = Math.floor(remainingMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  fields.days.textContent = String(days);
  fields.hours.textContent = String(hours).padStart(2, "0");
  fields.minutes.textContent = String(minutes).padStart(2, "0");
  fields.seconds.textContent = String(seconds).padStart(2, "0");

  status.textContent = "Her saniye güncellenir.";
  document.title = `${days} gün ${hours} saat kaldı | Geri Sayım`;
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
