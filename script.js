const textToType = "          Kiki Hendri Prasetyo\nSilahkan mengunjungi website saya dengan alamat:\n";
const boldText = "KIHEO.MY.ID";

const typingSpeed = 100;
const delayBeforeRestart = 3000;
let index = 0;
let boldIndex = 0;

function typeWriter() {
  const output = document.getElementById("text-output");

  if (index < textToType.length) {
    const currentChar = textToType.charAt(index);
    if (currentChar === '\n') {
      output.innerHTML += "<br>";
    } else {
      output.innerHTML += currentChar;
    }
    index++;
    setTimeout(typeWriter, typingSpeed);
  } 
  else if (boldIndex < boldText.length) {
    let boldElement = document.getElementById("bold-part");
    
    if (!boldElement) {
      boldElement = document.createElement("b");
      boldElement.id = "bold-part";
      output.appendChild(boldElement);
    }
    
    boldElement.innerHTML += boldText.charAt(boldIndex);
    boldIndex++;
    setTimeout(typeWriter, typingSpeed);
  } 
  else {
    setTimeout(() => {
      output.innerHTML = "";
      index = 0;
      boldIndex = 0;
      typeWriter();
    }, delayBeforeRestart);
  }
}

window.onload = () => {
  setTimeout(typeWriter, 200); 
};
