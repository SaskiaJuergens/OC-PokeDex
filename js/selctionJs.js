const characterImages = ["Aletea", "Ariko", "Chloe", "Dana", "Ethan", "Kagami", "Louann", "Niall", "Tyler", "Luke", "Lumiel", "Mitsu", "Pyronus", "Renji", "Rebecca", "Shota", "Sabrina", "Yuna"];
const characterDetails = {
  "Mitsu": { name: "Mitsu", age: 17, height: 1.69, species: "Tiger", birthday:"March 3", gender: "non-binary", sexuality: "Pansexual", MTBI: "ISPT", zoudiac: "Aries"},
  "Dana": { name: "Dana", age: 18, height: 1.72, species: "Deer", birthday:"August 9", gender: "female", sexuality: "Bisexual", MTBI: "ESFP", zoudiac: "Leo" },
  "Ariko": { name: "Ariko", age: 18, height: 1.87, species: "Werwolf", birthday:"October 24", gender: "male", sexuality: "Bisexual", MTBI: "ENFP", zoudiac: "Scorpio" },
  "Aletea": {name: "Aletea", age: 18, height: 1.66, species: "Ghost", birthday:"November 14", gender: "female", sexuality: "Lesbian", MTBI: "ISTP", zoudiac: "Scorpio"},
  "Chloe": {name: "Chloé", age: 17, height: 1.73, species: "Nixe", birthday:"May 22", gender: "female", sexuality: "Bisexual", MTBI: "ENTP", zoudiac: "Gemini"},
  "Ethan": {name: "Ethan", age: 18, height: 1.90, species: "Nixe", birthday:"June 19", gender: "male", sexuality: "Bisexual", MTBI: "ESFJ", zoudiac: "Gemini"},
  "Kagami": {name: "Kagami", age: 17, height: 1.71, species: "Spider", birthday:"October 31", gender: "female", sexuality: "Bisexual", MTBI: "INTJ", zoudiac: "Scorpio"},
  "Louann": {name: "Louann", age: 17, height: 1.59, species: "Unicorn", birthday:"April 12", gender: "female", sexuality: "Demisexual", MTBI: "ESFP", zoudiac: "Aries"},
  "Lumiel": {name: "Lumiel", age: 17, height: 1.76, species: "Visionary", birthday:"January 1", gender: "female", sexuality: "Pansexual", MTBI: "INTP", zoudiac: "Capricorns"},
  "Tyler": {name: "Tyler", age: 18, height: 1.78, species: "Devil", birthday:"April 10", gender: "male", sexuality: "Heterosexual", MTBI: "ESTJ", zoudiac: "Aries"},
  "Luke": {name: "Luke", age: 17, height: 1.75, species: "Human", birthday:"July 8", gender: "male", sexuality: "Gay", MTBI: "ESTP", zoudiac: "Cancer"},
  "Pyronus": {name: "Pyronus", age: 18, height: 1.93, species: "Dragon", birthday:"April 19", gender: "male", sexuality: "Heterosexual", MTBI: "ESTJ", zoudiac: "Aries"},
  "Niall": {name: "Niall", age: 18, height: 1.79, species: "Vampire", birthday:"December 6", gender: "male", sexuality: "Pansexual", MTBI: "INFJ", zoudiac: "Sagittarius"},
  "Renji": {name: "Renji", age: 18, height: 1.87, species: "Jiangshi", birthday:"novembre 2", gender: "male", sexuality: "Bisexual", MTBI: "INTP", zoudiac: "Scorpio"},
  "Sabrina": {name:"Sabrina", age: 18, height: 1.76, species: "Angle", birthday:"August 13", gender: "female", sexuality: "Heterosexual", MTBI: "ENTJ", zoudiac: "Leo"},
  "Rebecca": {name: "Rebecca", age: 17, height: 1.80, species: "Robot", birthday:"February 17", gender: "female", sexuality: "Asexual", MTBI: "INTP", zoudiac: "Aquarius"},
  "Yuna": { name:"Yuna", age: 17, height: 1.70, species: "Kitsune-Jiangshi", birthday:"September 5", gender: "female", sexuality: "Heterosexual", MTBI: "ENFP", zoudiac: "Virgo"},
  "Shota": {name: "Shota", age: 17, height: 1.70, species: "Kitsune", birthday:"September 5", gender: "male", sexuality: "Pansexual", MTBI: "ESFP", zoudiac: "Virgo"}
};
let activeIndex = 0;
  function updateCharacterDetails() {
  const detailsContainer = document.getElementById("character-info");
  const characterName = characterImages[activeIndex];
  const details = characterDetails[characterName] || {};
  detailsContainer.innerHTML = `
    <li>Name: ${characterName}</li>
    <li>Age: ${details.age || "Unknown"}</li>
    <li>Height: ${details.height || "Unknown"}</li>
    <li>Species: ${details.species || "Unknown"}</li>
    <li>Birthday: ${details.birthday || "Unknown"}</li>
    <li>Gender: ${details.gender || "Unknown"}</li>
    <li>Sexuality: ${details.sexuality || "Unknown"}</li>
    <li>MBTI: ${details.MTBI || "Unknown"}</li>
    <li>Zodiac: ${details.zoudiac || "Unknown"}</li>`;
    document.getElementById("more-info").onclick = () => {
      const characterName = characterImages[activeIndex]; // Aktuellen Character holen
      window.location.href = `${characterName}.html`; // Zur entsprechenden Seite wechseln
    };
  };

function loadCharacters() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";
  characterImages.forEach((name, index) => {
    let img = document.createElement("img");
    img.src = `alle_png/${name}.png`;
    img.classList.add("character");
    if (index === activeIndex) img.classList.add("active");
    else if (index === (activeIndex - 1 + characterImages.length) % characterImages.length) img.classList.add("prev1");
    else if (index === (activeIndex + 1) % characterImages.length) img.classList.add("next1");
    carousel.appendChild(img);
  });
  updateCharacterDetails();
}
function moveLeft() { activeIndex = (activeIndex - 1 + characterImages.length) % characterImages.length; loadCharacters(); }
function moveRight() { activeIndex = (activeIndex + 1) % characterImages.length; loadCharacters(); }
document.addEventListener("keydown", (event) => { if (event.key === "ArrowLeft") moveLeft(); else if (event.key === "ArrowRight") moveRight(); });
loadCharacters();


document.getElementById('novel-button').addEventListener('click', function() {
  window.location.href = 'novel.html';
});
