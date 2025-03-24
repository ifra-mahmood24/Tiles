window.onload = function() {
    createLevelButtons()
}

function createLevelButtons() {
    let container = document.getElementById("levelsContainer");
    for (let i=1; i<11; i++) {
        let button = document.createElement("button");
        button.innerText = `${i}`;
        button.id = `level${i}`;
        button.classList.add("levels");
        container.appendChild(button);

        path = "";
        button.addEventListener("click", function() {
            let path = `Levels/level${i}.html`;
            location.href = path;
        })
    }
}

function back() {
    location.href = "index.html";
}