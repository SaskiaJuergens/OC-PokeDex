function ToDetailPage(tab) {
    if(tab=='history'){
      window.location.href = 'LumielHistory.html';
    } else if(tab=='skill') {
      window.location.href = 'LumielSkills.html';
    } else if(tab=='profile') {
      window.location.href = 'Lumiel.html';
    } else  {
      window.location.href = 'LumielPhotos.html';
    }
  }

/**
 * Radar Chart
 */
// Execute JavaScript after the HTML document has been completely loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    // Access the canvas element within this event listener
    const ctx = document.getElementById('radarChart').getContext('2d');

    // Create chart using a different variable name to avoid conflicts
    const chartData = {
        labels: ['Geschicklichkeit', 'Stamina', 'Magisches Talent', 'IQ', 'Charisma', 'Soziale Fähigkeit', 'Wissen', 'Stärke', 'Kreativität', 'Extrovert'],
        datasets: [{
            label: 'Character Stats',
            data: [40, 40, 80, 80, 50, 50, 100, 30, 60, 20],
            backgroundColor: 'rgba(230, 230, 250, 0.2)',
            borderColor: 'rgba(200, 162, 200, 1)',
            pointBackgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)'
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
                'rgba(54, 162, 235, 1)'
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
                    callback: function(value, index, values) {
                        if (value === -0 || value === 120) {
                            return value.toString();
                        }
                        return '';
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});





// Beispiel JavaScript (Lumielscript.js)
const characterGallery = document.getElementById('dynamic');

// Annahme: Ein Array von Bild-URLs
const imageUrls = [
    'bilder/GenjuuSchool_2.1.png',
    'bilder/Lumiel1.png',
    // Weitere Bilder hier hinzufügen ...
];

// Funktion zum Erstellen und Hinzufügen von Bildern zur Galerie
function addImagesToGallery(images) {
    images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Dynamic Image';
        img.classList.add('Dynamic-item');

        const figure = document.createElement('figure');
        figure.appendChild(img);

        characterGallery.appendChild(figure);
    });
}

// Aufruf der Funktion, um Bilder zur Galerie hinzuzufügen
addImagesToGallery(imageUrls);
