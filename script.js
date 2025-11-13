function updateClock() {
  const now = new Date();

  // Ambil jam, menit, detik
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  // Format tanggal lokal
  const date = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  document.getElementById('clock').textContent = ${hours}:${minutes}:${seconds};
  document.getElementById('date').textContent = date;
}

// Jalankan updateClock setiap detik
setInterval(updateClock, 1000);
updateClock(); // panggil sekali saat load
