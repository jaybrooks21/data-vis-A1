document.addEventListener('DOMContentLoaded', function () {

    // Remote Worker vs Digital Nomad Chart
    const remoteWorkerCtx = document.getElementById('remoteWorkerChart');
    if (remoteWorkerCtx) {
        new Chart(remoteWorkerCtx, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [
                    {
                        label: 'Remote Workers',
                        data: [3.2, 6.3, 10.2, 11.1, 10.7, 10.2],
                        backgroundColor: 'rgba(255, 242, 64, 0.64)',
                        borderColor: 'rgba(255, 242, 64, 0.64)',
                        borderWidth: 1,
                        borderColor: 'black',
                    },
                    {
                        label: 'Digital Nomads',
                        data: [4.1, 4.6, 5.3, 5.8, 6.6, 7.9],
                        backgroundColor: '#5faa9a',
                        borderColor: '#5faa9a',
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
                            text: 'Number of Workers (in millions)',
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
    }

    // Age Distribution Chart
    const ageCtx = document.getElementById('ageChart');
    if (ageCtx) {
        new Chart(ageCtx, {
            type: 'bar',
            data: {
                labels: ['Gen Z', 'Millennials', 'Gen X', 'Boomers'],
                datasets: [{
                    label: '2023',
                    data: [21, 37, 27, 15],
                    backgroundColor: '#feeee4',
                    borderColor: '#feeee4',
                    borderWidth: 1,
                    borderColor: 'black',
                },
                {
                    label: '2024',
                    data: [26, 38, 25, 11],
                    backgroundColor: '#f37341',
                    borderColor: '#f37341',
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
                            text: 'Percentage of Age Distribution',
                        }
                    },

                }
            }
        });
    }

    // FT vs PT Chart
    const fullTimeCtx = document.getElementById('fullTimeChart');
    if (fullTimeCtx) {
        new Chart(fullTimeCtx, {
            type: 'pie',
            data: {
                labels: ['Full-Time', 'Part-Time',],
                datasets: [{
                    label: 'FT vs PT',
                    data: [64, 36],
                    borderWidth: 1
                },

                ]
            }
        });
    }

    // Education Level Chart
    const educationCtx = document.getElementById('educationChart');
    if (educationCtx) {
        new Chart(educationCtx, {
            type: 'pie',
            data: {
                labels: ['College Degree', 'Advanced Degree',],
                datasets: [{
                    label: 'Categories',
                    data: [52, 18],
                    borderWidth: 1,
                    
                }]
            }
        });
    }

    // Challenges Chart
    const challengesCtx = document.getElementById('challengesChart');
    if (challengesCtx) {
        new Chart(challengesCtx, {
            type: 'bar',
            data: {
                labels: ['Financial Stress', 'Personal Safety', 'Being Away From Family', 'Time Zone Issues', 'Managing Work & Travel', 'Loneliness', 'Travel Logistics'],
                datasets: [
                    {
                        label: '2023',
                        data: [27, 22, 26, 23, 24, 16, 21],
                        backgroundColor: '#85c2e6',
                        borderColor: '#85c2e6',
                        borderWidth: 1,
                        borderColor: 'black',
                    },

                    {
                        label: '2024',
                        data: [25, 19, 28, 24, 23, 18, 23],
                        backgroundColor: '#6ea386',
                        borderColor: '#6ea386',
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
                            text: 'Percentage of Top Challenges',
                        }
                    },

                }
            }
        });
    }

    // Industries Chart
    const industriesCtx = document.getElementById('industriesChart');
    if (industriesCtx) {
        new Chart(industriesCtx, {
            type: 'bar',
            data: {
                labels: ['IT', 'Creative', 'Education', 'Sales Marketing & PR', 'Finance & Accounting', 'Consulting', 'Research'],
                datasets: [{
                    label: '2024',
                    data: [19, 14, 9, 8, 7, 7, 6],
                    backgroundColor: '#feedee',
                    borderColor: '#feedee',
                    borderWidth: 1,
                    borderColor: 'black',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Percentage of Digital Nomads by Industry',
                        }
                    },

                }
            }
        });
    }

});
