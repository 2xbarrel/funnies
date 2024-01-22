let screen = document.getElementById("screen");

let [button1, button2] = document.getElementsByTagName("area");

let counter = 1;

let max_img = 7;

function wait(milliseconds){
    return new Promise(resolve => {
        new Audio("beep.mp3").play();
        setTimeout(resolve, milliseconds);
    });
}

button1.addEventListener("click", async () => {
    counter -= 1;
    if (counter < 1) {
        counter = 1;
    }
    screen.setAttribute("src", "noise.png");
    await wait(243);
    screen.setAttribute("src", `screen${counter}.png`); 
});

button2.addEventListener("click", async () => {
    counter += 1;
    if (counter > max_img) {
        counter = max_img;
    }
    screen.setAttribute("src", "noise.png");
    await wait(243);
    screen.setAttribute("src", `screen${counter}.png`); 
});