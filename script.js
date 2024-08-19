const labels = document.querySelectorAll(".poll-area label");
const inputs = document.querySelectorAll(".poll-area input[type='radio']");

labels.forEach(label => {
    label.addEventListener("click", () => {
        labels.forEach(lbl => lbl.classList.remove("selected"));
        label.classList.add("selected");
        const input = document.getElementById(label.htmlFor);
        if (input) {
            input.checked = true;
        }
    });
});
