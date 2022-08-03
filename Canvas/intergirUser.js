//Este codigo mostra como interagir com doubleClick e com o botão direito do mouse. Esta interação é feita com desenho por meio do canvas.

//Var e Seletores
let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
pincel.fillStyle = 'yellowGreen';
pincel.fillRect(0, 0, 600, 400);

//Sempre lembrar de indicar o valor inicial do indice do array;
let cores = ['gray', 'blueViolet', 'orange', 'white', 'red', 'blue'];
let indiceCorAtual = 0;
let raio = 10; // Quando esta varivel está fora da função ela passa a ser um valor recorrente, ou seja, vai sempre somando o valor declarado. Se estiver dentro da função ela mantem o valor que ela recebe dentro da função

//Função para desenhar o circulo com a condição se a tecla Shift for pressionada o desenho aumenta o tamanho para 30.
desenharCirculo = (evento) => {
  let x = evento.pageX - tela.offsetLeft;
  let y = evento.pageY - tela.offsetTop;

  if (evento.shiftKey && evento.altKey) {
    alert('Funcionou!');
   
  } else if (evento.shiftKey && raio + 10 <= 50) {
    raio += 10;
  } else if (evento.altKey && raio - 5 >= 10) {
    raio -= 5;
  } 

  pincel.fillStyle = cores[indiceCorAtual];
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
};

tela.addEventListener('dblclick', desenharCirculo, () => {});

//Função para mudar de cor. Tem que retornar falso para não ficar abrindo o menu quando der o click com o botão direito do mouse
mudarCor = () => {
  indiceCorAtual++;

  if (indiceCorAtual >= cores.length) {
    indiceCorAtual = 0;
  }

  return false;
};

//oncontextmenu é o método para manipular o click com o botão direito do mouse. Neste caso é ncessário chamar a função "desenharCirculo" para ficar visivel para o user.
tela.oncontextmenu = mudarCor;
oncontextmenu = desenharCirculo;
