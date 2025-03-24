let level1 = [5,2,3,1,4];
let level2 = [1,5,2,3,3,4];
let level3 = [2,4,4,1,3,5,5];
let level4 = [1,4,5,8,2,3,6,7];
let level5 = [7,6,1,3,3,5,4,2,8];
let level6 = [5,8,3,4,2,1,7,1,6,5];
let level7 = [2,4,6,8,10,1,3,5,7,9];
let level8 = [8,1,3,5,10,12,2,4,6,7,9,11];
let level9 = [1,11,3,7,6,9,4,13,14,2,12,10,5,8];
let level10 = [1,4,13,16,2,3,5,6,7,8,9,10,11,12,14,15];
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
    }, 700);
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
            key.style.backgroundColor = "red";
            setTimeout(() => {
                key.style.backgroundColor = "rgb(80, 20, 117)";
            },200);
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
                  currentButton.style.backgroundColor = "rgb(80, 20, 117)";
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
        let nextButton = document.getElementById("next");
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "rgb(80, 20, 117)";
    } else {
        window.alert("Try again!");
    }
}

function winGame() {
    location.href='/index.html';
    window.alert("You win!");
}