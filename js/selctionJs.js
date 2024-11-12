let currentIndex = 2; // Startet mit dem dritten Bild als aktives

const characters = document.querySelectorAll('.character');

function updateCarousel() {
  characters.forEach((character, index) => {
    character.classList.remove('active', 'prev1', 'prev2', 'next1', 'next2');
    
    if (index === currentIndex) {
      character.classList.add('active');
    } else if (index === (currentIndex - 1 + characters.length) % characters.length) {
      character.classList.add('prev1');
    } else if (index === (currentIndex - 2 + characters.length) % characters.length) {
      character.classList.add('prev2');
    } else if (index === (currentIndex + 1) % characters.length) {
      character.classList.add('next1');
    } else if (index === (currentIndex + 2) % characters.length) {
      character.classList.add('next2');
    } else {
      character.style.opacity = 0; // Unsichtbar machen, wenn nicht im sichtbaren Bereich
    }
  });
}

function moveLeft() {
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  updateCarousel();
}

function moveRight() {
  currentIndex = (currentIndex + 1) % characters.length;
  updateCarousel();
}

// Initiales Setup
updateCarousel();
