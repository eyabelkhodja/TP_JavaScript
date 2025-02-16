function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const listItems = document.querySelectorAll(".liste"); // Correction ici

listItems.forEach(item => {
    item.addEventListener("click", function() {
        this.style.backgroundColor = getRandomColor();
    });
});

