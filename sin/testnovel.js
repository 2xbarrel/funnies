const visual = document.getElementById("visual");
const dialogue = document.getElementById("dialogue");
const button = document.getElementById("button");
const background = document.getElementById("bg");
const overlay = document.getElementById("overlay");

let dialogueBetter = script[0];

const animations = {
    "shake": [
        { transform: "translateX(0)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(-15px)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(0)" },
    ],
    "shakeChar2": [
        { transform: "translateX(0) scaleX(-1)" },
        { transform: "translateX(15px) scaleX(-1)" },
        { transform: "translateX(-15px) scaleX(-1)" },
        { transform: "translateX(15px) scaleX(-1)" },
        { transform: "translateX(0) scaleX(-1)" },
    ],
    "appear": [
        { opacity: 0 },
        { opacity: 1 },
    ],
    "disappear": [
        { opacity: 1 },
        { opacity: 0 },
    ]
};

const timings = {
    "shake": {
        duration: 200,
        iterations: 2,
    },
    "shakeChar2": {
        duration: 200,
        iterations: 2,
    },
    "appear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    },
    "disappear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    }
};

const extensions = {
    "IDLE": ".png",
    "HAPPY": ".png",
    "ANGRY": ".png",
    "CONFUSED": ".png",
    "CRY": ".png",
    // swaglineswaglineswaglineswaglineswag
    "SCARED": ".gif",
    "LAUGH": ".gif",
    "GRUMPY": ".gif"
};

const extensionsOverlay = {
    "testoverlay": ".png",
    "NONE": ".png",
    "testoverlay2": ".gif",
    "testoverlay3": ".png",
    "trash": ".png",
    "trashoutside": ".png",
    "flowers": ".png",
    "rocks": ".png",
    "bar": ".png",
};

function setChar(charName, dialogue) {
    if (dialogue[charName]) {
        let char = document.getElementById(charName);
        let imageSrc = `../CharacterSprites/${dialogue[charName]["name"]}${dialogue[charName]["emotion"]}${extensions[dialogue[charName]["emotion"]]}`;
        let animationName = dialogue[charName]["animation"];
        char.setAttribute("src", imageSrc);
        if (animationName) {
            char.animate(animations[animationName], timings[animationName]);
        }
    }
};

background.src= `../backgrounds/${dialogueBetter["bg"]}.png`;
overlay.src= `../overlays/${dialogueBetter["overlay"]}${extensionsOverlay[dialogueBetter["overlay"]]}`;
dialogue.innerHTML = `<span class ="${dialogueBetter[dialogueBetter["talker"]]["name"]}">${dialogueBetter[dialogueBetter["talker"]]["name"]}:</span><p>${dialogueBetter["say"]}</p>`;

setChar("char1", dialogueBetter);
setChar("char2", dialogueBetter);

let dialogueNum = 0;

function talkie() {
    dialogueNum++;
    
    let dialogueBetter = script[dialogueNum];

    if (dialogueNum == script.length){
        window.location.href = exit;
    };
    
    setChar("char1", dialogueBetter);
    setChar("char2", dialogueBetter);

    background.src= `../backgrounds/${dialogueBetter["bg"]}.png`;
    overlay.src= `../overlays/${dialogueBetter["overlay"]}${extensionsOverlay[dialogueBetter["overlay"]]}`;
    dialogue.innerHTML = `<span class ="${dialogueBetter[dialogueBetter["talker"]]["name"]}">${dialogueBetter[dialogueBetter["talker"]]["name"]}:</span><p>${dialogueBetter["say"]}</p>`;
    console.log(dialogueNum + 1);
};

document.addEventListener("keydown", (event) => {
    if (["Enter", "ArrowRight", " "].includes(event.key)) {
        talkie();
    }
});

button.addEventListener("click", async () => {
    talkie();
});