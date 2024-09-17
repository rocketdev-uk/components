function updateCountdown() {
  const endDate = new Date('2024-09-23T00:00:59');
  const now = new Date();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
      document.querySelectorAll('.digit').forEach(digit => digit.textContent = '00');
      return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').querySelector('.digit').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').querySelector('.digit').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').querySelector('.digit').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').querySelector('.digit').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();