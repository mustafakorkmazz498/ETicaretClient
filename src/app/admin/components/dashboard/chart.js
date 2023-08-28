// Kategori Dağılımı Grafiği
var ctxCategory = document.getElementById('categoryChart').getContext('2d');
var categoryChart = new Chart(ctxCategory, {
    type: 'pie',
    data: {
        labels: ['Elektronik', 'Giyim', 'Ayakkabı', 'Ev ve Bahçe', 'Spor'],
        datasets: [{
            data: [25, 30, 15, 20, 10],
            backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Kategori Dağılımı'
        }
    }
});

// Ürün Stok Durumu Grafiği
var ctxStock = document.getElementById('stockChart').getContext('2d');
var stockChart = new Chart(ctxStock, {
    type: 'doughnut',
    data: {
        labels: ['Stokta Var', 'Stokta Yok'],
        datasets: [{
            data: [75, 25],
            backgroundColor: ['#99ff99', '#ff9999'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Ürün Stok Durumu'
        }
    }
});
