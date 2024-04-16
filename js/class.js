// Die Funktion zum Wechseln der Seite
function goBackToPage() {
    window.location.href = "index.html";
}
var ChangeBackBtn = document.getElementById("backBtn");
ChangeBackBtn.addEventListener("click", goBackToPage);