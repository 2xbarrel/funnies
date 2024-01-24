// question your life choices simulator 2
let img = document.getElementById("img");
let blush = document.getElementById("blush");
let counterText = document.getElementById("counterText");
let statusText = document.getElementById("statusText");

let statuses =
  ["you haven't touched the cow yet", //0
    "you have touched the cow, good job", //1
    "you're getting good at it", //2
    "you have touched the cow enough, you can stop now", //3
    "well alright do what you want i don't care", //4
    "you've been going at it for a while now...", //5
    "you can stop at any moment you know?", //6
    "if you keep doing it just to spite me then woo yeah touch the cow yeaaaa", //7
    "didn't work? damn", //8
    "im getting sleepy", //9
    "zzz", //10
    "DO YOU EVER STOP????", //11
    "DO YOU HAVE LIKE A LIFE???? OR ANYTHING??????", //12
    "you have won, this was a test, you are a real cow toucher, don't let anyone tell you what to do"]; //13

let counter = 0;

function wait(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function swag() {
  counter++;

  switch (counter) {  // i could've DEFINITELY do this is in a better more automized way, but what fun is that?
    case 1:
      statusText.innerHTML = statuses[1];
      break;
    case 50:
      statusText.innerHTML = statuses[2];
      break;
    case 100:
      statusText.innerHTML = statuses[3];
      break;
    case 150:
      statusText.innerHTML = statuses[4];
      break;
    case 250:
      statusText.innerHTML = statuses[5];
      break;
    case 350:
      statusText.innerHTML = statuses[6];
      break;
    case 450:
      statusText.innerHTML = statuses[7];
      break;
    case 500:
      statusText.innerHTML = statuses[8];
      break;
    case 600:
      statusText.innerHTML = statuses[9];
      break;
    case 700:
      statusText.innerHTML = statuses[10];
      break;
    case 900:
      statusText.innerHTML = statuses[11];
      break;
    case 1000:
      statusText.innerHTML = statuses[12];
      break;
    case 1500:
      statusText.innerHTML = statuses[13];
      break;
  }

  blush.style.opacity = `${counter}%`; // god bless the ${}
  counterText.innerHTML = `YOU HAVE TOUCHED THE COW ${counter} TIMES!!!`
  img.setAttribute("src", "2.png");
  await wait(400);
  img.setAttribute("src", "1.png");
  console.log(counter); // i will not remove console log from the script fuck you
};



// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠟⠟⢰⡜⢰⣤⠠⢰⠠⣤⢰⣬⢰⣬⠟⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠟⠟⠠⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⢰⢰⡜⢰⠟⡟⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣬⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠠⠟⡟⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⢰⠠⠄⠠⠄⠠⠠⢰⠠⣤⠠⣤⢰⣬⢰⡜⢰⣤⢰⠋⠠⠠⠄⠠⠄⠠⠄⡜⣬⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⠟⠠⠄⠠⠠⣬⣤⠟⠋⠟⡜⠟⡜⠟⡜⠟⠋⣬⢰⠟⡟⣽⠟⣬⠄⠠⠄⠠⠄⢰⣤⢻⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⠟⠄⠠⠟⣽⣬⠟⣬⠟⣬⠟⣬⠟⣬⠟⡜⠟⠋⣬⠋⣿⣽⣿⣽⣬⠄⠠⠄⠠⠠⣤⣬⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⠋⠠⠟⣿⡜⠟⣬⠟⣬⠟⡜⠟⡜⠟⠋⣬⠋⠟⣤⣬⠟⣿⣽⣿⠟⠠⠄⠠⠄⢰⠠⢰⣬⣿⣽⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⠟⠠⠠⣿⣬⠟⣬⠟⡜⠟⣬⠟⡜⠟⡜⠟⠋⠟⡜⠟⣤⢻⣽⣿⣽⣿⢰⠠⠄⠠⠄⢰⠠⣬⡟⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣬⠄⡟⣽⣬⡜⠟⣬⠟⡜⠟⣬⠟⣬⠟⣤⣬⢰⡜⠠⢰⠠⡟⣽⣿⣽⣿⠄⠠⠄⠠⠠⢰⢰⣽⣽⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⢻⠠⠟⣿⠋⠟⠋⠟⠋⣬⠋⠟⡜⣬⢰⣤⠠⠠⠄⠠⠄⠠⠄⠠⠄⡜⣽⣿⠄⠠⠄⢰⠠⢰⣬⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⢰⠟⠠⢰⠄⢰⠠⣬⣬⠟⣬⠟⢰⢰⠄⠠⠄⢰⠠⡜⠠⣤⠠⠠⡜⠟⣤⠋⠄⠠⠄⠠⠄⣬⠟⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣬⠄⠠⠄⠠⠄⠠⠄⠋⠠⠠⠄⠠⢰⣬⢰⣤⢰⣬⠋⣽⢰⣬⠄⣽⣽⣽⢰⣤⢰⢰⠄⠠⢰⡟⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⠟⢰⠄⠋⢰⠠⠠⡜⢰⣬⠠⠠⠄⠠⠄⠠⠄⣿⢰⢰⠠⣬⠠⢰⢰⣤⢰⠠⣤⣿⣽⣿⠠⠠⢰⣬⠠⠠⣤⣿⣽⣿⣽⣿⣽⣿  holy fuck its gordon freeman
// ⣿⣽⣿⣽⣬⠄⠠⢰⡟⣤⠟⢰⠟⣬⠟⠠⠠⠟⣽⠟⠠⠄⣬⢰⣬⢰⣬⢰⡜⢰⠠⠄⣬⣬⣿⣽⣽⠠⠠⠠⠋⠠⠟⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⠠⣽⣿⠠⠟⣬⣬⣤⢰⢰⠠⠠⣽⣬⣿⢻⢰⠄⢰⠠⣤⠠⢰⠄⠠⠠⣬⣤⡟⣽⣿⣽⣤⠠⣬⣬⢻⠟⠟⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⠠⡜⣽⣿⣽⣿⠟⣬⢰⠠⠄⣿⣬⠟⠟⣿⡟⠟⢰⠋⢰⣬⢰⣬⡜⠟⡜⡟⡟⣿⣽⣿⢰⡜⢻⣿⠟⣿⣽⣽⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⠠⢰⢰⣬⠠⠠⠄⠠⠠⣽⣽⣬⠋⠟⠟⣿⢻⢻⠟⣽⠟⢻⣬⠟⡜⡟⠟⣿⣽⣿⣽⠟⣬⣿⡟⠟⠟⣿⠟⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⠟⣬⢰⠟⣬⠟⠟⡟⢰⣬⢰⣬⡜⡟⣬⡟⣬⠟⣬⠟⡜⡟⠟⣿⣽⣿⢻⣿⠟⣿⣽⣽⣬⣽⠟⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠟⣬⣬⡟⣬⣽⣬⠟⢰⣤⠠⢰⠠⣤⢰⠟⣬⠟⠋⠟⣬⣿⣽⣿⠟⣽⢻⣿⣽⣿⠟⣽⠟⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠋⣬⣬⣽⣬⢰⠄⠠⠄⠠⠄⠠⠄⠠⠠⣬⢰⣬⡜⠟⠟⣽⠟⡟⠟⣿⣽⣿⠟⠟⡟⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠋⠟⡜⢰⠄⢰⠄⠠⠠⢰⠠⢰⠠⠠⠠⡜⣤⠟⣬⢻⣬⠟⣬⣽⢻⣿⣽⠟⠠⣿⣽⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣽⡜⠠⠄⢰⠠⣤⢰⣬⢰⡜⢰⣬⢰⠠⠄⣤⢰⠟⣬⡟⣬⢻⠟⣽⢻⣿⣬⠟⣽⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⡟⠄⠠⣤⠟⡜⣬⢰⣬⢰⣬⣬⠟⢰⢰⠄⢰⢰⣬⡜⠟⣬⢻⠟⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠟⠠⠠⢻⣤⢰⠄⠠⠄⠠⠠⣬⠋⣬⢰⣤⠠⣤⢰⣬⠋⠟⠟⣽⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣬⠄⣬⠋⣬⢰⢰⠠⠠⠄⢰⢰⣬⠠⢰⠄⢰⠠⣬⠋⣬⡜⠟⡟⣿⣽⣿⡜⠋⠋⡟⡟⣿⣽⣿⣽⣿
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠠⠠⠠⡜⢰⠋⠄⠠⠄⠠⠄⠠⠄⢰⠠⢰⠄⣤⣤⣬⣬⢻⡟⣿⣬⣬⣤⣬⠄⠠⠄⠠⣬⣿⣽⣽⣽
// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠠⢰⠠⢰⠄⠠⠄⠠⠄⠠⠄⠠⠄⢰⠠⢰⠠⠟⣬⢻⠋⡜⠄⠠⠠⣬⢰⠠⠄⢰⡜⣿⠟⠟⡜⣽
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⢻⢰⠋⠠⠠⠄⠠⠄⠠⠄⠠⠠⢰⠠⢰⢰⡜⢰⣤⠄⠠⠄⢰⠠⣤⢰⢰⠄⣬⠟⣿⣬⣬⢰⠟⠟
// ⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⣽⣿⠋⣤⠠⠠⠠⠟⢰⢰⠠⠠⠄⠠⠄⢰⠠⣤⠠⢰⠄⠠⠄⠠⠠⢰⠠⢰⠄⠠⢰⣽⡟⠟⠠⢰⠠⡜⢰⠟
// ⣿⣽⣿⣽⣿⣽⣿⣽⣿⢰⠠⠄⠠⠄⠠⠄⠠⠠⡜⠠⢰⠄⠠⠄⠠⠄⠠⠄⠠⠄⠠⠄⢰⠠⢰⠠⢰⠠⣬⠟⣽⣤⠠⠄⠠⠠⣤⢰⡜⣤ 