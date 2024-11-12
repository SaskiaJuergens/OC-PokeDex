const characters = document.querySelectorAll('.character');
let activeIndex = 2; // Index des aktiven Bildes, das zuerst zentriert ist

function updateCarousel() {
  characters.forEach((character, index) => {
    character.classList.remove('active', 'prev1', 'prev2', 'next1', 'next2');
    
    if (index === activeIndex) {
      character.classList.add('active');
    } else if (index === activeIndex - 1 || (activeIndex === 0 && index === characters.length - 1)) {
      character.classList.add('prev1');
    } else if (index === activeIndex - 2 || (activeIndex === 1 && index === characters.length - 1) || (activeIndex === 0 && index === characters.length - 2)) {
      character.classList.add('prev2');
    } else if (index === activeIndex + 1 || (activeIndex === characters.length - 1 && index === 0)) {
      character.classList.add('next1');
    } else if (index === activeIndex + 2 || (activeIndex === characters.length - 2 && index === 0) || (activeIndex === characters.length - 1 && index === 1)) {
      character.classList.add('next2');
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
