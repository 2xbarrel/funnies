let img = document.getElementById("img");
let counterText = document.getElementById("counterText");

let counter = 0;

function wait(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

async function swag(){
  counter++;
  counterText.innerHTML = `YOU HAVE TOUCHED NAD ${counter} TIMES!!!`
  img.setAttribute("src", "2.png");
  await wait(400);
  img.setAttribute("src", "3.png");
  console.log(counter);
};