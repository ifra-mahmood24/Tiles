let level1 = [5,2,3,1,4];
let level2 = [1,5,2,3,3,4];
let level3 = [2,4,4,1,3,5,5,2];
let level4 = [2,4,2,1,3,5,1,2];
let level5 = [2,4,2,1,3,5,1,2];
let level6 = [2,4,2,1,3,5,1,2];
let level7 = [2,4,2,1,3,5,1,2];
let level8 = [2,4,2,1,3,5,1,2];
let level9 = [2,4,2,1,3,5,1,2];
let level10 = [2,4,2,1,3,5,1,2];
let levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];
let level = 1;
let limit = 5;
let pressedOrder = [];
let order = [];

window.onload = function () {
    setLevel();
    setLimit(level);
    createKeys(limit);
    nextDisabler();
    setTimeout(() => {
        replay()
    }, 500);
    console.log(`level ${level}, limit ${limit}, order ${order}`);
};

function createKeys(limit) {
    let container = document.getElementById("keyContainer");

    if (!container) {
        console.error("keyContainer not found!");
        return;
    }

    container.innerHTML = "";

    for (let i = 1; i <= limit; i++) {
        let key = document.createElement("button");
        key.innerText = `${i}`;
        key.id = `key${i}`;
        key.classList.add("key");
        container.appendChild(key);

        key.addEventListener("click", function (event) {
            let keyNumber = Number(event.target.innerText);
            console.log("Key pressed:", keyNumber);
            pressedOrder.push(keyNumber);
            displayString = "Pressed Order: " + pressedOrder.join(", ");
            displayer(displayString);
        });
    }
}

function displayer(displayString) {
    document.getElementById("pressed").innerHTML = displayString;
}

function getLevel() {
    level = Number(document.getElementById("level").innerText.slice(6));
    return level;
}

function setLevel() {
    level = getLevel();
    for (let i=1; i<11; i++) {
        if (level == i) {
            order = levels[i-1];
        }
    }
}

function setLimit(level) {
    if (level <= 3) {
        limit = 5;
    }
    else if (level <= 6) {
        limit = 8;
    }
    else if (level == 7) {
        limit = 10;
    }
    else if (level == 8) {
        limit = 12;
    }
    else if (level == 9) {
        limit = 14;
    }
    else if (level == 10) {
        limit = 16;
    }
}

function replay() {
    console.log(order);
    pressedOrder = [];
    displayer("Pressed Order: ");
    order.forEach((i, idx) => {
        setTimeout(() => {
            let currentButton = document.getElementById(`key${i}`);
            if (currentButton) {
                currentButton.style.backgroundColor = "red";
                
                setTimeout(() => {
                  currentButton.style.backgroundColor = "grey";
                }, 500); //how long the blink is
            }
        }, idx*600); //when to start blinking
    });
}

function nextDisabler() {
    let nextButton = document.getElementById("next");
    if (nextButton) {
        nextButton.disabled = true;
        nextButton.style.backgroundColor = "grey";
    }
}

function checkWin() {
    if (JSON.stringify(pressedOrder) == JSON.stringify(order)){
        window.alert("You win!");
        let nextButton = document.getElementById("next");
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "cadetblue";
    } else {
        window.alert("Try again!");
    }
}