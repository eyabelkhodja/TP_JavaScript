// Sélection des éléments du DOM
const todoInput = document.getElementById("todoInput");
const dayInput = document.getElementById("dayInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// Fonction pour ajouter une nouvelle tâche
function addTodo() {
    const taskText = todoInput.value.trim(); // On récupère le texte de l'input
    const dayText = dayInput.value.trim(); // On récupère le jour de la semaine

    // Vérification que les champs ne sont pas vides
    if (taskText === "" || dayText === "") {
        alert("Veuillez entrer une tâche et un jour de la semaine !");
        return; // On arrête la fonction si l'un des champs est vide
    }

    // Création d'un élément de liste pour la tâche
    const li = document.createElement("li");
    li.classList.add("todo-item");

    // Affichage du jour et de la tâche sous le format "jour : tâche"
    const span = document.createElement("span");
    span.textContent = `${dayText} : ${taskText}`;
    li.appendChild(span);

    // Création du bouton de suppression (croix)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖"; // La croix
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        li.remove(); // Supprimer la tâche lorsqu'on clique sur la croix
    });
    li.appendChild(deleteButton);

    // Ajouter la tâche à la liste
    todoList.appendChild(li);

    // Réinitialiser les inputs
    todoInput.value = "";
    dayInput.value = ""; // Réinitialiser le champ du jour
}

// Ajouter la tâche lorsque l'on clique sur le bouton ou appuie sur Enter
addButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});
