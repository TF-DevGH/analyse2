var button = document.querySelector('button');

button.addEventListener('click', function() {
  button.classList.toggle('active');
});
// Ajouter un événement "click" au bouton
let bouton = document.getElementById("mon-bouton");
bouton.addEventListener("click", function() {
  // Ajouter ou supprimer la classe "active" au bouton lorsqu'il est cliqué
  if (bouton.classList.contains("active")) {
    bouton.classList.remove("active");
  } else {
    bouton.classList.add("active");
  }
});
