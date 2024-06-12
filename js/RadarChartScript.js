// Get OC name from URL parameter
var ocName = getParameterByName('name');
var data;
var dataBackC;
var dataLineC;
var imageSrc;
var photogallery = [];


if (ocName === 'Aletea') {
    data = [20, 40, 60, 80, 40, 60, 100, 40, 60, 50]; // Beispielwerte, bitte ersetzen
    dataBackC = 'rgba(205, 133, 63, 0.2)'; // Light brown with 20% opacity
    dataLineC = 'rgba(255, 140, 0, 1)'; // Orange
    imageSrc = 'alle_png/Aletea.png';
    photogallery = ['bilder/Unbenannt-1.png'];

} else if (ocName === 'Ariko') {
    data = [40, 60, 80, 20, 60, 80, 90, 70, 50, 50];
    dataBackC = 'rgba(128, 128, 128, 0.2)'; // Gray with 20% opacity
    dataLineC = 'rgba(128, 128, 128, 1)'; // Gray
    imageSrc = 'alle_png/Ariko.png';
    photogallery = [];

} else if (ocName === 'Chloe') {
    data = [45, 36, 80, 26, 60, 80, 57, 70, 69, 50];
    dataBackC = 'rgba(173, 216, 230, 0.2)';
    dataLineC = 'rgba(173, 216, 230, 1)';
    imageSrc = 'alle_png/chloe.png';
    photogallery = [];

} else if (ocName === 'Dana') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(139, 69, 19, 0.2)'; // Brown with 20% opacity
    dataLineC = 'rgba(255, 0, 0, 1)'; // Red
    imageSrc = 'alle_png/dana.png';
    photogallery = [];

} else if (ocName === 'Ethan') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(173, 216, 230, 0.2)';
    dataLineC = 'rgba(173, 216, 230, 1)';
    imageSrc = 'alle_png/Ethan.png';
    photogallery = [];

} else if (ocName === 'Lillith') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(230, 230, 250, 0.2)'; // Lilac with 20% opacity
    dataLineC = 'rgba(0, 0, 139, 1)';
    imageSrc = 'alle_png/Lillith.png';
    photogallery = [];

} else if (ocName === 'Louann') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(255, 192, 203, 0.2)'; // Pink with 20% opacity
    dataLineC = 'rgba(255, 192, 203, 1)'; // Pink
    imageSrc = 'alle_png/louann.png';
    photogallery = ['bilder/Lagerfeuer.jpg', 'bilder/OC_Party.png'];

}  else if (ocName === 'Luke') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(255, 99, 132, 0.2)';
    dataLineC = 'rgba(255, 99, 132, 1)';
    imageSrc = 'alle_png/luke.png';
    photogallery = [];

}  else if (ocName === 'Lumiel') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(230, 230, 250, 0.2)'; // Lilac with 20% opacity
    dataLineC = 'rgba(200, 162, 200, 1)'; // lilac
    imageSrc = 'alle_png/Lumiel.png';
    photogallery = ['bilder/Lumiel1.png'];

}  else if (ocName === 'Mitsu') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(255, 165, 0, 0.2)'; // Orange with 20% opacity
    dataLineC = 'rgba(255, 165, 0, 1)'; // Orange
    imageSrc = 'alle_png/mitsu.png';
    photogallery = ['bilder/tattoo.png','bilder/mitsu2023.png'];

}  else if (ocName === 'Niall') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(114, 47, 55, 0.2)'; // Wine red with 20% opacity
    dataLineC = 'rgba(114, 47, 55, 1)'; // Wine red
    imageSrc = 'alle_png/niall-vampire.png';
    photogallery = [];

}  else if (ocName === 'Pyronus') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(0, 100, 0, 0.2)'; // Dark green with 20% opacity
    dataLineC = 'rgba(0, 100, 0, 1)'; // Dark green
    imageSrc = 'alle_png/Pyronus.png';

} else if (ocName === 'Rebecca') {
    data = [45, 36, 80, 26, 60, 80, 57, 70, 69, 50];
    dataBackC = 'rgba(0, 0, 139, 0.2)'; // Dark blue with 20% opacity
    dataLineC = 'rgba(0, 0, 139, 1)'; // Dark blue
    imageSrc = 'alle_png/rebecca.png';
    photogallery = ['bilder/Rebecca1_2.png', 'bilder/RebeccaWallpaper_.png'];

} else if (ocName === 'Sabrina') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(255, 99, 132, 0.2)';
    dataLineC = 'rgba(255, 99, 132, 1)';
    imageSrc = 'alle_png/sabrina.png';
    photogallery = [];

} else if (ocName === 'Tyler') {
    data = [0, 60, 80, 20, 60, 100, 90, 70, 50, 50];
    dataBackC = 'rgba(255, 99, 132, 0.2)';
    dataLineC = 'rgba(255, 99, 132, 1)';
    imageSrc = 'alle_png/tyler.png';
    photogallery = [];

} else {
    // If OC name is neither "Aletea" nor "Luke", do not show the chart
    document.getElementById('radarChart').style.display = 'none';
    imageSrc = 'bilder/GenjuuSchool_2.1.png';
    photogallery = [];
}


// Set the image source based on OC name
document.getElementById('ocImage').src = imageSrc;

// Add photos to the gallery based on OC name
const photoGalleryElement = document.getElementById('photoGallery');
photogallery.forEach(photo => {
    const imgElement = document.createElement('img');
    imgElement.src = photo;
    imgElement.classList.add('oc-fotos');
    imgElement.alt = 'OC Photo';
    photoGalleryElement.appendChild(imgElement);
});

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
