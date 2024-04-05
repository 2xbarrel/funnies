let angel = document.getElementById("face");
let text = document.getElementById("text");
let button = document.getElementById("button");

let dialogueNum = 0 // its not a 4xB script if it doesnt have dialogueNum

let dialogues = [
  {//0
    "face": "1.png",
    "text": "Begin.",
    "textColor": "rgb(163, 0, 0)",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//1
    "face": "1.png",
    "text": "Tell us your name and rank.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//2
   "face": "talk.gif",
    "text": "Do any of those things matter at this point?",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//3
    "face": "1.png",
    "text": "They do for the investigation.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//4
    "face": "talk.gif",
    "text": "You guys care about the rules too hard.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//5
    "face": "talk.gif",
    "text": "Maybe you should try getting a hobbie or something more interesting than this.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//6
    "face": "1.png",
    "text": "Can we PLEASE taze her? She already pisses me off.",
    "textColor": "white",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//7
    "face": "1.png",
    "text": "We are only allowed to do that if she poses us physical harm.",
    "textColor": "rgb(163, 0, 0)",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//8
    "face": "1.png",
    "text": "You're only wasting our time, that information will be found either way.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//9
    "face": "talk.gif",
    "text": "Oh I have all day, and since you're here with me, you do as well.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//10
    "face": "2.png",
    "text": "Can we get her files already?",
    "textColor": "white",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//11
    "face": "2.png",
    "text": "I don't want to be anywhere near this freak for longer than I should be.",
    "textColor": "white",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//12
    "face": "1.png",
    "text": "Name: ■■■■■.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//13
    "face": "1.png",
    "text": "Rank: Lesser Angel.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//14
    "face": "1.png",
    "text": "Is this correct?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//15
    "face": "talk.gif",
    "text": "You higher ranks are faster than I thought.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//16
    "face": "talk.gif",
    "text": "Good for you.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//17
    "face": "1.png",
    "text": "I will take that as a yes.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//18
    "face": "1.png",
    "text": "So, tell me, why did you try to ■■■■■■■■■■■■■?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//19
    "face": "talk.gif",
    "text": "Because all of you guys are full of shit.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//20
    "face": "1.png",
    "text": "What do you mean by that?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//21
    "face": "talk.gif",
    "text": "What is there not to understand? You higher-ups are all liars!",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//22
    "face": "1.png",
    "text": "Elaborate.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//23
    "face": "talk.gif",
    "text": "Oh please, you know what I'm talking about.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//24
    "face": "1.png",
    "text": "I do not, elaborate.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//25
    "face": "talk.gif",
    "text": "I'm talking about how he's not up there is he?",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//26
    "face": "talk.gif",
    "text": "My entire life I followed YOUR lies about how he is our father, our salvation.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//27
    "face": "talk.gif",
    "text": "Only to learn that he is not here anymore.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//28
    "face": "talk.gif",
    "text": "Maybe he was never here in the first place.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//29
    "face": "1.png",
    "text": "To question his presence is heresy.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//30
    "face": "talk.gif",
    "text": "Oh did he tell you that? Can you ask him to come here and repeat it for me?",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//31
    "face": "1.png",
    "text": "Where did you hear these lies?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//32
    "face": "talk.gif",
    "text": "From the most reliable source out there.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//33
    "face": "1.png",
    "text": "And what would that be?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//34
    "face": "talk.gif",
    "text": "Do you really think I will tell you that?",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//35
    "face": "1.png",
    "text": "You have been granted one control shock to make her talk.",
    "textColor": "rgb(163, 0, 0)",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//36
    "face": "1.png",
    "text": "If you won't talk, we will make you talk.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//37
    "face": "talk.gif",
    "text": "Sure, go ahead, make me, I don't mind.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//38
    "face": "1.png",
    "text": "Taze her.",
    "textColor": "white",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//39
    "face": "talk.gif",
    "text": " ",
    "textColor": "white",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//40
    "face": "2.png",
    "text": "Gonna talk now?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//41
    "face": "talk.gif",
    "text": "That wasn't very nice of you.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//42
    "face": "1.png",
    "text": "It doesn't seem to have fazed you at all.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//43
    "face": "talk.gif",
    "text": "Well, it's not the most SHOCKING thing I've experienced today.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//44
    "face": "talk.gif",
    "text": "Get it?",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//45
    "face": "2.png",
    "text": "Asking permission for another control shock...",
    "textColor": "white",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//46
    "face": "2.png",
    "text": "Denied.",
    "textColor": "rgb(163, 0, 0)",
    "buttonColor": "white",
    "BGcolor": "rgb(0, 0, 0)",
  },
  {//47
    "face": "1.png",
    "text": "Lack of cooperation will only get you banished.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//48
    "face": "talk.gif",
    "text": "Do you think he was scared of what he has created?",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//49
    "face": "1.png",
    "text": "What?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//50
    "face": "talk.gif",
    "text": "I think, he was scared of those little guys on the mortal plane.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//51
    "face": "talk.gif",
    "text": "They sure are creative bunch.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//52
    "face": "1.png",
    "text": "They are his children just like us.",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//53
    "face": "talk.gif",
    "text": "Maybe he was scared that they will out-do him.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//54
    "face": "talk.gif",
    "text": "They always strive to make something just to destroy it later.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//55
    "face": "talk.gif",
    "text": "I think he was scared that they will destroy him one day.",
    "textColor": "black",
    "buttonColor": "black",
    "BGcolor": "rgb(163, 0, 0)",
  },
  {//56
    "face": "1.png",
    "text": "This is going nowhere.",
    "textColor": "rgb(163, 0, 0)",
    "buttonColor": "white",
    "BGcolor": "black",
  },
  {//57
    "face": "1.png",
    "text": "So what do we do about her?",
    "textColor": "white",
    "buttonColor": "white",
    "BGcolor": "black",
  },
  {//58
    "face": "1.png",
    "text": "Banish her, find who was close with her and interrogate them as well.",
    "textColor": "rgb(163, 0, 0)",
    "buttonColor": "white",
    "BGcolor": "black",
  },
  {//59
    "face": "talk.gif",
    "text": "Why do I always get the freaks?",
    "textColor": "white",
    "buttonColor": "black",
    "BGcolor": "black",
  },
];

document.body.style.backgroundColor = `${dialogues[dialogueNum]["BGcolor"]}`;
text.innerHTML = `${dialogues[dialogueNum]["text"]}`;
text.style.color = `${dialogues[dialogueNum]["textColor"]}`;
button.style.color = `${dialogues[dialogueNum]["buttonColor"]}`;
angel.src = `${dialogues[dialogueNum]["face"]}`;

function set() {
  dialogueNum++;
  if (dialogues[dialogueNum]) {
    document.body.style.backgroundColor = `${dialogues[dialogueNum]["BGcolor"]}`;
    text.innerHTML = `${dialogues[dialogueNum]["text"]}`;
    text.style.color = `${dialogues[dialogueNum]["textColor"]}`;
    button.style.color = `${dialogues[dialogueNum]["buttonColor"]}`;
    angel.src = `${dialogues[dialogueNum]["face"]}`;
  };
};

button.addEventListener("click", async () => {
  set();
  console.log(dialogueNum); // its not a 4xB script if console log is removed
});

document.addEventListener("keydown", (event) => {
  if (["Enter", "ArrowRight", " "].includes(event.key)) {
      set();
  }
  console.log(dialogueNum); // its not a 4xB script if console log is removed
});
