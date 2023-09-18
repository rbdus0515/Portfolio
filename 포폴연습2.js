const whiteMode = document.getElementById("white-mode");
const body = document.body;

whiteMode.addEventListener("click", () => {
    body.classList.toggle("white-mode");
});