// question your life choices simulator AAAAAUUUUUUUUUUUGH
let img = document.getElementById("img");
let cowbody = document.getElementById("cowbody");
let counterText = document.getElementById("counterText");
let statusText = document.getElementById("statusText");
let squeak = new Audio("squeak.mp3");

let statuses =
  ["here we go again....", //0
    "you have touched the cow, good job can you like, leave?", //1
    "ok", //2
    "ok thats enough", //3
    "THATS ENOUGH FUCKING TOUCHING MAN", //4
    "ok bruh.", //5
    "you can stop at any moment you know?", //6
    "i hate you", //7
    "i really do", //8
    "what am i doing with my life", //9
    "zzz", //10
    "DO YOU EVER STOP????", //11
    "DO YOU HAVE LIKE A LIFE???? OR ANYTHING??????", //12
    "what are we doing here....... just to suffer....", //13 
    "this is my legacy.", //14
    "you cant be serious.", //15
    "you know what? fuck you" //16
    ];

let counter = 0;

function wait(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function swag() {
  counter++;
  squeak.play();

  switch (counter) {  // fuck you
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
    case 3000:
      statusText.innerHTML = statuses[14];
      break;
    case 8000:
      statusText.innerHTML = statuses[15];
      break;
    case 9999:
      statusText.innerHTML = statuses[16];
      break;
    case 10000:
      window.location.href = 'https://www.youtube.com/watch?v=MN_bMg2_iIc';
      break;
  }



  counterText.innerHTML = `YOU HAVE TOUCHED THE COW ${counter} TIMES!!!`
  cowbody.setAttribute("src", `body${Math.floor(Math.random() * 4)}.png`)
  img.setAttribute("src", "2.png");
  await wait(400);
  img.setAttribute("src", "1.png");
  // cowbody.setAttribute("src", `body1.png`)
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
// ⣽⣿⣽⣿⠟⢰⠄⠋⢰⠠⠠⡜⢰⣬⠠⠠⠄⠠⠄⠠⠄⣿⢰⢰⠠⣬⠠⢰⢰⣤⢰⠠⣤⣿⣽⣿⠠⠠⢰⣬⠠⠠⣤⣿⣽⣿⣽⣿⣽⣿  holy fuck its gordon freeman.... AGAIN!!!
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