const characters = document.querySelectorAll('.character');
let activeIndex = 2;

function updateCarousel() {
  characters.forEach((character, index) => {
    character.classList.remove('active', 'prev1', 'prev2', 'next1', 'next2');

    if (index === activeIndex) {
      character.classList.add('active');
    } else if (index === (activeIndex - 1 + characters.length) % characters.length) {
      character.classList.add('prev1');
    } else if (index === (activeIndex - 2 + characters.length) % characters.length) {
      character.classList.add('prev2');
    } else if (index === (activeIndex + 1) % characters.length) {
      character.classList.add('next1');
    } else if (index === (activeIndex + 2) % characters.length) {
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

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  }
});

updateCarousel();



//////////////////////////////////////////go to diffrent html//////////////////////////////////////////////
document.getElementById('Button').addEventListener('click', function() {
  window.location.href = 'Mitsu.html';  
});