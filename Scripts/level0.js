let order = [1,4,13,16,2,3,5,6,7,8,9,10,11,12,14,15];
let pressedOrder = [];


window.onload = function () {
    createKeys(16);
    setTimeout(() => {
        changeColour();
    }, 500);
};

function createKeys(limit) {
    let container = document.getElementById("keyContainer");
    container.innerHTML = "";
    for (let i=1; i<limit+1; i++) {
        let key = document.createElement("button");
        key.innerText = `${i}`;
        key.id = `key${i}`;
        key.classList.add("key");
        container.appendChild(key)

        key.addEventListener("click", function(event) {
            let keyNumber = Number(event.target.id.slice(3));
            console.log("keyNumber", keyNumber);
            pressedOrder.push(keyNumber);
            console.log(order, pressedOrder);
            displayString = "Pressed Order: " + pressedOrder.join(", ");
            displayer(displayString);
        })
    }
}

function displayer(displayString) {
    document.getElementById("pressed").innerHTML = displayString;
}

function setLevel(level) {
    document.getElementById("level").innerHTML = "Level " + level; 
}

function replay() {
    pressedOrder = [];
    displayer("Pressed Order: ");
    order.forEach((i, idx) => {
        setTimeout(() => {
            let currentButton = document.getElementById(`key${i}`);
            if (currentButton) {
                currentButton.style.backgroundColor = "red";
                setTimeout(() => {
                  currentButton.style.backgroundColor = "grey";
                }, 300);
            }
        }, idx*500);
    });
}


function checkWin() {
    if (JSON.stringify(pressedOrder) == JSON.stringify(order)){
        window.alert("You win!");
    } else {
        window.alert("Try again!");
    }
}