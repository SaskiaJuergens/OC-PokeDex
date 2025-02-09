/**
 * Radar Chart
 */

// Beispiel-Daten
    const data = [60, 40, 80, 70, 50, 20, 90, 40, 60, 10];
    const dataBackC = 'rgba(230, 230, 250, 0.2)'; // Lilac mit 20% Opazität
    const dataLineC = 'rgba(200, 162, 200, 1)'; // lilac
    

    /**
     * Radar Chart
     */
    document.addEventListener("DOMContentLoaded", function() {
        const ctx = document.getElementById('radarChart').getContext('2d');

        // Daten für das Radar-Chart
        const chartData = {
            labels: ['Geschicklichkeit', 'Stamina', 'Magisches Talent', 'IQ', 'Charisma', 'Soziale Fähigkeit', 'Wissen', 'Stärke', 'Kreativität', 'Extrovert'],
            datasets: [{
                label: 'Character Stats',
                data: data,
                backgroundColor: dataBackC,
                borderColor: dataLineC,
                pointBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ]
            }]
        };

        const config = {
            type: 'radar',
            data: chartData,
            options: {
                scale: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        max: 100,
                        callback: function(value) {
                            if (value === 0 || value === 100) {
                                return value.toString(); // Zeige nur 0 und 100 als Beschriftungen
                            }
                            return '';
                        }
                    }
                }
            }
        };

        // Erstelle das Radar-Chart
        new Chart(ctx, config);
    });
