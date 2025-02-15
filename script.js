document.addEventListener('DOMContentLoaded', function () {
    
    // House Sales Chart
    const houseSaleCtx = document.getElementById('houseSaleChart');
    if (houseSaleCtx) {
        new Chart(houseSaleCtx, {
            type: 'line',
            data: {
                labels: ['Mar 2023', 'Jul 2023', 'Dec 2023', 'Mar 2024', 'Jul 2024', 'Dec 2024'],
                datasets: [
                {
                    label: 'BC',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'SK',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'MB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'ON',
                    data: [881946, 856239, 853195, 889103, 867835, 834123],
                    backgroundColor: 'rgba(104, 75, 192, 0.2)',
                    borderWidth: 1,
                    borderColor: 'rgba(44, 113, 113, 0.2)',

                },
                {
                    label: 'QC',
                    data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    borderColor: 'black',

                },
                {
                    label: 'NL',
                    data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    borderColor: 'black',

                },
                {
                    label: 'PEI',
                    data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    borderColor: 'black',

                },
                {
                    label: 'NB',
                    data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    borderColor: 'black',

                },
                {
                    label: 'NS',
                    data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    borderColor: 'black',

                },


                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Sale Price (in thousands)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    }
                }
            }
        });
    }

    // Avg 2 Bed Rent Chart
    const rentTwoBedCtx = document.getElementById('rentTwoBedChart');
    if (rentTwoBedCtx) {
        new Chart(rentTwoBedCtx, {
            type: 'bar',
            data: {
                labels: ['BC', 'AB', 'SK', '2011'],
                datasets: [{
                    label: 'BC',
                    data: [100, 200, 300, 400],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'SK',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: 'AB',
                    data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
                    backgroundColor: '#B5465D',
                    borderWidth: 1,
                    borderColor: 'black',
                },
        
                
            ]
            },

            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Monthly Rent (in hundreds)'
                        }
                    },
                    
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
