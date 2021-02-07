const dino = document.querySelector(".dino"); //selecionar o dino
const background = document.querySelector('.background');
let isJumping = false;
let position = 0; //posição inicial do dino

//INTERAÇÃO DINOSSAURO
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
    jump();
    }
  }
} //saber se pressionou a tecla espaço

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      //descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      //subindo
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20); //codigo vai ser executado a cada 20 ms
}

// CACTOS

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus); //evita o processamento desnecessario
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //gamer over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
            }else {
                cactusPosition -= 10; //velocidade
                cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime
        )
}

createCactus();
document.addEventListener("keyup", handleKeyUp); //pressionamento de teclas
