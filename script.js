document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Revenues', 'Expenses'],
                datasets: [{
                    label: 'In millions',
                    data: [444, 300],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    const pieCtx = document.getElementById('myPieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: [
                    'English',
                    'French',
                    'Other',
                    'Prefer not to say'
                ],
                datasets: [{
                    label: 'Languages',
                    data: [50, 25, 15, 10],
                    borderWidth: 1
                }]
            }
        });
    }

    const lineCtx = document.getElementById('lineChart');

    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: [
                '2008',
                '2009',
                '2010',
                '2011'

            ],
            datasets: [{
                label: 'George Brown College',
                data: [12748, 13866, 13914, 14068],
                borderWidth: 1
            }]

        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + 'M';
                        }
                    }
                }
            }
        }
    });
});
