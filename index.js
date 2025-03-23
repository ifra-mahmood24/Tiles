let order = [1,4,13,16,2,3,5,6,7,8,9,10,11,12,14,15];
let pressedOrder = [];

window.onload = function(limit) {
    let container = document.getElementById("keyContainer");
    for (let i=0; i<limit; i++) {
        let key = document.createElement("button");
        key.innerText = `${i}`;
        key.id = `key${i}`;
        container.appendChild(key)

    }
}

window.onload = function () {
    setTimeout(() => {
        changeColour();
    }, 500);
};

function changeColour() {
    order.forEach((i, idx) => {
        setTimeout(() => {
            let currentButton = document.getElementById(`key${i}`);
            currentButton.style.backgroundColor = "red";
            setTimeout(() => {
                currentButton.style.backgroundColor = "grey";
            }, 300)
        }, idx*500);
    });
}

let buttons = document.querySelectorAll(".key");

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        let keyNumber = Number(event.target.id.slice(3));
        console.log("keyNumber", keyNumber);
        pressedOrder.push(keyNumber);
        console.log(order, pressedOrder);
    });
})

function checkWin() {
    if (JSON.stringify(pressedOrder) == JSON.stringify(order)){
        window.alert("You win!");
    } else {
        window.alert("Try again!");
    }
}