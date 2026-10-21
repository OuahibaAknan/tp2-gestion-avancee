function ajouterapprenant() {
  const champ = document.getElementById("nom");
  const nom = champ.value.trim();

  if (nom === "") {
    alert("Veuillez saisir un nom.");
    return;
  }

  const element = document.createElement("li");
  element.textContent = nom;

  const bouton = document.createElement("button");
  bouton.textContent = "Supprimer";
  bouton.onclick = function () {
    supprimerapprenant(bouton);
  };
  element.appendChild(bouton);

  document.getElementById("liste").appendChild(element);
  champ.value = "";
}

function supprimerapprenant(bouton) {
  bouton.parentElement.remove();
}