let texte = document.getElementById("texte");
let fontSizeInput = document.getElementById("fontSize");

function applyStyle(elementId, cssProperty, unit = "") {
    document.getElementById(elementId).addEventListener("input", function () {
        texte.style[cssProperty] = this.value + unit;
    });
}

const textBox = document.querySelector(".textBox");

function autoResize() {
    textBox.style.height = "auto";
    textBox.style.height = textBox.scrollHeight + "px"; 
}

textBox.addEventListener("input", autoResize);
applyStyle("colorPicker", "color");
applyStyle("fontSize", "fontSize", "px");
applyStyle("font", "fontFamily");
