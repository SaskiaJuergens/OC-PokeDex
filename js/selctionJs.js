const characterImages = ["Aletea", "Ariko", "Dana", "Ethan", "Kagami", "Lillith", "Louann", "Tyler", "Luke", "Lumiel", "Mitsu", "Pyronus", "Renji", "Rebecca", "Shouta", "Yuna", "Sabrina"];
const characterDetails = {
  "Mitsu": { name: "Mitsu", age: 17, height: 1.69, species: "Tiger", birthday:"March 3", gender: "non-binary", sexuality: "Pansexual", MTBI: "ISPT", zoudiac: "Aries"},
  "Dana": { name: "Dana", age: 19, species: "Wolf" },
  "Ariko": { name: "Ariko", age: 20, species: "Fox" }
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