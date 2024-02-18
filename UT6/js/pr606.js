let hanged = document.getElementById('hanged');
let spaces = document.getElementById('spaces');
let keyboard = document.getElementById('keyboard')
keyboard.addEventListener("click", handleClick);
document.addEventListener('keydown', handleKeyPress);

let numPalabra=Math.floor(Math.random()*words.length)
let palabra = words[numPalabra];
palabra=palabra.split('');
let fallos=0;
palabra.forEach(letter => {
    spaces.innerHTML+=`<span class="space"></span>`;
});

let letters='abcdefghijklmnñopqrstuvwxyz';
letters=letters.split('');

letters.forEach(letter => {
    keyboard.innerHTML+=`<span class="key">${letter}</span>`;
});

function handleClick(event){
    if (palabra.includes(event.target.textContent)){
        event.target.classList.add("succeed");
        palabra.forEach((letra, index) => {
            if (event.target.textContent==letra){
                spaces.children[index].textContent = event.target.textContent;
        }
    });
    }else{
        fallos++;
        event.target.classList.add("fail");
        hanged.innerHTML=`<img src="../imgs/hangman/hangman_0${fallos}.png" />`
            if(fallos==9){
                window.location.reload()
            }
    }
}

function handleKeyPress(event) {
    let keyPressed = event.key.toLowerCase();
    if (letters.includes(keyPressed)) {
      let letterElements = document.getElementsByClassName('key');
      for (let i = 0; i < letterElements.length; i++) {
        if (letterElements[i].textContent.toLowerCase() === keyPressed) {
          if (palabra.includes(keyPressed)) {
            letterElements[i].classList.add("succeed");
            palabra.forEach((letra, index) => {
              if (keyPressed === letra) {
                spaces.children[index].textContent = keyPressed;
                palabra[index] = ''; // 
              }
            });
          } else {
            fallos++;
            letterElements[i].classList.add("fail");
            hanged.innerHTML = `<img src="../imgs/hangman/hangman_0${fallos}.png" />`;
            if (fallos === 9) {
              window.location.reload();
            }
          }
          break;
        }
      }
    }
  }