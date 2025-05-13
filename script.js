
function cekKelayakan() {
    const ph = parseFloat(document.getElementById('ph').value);
    const mikroba = parseFloat(document.getElementById('mikroba').value);
    const suhu = parseFloat(document.getElementById('suhu').value);
    let kategori = "Tidak Layak";
    if (ph <= 5.8 && mikroba <= 3200 && suhu <= 7) kategori = "Sangat Layak";
    else if (ph <= 6.2 && mikroba <= 58000 && suhu <= 15) kategori = "Layak";
    else if (ph <= 6.8 && mikroba <= 1100000 && suhu <= 22) kategori = "Batas Layak";
    document.getElementById('hasil').innerText = "Kategori: " + kategori;
}

// Grafik dummy
const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Hari 1', 'Hari 2', 'Hari 3', 'Hari 4', 'Hari 5'],
        datasets: [
            { label: 'pH', data: [5.3, 5.4, 5.7, 6.3, 7.1], borderColor: 'blue', fill: false },
            { label: 'Mikroba (1e6)', data: [0.001, 0.002, 0.05, 0.8, 2.3], borderColor: 'red', fill: false },
            { label: 'Suhu (°C)', data: [5, 10, 15, 22, 30], borderColor: 'green', fill: false }
        ]
    },
    options: { responsive: true }
});
