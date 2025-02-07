document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Revenues', 'Expenses'],
                datasets: [{
                    label: 'In Thousands',
                    data: [444, 300],
                    borderWidth: 1
                } 
            ]
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

    const lineCtx = document.getElementById('lineChart');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['2008', '2009', '2010', '2011'],
                datasets: [{
                    label: 'Admissions',
                    data: [100, 200, 300, 400],
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
                labels: ['English', 'French', 'Other', 'Prefer not to say'],
                datasets: [{
                    label: 'Languages',
                    data: [50, 25, 15, 10],
                    borderWidth: 1
                }]
            }
        });
    }

    const anotherPieCtx = document.getElementById('anotherPieChart');
    if (anotherPieCtx) {
        new Chart(anotherPieCtx, {
            type: 'pie',
            data: {
                labels: ['Category A', 'Category B', 'Category C', 'Category D'],
                datasets: [{
                    label: 'Categories',
                    data: [30, 40, 20, 10],
                    borderWidth: 1
                }]
            }
        });
    }

    const extraPieCtx = document.getElementById('extraPieChart');
    if (extraPieCtx) {
        new Chart(extraPieCtx, {
            type: 'pie',
            data: {
                labels: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4'],
                datasets: [{
                    label: 'Segments',
                    data: [25, 35, 20, 20],
                    borderWidth: 1
                }]
            }
        });
    }
    const extraBarCtx = document.getElementById('extraBarChart');
    if (extraBarCtx) {
        new Chart(extraBarCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Quarterly Revenue',
                    data: [150, 200, 250, 300],
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

    const anotherLineCtx = document.getElementById('anotherLineChart');
    if (anotherLineCtx) {
        new Chart(anotherLineCtx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018'],
                datasets: [{
                    label: 'Growth',
                    data: [50, 100, 150, 200],
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
   
});
