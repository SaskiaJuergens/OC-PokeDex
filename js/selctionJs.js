const characters = document.querySelectorAll('.character');
let activeIndex = characters.length - 1; // Start mit dem rechten (letzten) Bild als aktiv

function updateCarousel() {
  characters.forEach((character, index) => {
    character.classList.remove('active', 'prev1', 'prev2', 'prev3');

    if (index === activeIndex) {
      character.classList.add('active');
    } else if (index === activeIndex - 1 || (activeIndex === 0 && index === characters.length - 1)) {
      character.classList.add('prev1');
    } else if (index === activeIndex - 2 || (activeIndex === 1 && index === characters.length - 1) || (activeIndex === 0 && index === characters.length - 2)) {
      character.classList.add('prev2');
    } else if (index === activeIndex - 3 || (activeIndex === 2 && index === characters.length - 1) || (activeIndex === 1 && index === characters.length - 2) || (activeIndex === 0 && index === characters.length - 3)) {
      character.classList.add('prev3');
    }
  });
}

function moveLeft() {
  activeIndex = (activeIndex - 1 + characters.length) % characters.length;
  updateCarousel();
}

function moveRight() {
  activeIndex = (activeIndex + 1) % characters.length;
  updateCarousel();
}

// Initiale Aufstellung
updateCarousel();

